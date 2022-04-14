/* eslint-disable default-param-last */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
class TweetsController {
  constructor() {
    this.userList = new UserList();
    this.tweetColl = new TweetCollection();
    TweetCollection.user = this.userList.activeUser;
    this.tweetColl.addAll([...tweets]);
    this.headerView = new HeaderView('headerview');
    this.formView = new FormView('tweet');
    this.editformView = new EditAreaView('tweet');
    this.textareaView = new TextAreaView('write_area', this.userList.activeUser);
    this.registrationView = new RegistrationView('tweet');
    this.filtersView = new FiltersView('inputs');
    this.filterView = new FilterView('filter');
    this.feedView = new TweetFeedView('tweet', this.userList.activeUser);
    this.tweetView = new TweetView('tweet', this.userList.activeUser);
    this.commentView = new CommentsView('allcomments');
    this.filterConfig = {};
    this.setEventCallbacks();
    this.setCurrentUser(this.userList.activeUser);
  }

  setEventCallbacks() {
    this.headerView.loginEventFunc = this.loginCallbacksFunction.bind(this);
    this.headerView.signupEventFunc = this.registrationCallbacksFunction.bind(this);
    this.headerView.signOffEventFunc = this.signOffCallbacksFunction.bind(this);
    this.textareaView.publishTweetEventFunc = this.publishTweetCallbackFunction.bind(this);
    this.filtersView.filterTweetEventFunc = this.filtersCallbackFunction.bind(this);

    this.feedView.editTweetEventFunc = this.editTweetCallbackFunction.bind(this);


   //this.editformView.resetEditTweetEventFunc = this.backEditTweetCallbackFunction(this);
    this.editformView.confirmEditTweetEventFunc = this.confirmEditTweetCallbackFunction.bind(this);

    this.feedView.removeTweetEventFunc = this.removeTweetCallbackFunction.bind(this);
    this.tweetView.commentEventFunc = this.commentCallbackFunction.bind(this);
    this.feedView.modalEventFunc = this.modalViewCallbackFunction.bind(this);
    this.feedView.showTweetEventFunc = this.showTweetCallbackFunction.bind(this);
    this.tweetView.showEventFunc = this.showCallbackFunction.bind(this);
  }

  loginCallbacksFunction() {
    this.formView.display();
    document.getElementById('inputs').style.display = 'none';
    document.querySelector('.more').style.display = 'none';
    document.getElementById('write_area').style.display = 'none';

    const formLogin = document.getElementById('form_login');
    formLogin.addEventListener('submit', (event) => {
      event.preventDefault();

      if (this.userList.checkLogin(formLogin[0].value, formLogin[1].value)) {
        this.userList.setUser(formLogin[0].value, formLogin[1].value);
        location.reload();
        this.setCurrentUser(formLogin[0].value);
        this.setFilter(formLogin[0].value);
      }
    });
  }

