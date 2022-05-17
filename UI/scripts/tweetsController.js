/* eslint-disable no-shadow */
/* eslint-disable no-lone-blocks */
/* eslint-disable default-param-last */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
class TweetsController {
  constructor() {
    this.feedApiService = new TweetFeedApiService();
    this.headerView = new HeaderView('headerview');
    this.modalView = new ModalView('for_modal');
    this.formView = new LoginFormView('tweet');
    this.editformView = new EditAreaView('tweet');
    this.textareaView = new TextAreaView('write_area', this.feedApiService.userList.activeUser);
    this.registrationView = new RegistrationView('tweet');
    this.filtersView = new FiltersView('inputs');
    this.filterView = new FilterView('filter');
    this.feedView = new TweetFeedView('tweet', this.feedApiService.userList.activeUser);
    this.tweetView = new TweetView('tweet', this.feedApiService.userList.activeUser);
    this.commentView = new CommentsView('allcomments');
    this.filterConfig = {};
    this.setEventCallbacks();
    this.setCurrentUser(this.feedApiService.userList.activeUser);
  }

  setEventCallbacks() {
    this.headerView.loginEventFunc = this.loginCallbacksFunction.bind(this);
    this.headerView.signupEventFunc = this.registrationCallbacksFunction.bind(this);
    this.headerView.signOffEventFunc = this.signOffCallbacksFunction.bind(this);
    this.textareaView.publishTweetEventFunc = this.publishTweetCallbackFunction.bind(this);
    this.filtersView.filterTweetEventFunc = this.filtersCallbackFunction.bind(this);
    this.registrationView.confirmRegistrFormEventFunc = this.sendRegistrationCallbacksFunction.bind(this);
    this.formView.confirmLoginFormEventFunc = this.sendLoginCallbacksFunction.bind(this);

    this.feedView.editTweetEventFunc = this.editTweetCallbackFunction.bind(this);
    this.editformView.confirmEditTweetEventFunc = this.confirmEditTweetCallbackFunction.bind(this);
    this.modalView.removeTweetEventFunc = this.removeTweetCallbackFunction.bind(this);
    this.tweetView.commentEventFunc = this.commentCallbackFunction.bind(this);
    this.feedView.modalEventFunc = this.modalViewCallbackFunction.bind(this);
    this.feedView.showTweetEventFunc = this.showTweetCallbackFunction.bind(this);
    this.tweetView.showEventFunc = this.showCallbackFunction.bind(this);
    this.editformView.showEventFunc = this.showCallbackFunction.bind(this);
    this.feedApiService.errorView.showEventFunc = this.showCallbackFunction.bind(this);
  }

  viewForBloks() {
    document.getElementById('inputs').style.display = 'none';
    document.querySelector('.more').style.display = 'none';
    document.getElementById('write_area').style.display = 'none';
  }

  loginCallbacksFunction() {
    this.formView.display();
    this.viewForBloks();
  }