  registrationCallbacksFunction() {
    this.registrationView.display();
    document.getElementById('inputs').style.display = 'none';
    document.querySelector('.more').style.display = 'none';
    document.getElementById('write_area').style.display = 'none';

    const formRegistration = document.getElementById('form_reg');
    formRegistration.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!this.userList.checkRegistr(formRegistration[0].value)) {
        if (formRegistration[1].value === formRegistration[2].value) {
          this.userList.addUser(formRegistration[0].value, formRegistration[1].value);
          localStorage.setItem('password', JSON.stringify(formRegistration[1].value));

          controller.setCurrentUser(formRegistration[0].value);
          const arr = [formRegistration[0].value];
          this.setFilter(arr);

          location.reload();
        }
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  signOffCallbacksFunction() {
    controller.userList.activeUser = localStorage.setItem('active_user', JSON.stringify(''));
    controller.setCurrentUser('');
    location.reload();
  }

  publishTweetCallbackFunction(event) {
    const data = Object.fromEntries(new FormData(event.target).entries());
    event.preventDefault();
    this.addTweet(data.text, controller.userList.activeUser);
    this.textareaView.display();
  }

  editTweetCallbackFunction(event) {
    event.preventDefault();
    const tweetId = event.currentTarget.getAttribute('name');
    const tweet = this.tweetColl.get(tweetId);
    document.getElementById('write_area').style.display = 'none';
    this.editformView.display(tweet.text, tweetId);
  }

  confirmEditTweetCallbackFunction(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    const tweetId = this.editformView.enteredId;
    this.editTweet(tweetId, data.text);

    document.getElementById('write_area').style.display = 'block';
    this.feedView.display(controller.tweetColl.getPage(0, 10, this.filterConfig));
    this.textareaView.display();
  }

  // backEditTweetCallbackFunction(event) {
  //   document.getElementById('write_area').style.display = 'block';
  //   this.feedView.display(controller.tweetColl.getPage(0, 10, this.filterConfig));
  //   this.textareaView.display();
    
  // }

  removeTweetCallbackFunction(event) {
    const tweetId = event.currentTarget.getAttribute('name');
    event.preventDefault();
    this.removeTweet(tweetId);
  }

  modalViewCallbackFunction(event) {
    const tweetId = event.currentTarget.getAttribute('name');
    event.preventDefault();
    this.modalView.display();
  }

  showTweetCallbackFunction(event) {
    document.getElementById('write_area').style.display = 'none';
    document.getElementById('inputs').style.display = 'none';
    document.querySelector('.more').style.display = 'none';
    const tweetId = event.currentTarget.getAttribute('name');
    event.preventDefault();
    controller.showTweet(tweetId);
  }

  showCallbackFunction(event) {
    event.preventDefault();
    this.feedView.display(controller.tweetColl.getPage(0, 10, this.filterConfig));
    document.getElementById('write_area').style.display = 'block';
    document.getElementById('inputs').style.display = 'block';
    document.querySelector('.more').style.display = 'block';
  }

  commentCallbackFunction(event) {
    event.preventDefault();
    const items = event.target.querySelector('.btn_send')
    const data = Object.fromEntries(new FormData(event.target).entries());
    const twId = items.getAttribute('name');
    event.stopPropagation();
    this.tweetColl.addComment(twId, data.text);
    controller.showTweet(twId);
  }

  filterValue(arr = []) {
    const obj = {
      author: arr[0],
      dateFrom: arr[1],
      dateTo: arr[2],
      text: arr[3],
      hashtags: arr[4],
    };

    for (const key in obj) {
      if (!obj[key]) {
        delete obj[key];
      }
    }

    return obj;
  }

  filtersCallbackFunction(event) {
    event.preventDefault();
    const authorFilter = document.getElementById('filter');
    const dateFilter_from = document.getElementById('filter_date_from');
    const dateFilter_to = document.getElementById('filter_date_to');
    const textFilter = document.getElementById('filter_text');
    const tagFilter = document.getElementById('filter_tag');

    const filters = this.filterValue([authorFilter.value, dateFilter_from.value, dateFilter_to.value, textFilter.value, tagFilter.value]);
    controller.getFeed(0, 10, filters);
  }

  setFilter(arr) {
    const authors = arr.map((user) => user.user);
    this.filterView.setAuthors(authors);
  }

  setCurrentUser(user) {
    this.headerView.display(user);
  }

  addTweet(text, user) {
    if (text && user) {
      this.tweetColl.add(text, user);
      this.feedView.display(controller.tweetColl.getPage(0, 10, this.filterConfig));
    }
    return false;
  }

  editTweet(id, tw) {
    this.tweetColl.edit(id, tw);
    this.feedView.display(this.tweetColl.getPage(0, 10, this.filterConfig));
  }

  removeTweet(tw) {
    this.tweetColl.remove(tw);
    this.feedView.display(this.tweetColl.getPage(0, 10, this.filterConfig));
  }

  getFeed(skip = 0, top = 10, filterConfig) {
    this.feedView.display(this.tweetColl.getPage(skip, top, filterConfig));
  }

  showTweet(id) {
    const tweet = this.tweetColl.get(id);

    if (tweet) {
      this.tweetView.display(tweet);
      this.commentView.display(tweet.comments);
    }
  }
}

function showTags() {
  const entries = document.getElementsByTagName('p');

  if (entries && entries.length) {
    for (let i = 0; i < entries.length; i += 1) {
      entries[i].innerHTML = entries[i].innerHTML.replace(/#(\S+)/g, '<span style= color="blue"><a>#$1</a></span>');
    }
  }
}

const controller = new TweetsController();

const mainViewDocument = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.none').style.opacity = '0';
    controller.userList.restore();
    controller.tweetColl.restore();
    const alltweets = controller.tweetColl.getPage(0, 10, controller.filterConfig);
    controller.feedView.display(alltweets); // Показать список по фильтру
    controller.filtersView.display();
    controller.setFilter(controller.userList.users); // Добавить список авторов
    controller.textareaView.display();
  });
};

mainViewDocument();

const showMore = document.getElementById('more').addEventListener('click', (event) => {
  controller.getFeed(0, tweet.childElementCount + 10, {});
  event.stopPropagation();
});