  sendLoginCallbacksFunction(event) {
    let errorText;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(document.getElementById('form_login')).entries());
    this.feedApiService.login(data.login, data.password).then((result) => {
      if (result) {
        this.setCurrentUser(data.login);
      }
      location.reload();
    })
      .catch((error) => {
        if (error.status === 403) {
          errorText = 'Неверный логин и/или пароль';
          this.formView.display(errorText);
        } else {
          errorText = `Ошибка со статусом ответа #${error.status}.Попробуйте еще раз!`;
          this.formView.display(errorText);
        }
      });
  }

  registrationCallbacksFunction(event) {
    this.registrationView.display();
    this.viewForBloks();
    event.preventDefault();
  }

  sendRegistrationCallbacksFunction(event) {
    let errorText;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(document.getElementById('form_reg')).entries());
    {
      if (data.password === data.passwordRepeat) {
        this.feedApiService.register(data.login, data.password)
          .then((result) => {
            if (result) {
              localStorage.setItem('password', JSON.stringify(data.password));
              controller.setCurrentUser(data.login);
              setTimeout(() => {
                location.reload();
              }, 200);
            }
          })
          .catch((error) => {
            if (error.status === 409) {
              errorText = `Пользователь '${data.login}' уже существует.`;
              this.registrationView.display('', errorText);
            } else {
              errorText = `Ошибка со статусом ответа #${error.status}.Попробуйте еще раз!`;
              this.registrationView.display('', errorText);
            }
          });
      } else {
        errorText = 'Пароли не совпадают.';
        this.registrationView.display('', errorText);
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  signOffCallbacksFunction() {
    controller.feedApiService.userList.activeUser = localStorage.setItem('active_user', JSON.stringify(''));
    controller.feedApiService.userList.token = localStorage.setItem('token', JSON.stringify(''));
    controller.setCurrentUser('');
    location.reload();
  }

  publishTweetCallbackFunction(event) {
    const data = Object.fromEntries(new FormData(event.target).entries());
    event.preventDefault();
    if (data.text) {
      this.feedApiService.addTweetInServer(data.text).then((tweetsForDisplaying) => {
        this.feedView.display(tweetsForDisplaying);
        this.setFilter(tweetsForDisplaying);
      });
      this.textareaView.display();
    }
  }

  editTweetCallbackFunction(event) {
    event.preventDefault();
    const tweetId = event.currentTarget.getAttribute('name');
    this.feedApiService.getTweets().then((response) => {
      const tweetForShowing = response.find((tweet) => tweet.id === tweetId);
      this.viewForBloks();
      this.editformView.display(tweetForShowing.text, tweetId);
    });
  }

  confirmEditTweetCallbackFunction(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    const tweetId = this.editformView.enteredId;
    if (data.text) {
      this.feedApiService.editTweetInServer(tweetId, data.text);
      setTimeout(() => {
        location.reload();
        this.filtersView.resetTweetEvent();
      }, 200);
    }
  }

  modalViewCallbackFunction(event) {
    event.preventDefault();
    document.getElementById('for_modal').style.display = 'block';
    const tweetId = event.currentTarget.getAttribute('name');
    this.modalView.display(tweetId);
  }

  removeTweetCallbackFunction(event) {
    event.preventDefault();
    const tweetId = this.modalView.enteredId;
    if (tweetId) {
      this.feedApiService.deleteTweetInServer(tweetId).then((tweetsForDisplaying) => {
        this.feedView.display(tweetsForDisplaying);
        this.setFilter(tweetsForDisplaying);
        document.getElementById('for_modal').style.display = 'none';
      });
    }
  }

  showTweetCallbackFunction(event) {
    event.preventDefault();
    this.viewForBloks();
    const tweetId = event.currentTarget.getAttribute('name');
    controller.showTweet(tweetId);
  }

  showCallbackFunction(event) {
    event.preventDefault();
    this.feedApiService.getTweets(0, 10, this.filterConfig).then((result) => {
      controller.feedView.display(result);
    });
    document.getElementById('write_area').style.display = 'block';
    document.getElementById('inputs').style.display = 'block';
    document.querySelector('.more').style.display = 'block';
  }

  commentCallbackFunction(event) {
    event.preventDefault();
    const items = event.target.querySelector('.btn_send');
    const data = Object.fromEntries(new FormData(event.target).entries());
    const twId = items.getAttribute('name');
    event.stopPropagation();
    this.feedApiService.addCommentInServer(twId, data.text).then((response) => {
      this.showTweet(twId);
    });
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
    this.feedApiService.getTweets(0, 10, filters).then((result) => {
      controller.feedView.display(result);
      document.querySelector('.load_more').style.display = 'none';
    });
  }

  setFilter(arr) {
    const authors = arr.map((user) => user.author);
    const uniqueAuthors = authors.filter((val, ind, authors) => authors.indexOf(val) === ind);
    uniqueAuthors.unshift('');
    this.filterView.setAuthors(uniqueAuthors);
  }

  setCurrentUser(user) {
    this.headerView.display(user);
  }

  showTweet(id) {
    this.feedApiService.getTweets(0, 100, this.filterConfig).then((response) => {
      const tweetForShowing = response.find((tweet) => tweet.id === id);
      if (tweetForShowing) {
        this.tweetView.display(tweetForShowing);
        this.commentView.display(tweetForShowing.comments);
      }
    });
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
let topFeed = 1;

const mainViewDocument = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.none').style.opacity = '0';
    controller.feedApiService.restoreToken();
    const shortSpolling = () => controller.feedApiService.getTweets(0, 10, this.filterConfig).then((result) => {
      controller.feedView.display(result);
      controller.filtersView.display();

      controller.setFilter(result);
      controller.textareaView.display();
    });
    shortSpolling();

    setInterval(() => shortSpolling(), 300000);
  });
};

mainViewDocument();

const showMore = document.getElementById('more').addEventListener('click', (event) => {
  topFeed += 10;

  controller.feedApiService.getTweets(0, topFeed + 10, this.filterConfig).then((result) => {
    controller.feedView.display(result);
    controller.setFilter(result);
  });
  event.stopPropagation();
});
