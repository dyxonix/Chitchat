"use strict"


class TweetsController {
    constructor() {
        this.userList = new UserList();
        this.tweetColl = new TweetCollection();
        TweetCollection.user = this.userList.activeUser;
        this.tweetColl.addAll([...tweets]);
           


        this.headerView = new HeaderView('headerview');
        this.formView = new FormView('tweet');
        this.textareaView = new TextAreaView('write_area', this.userList.activeUser);
        this.registrationView = new RegistrationView('tweet');
        this.filtersView = new FiltersView('inputs');
        this.filterView = new FilterView('filter');
        this.feedView = new TweetFeedView('tweet', this.userList.activeUser);
        this.tweetView = new TweetView('tweet');
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
        this.feedView.removeTweetEventFunc = this.removeTweetCallbackFunction.bind(this);
        this.feedView.showTweetEventFunc = this.showTweetCallbackFunction.bind(this);
        this.tweetView.showEventFunc = this.showCallbackFunction.bind(this);
        this.tweetView.commentEventFunc = this.commentCallbackFunction.bind(this);
    }

    loginCallbacksFunction() {
        this.formView.display();
        document.getElementById('inputs').style.display = 'none';
        document.querySelector('.more').style.display = 'none';
        document.getElementById('write_area').style.display = 'none';

        const formLogin = document.getElementById('form_login')
        formLogin.addEventListener('submit', (event) => {
            event.preventDefault();

            if (this.userList.checkLogin(formLogin[0].value, formLogin[1].value)) {
                this.userList.setUser(formLogin[0].value, formLogin[1].value)
                location.reload();
                this.setCurrentUser(formLogin[0].value);
                this.setFilter(formLogin[0].value);

            };
        })
    }

    registrationCallbacksFunction() {

        this.registrationView.display()
        document.getElementById('inputs').style.display = 'none';
        document.querySelector('.more').style.display = 'none';
        document.getElementById('write_area').style.display = 'none';

        const formRegistration = document.getElementById('form_reg');
        formRegistration.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!this.userList.checkRegistr(formRegistration[0].value)) {
                if (formRegistration[1].value === formRegistration[2].value) {
                    this.userList.addUser(formRegistration[0].value, formRegistration[1].value)
                    localStorage.setItem('password', JSON.stringify(formRegistration[1].value));
                    // controller.setCurrentUser(formRegistration[0].value);

                    controller.setCurrentUser(formRegistration[0].value);
                    // this.filtersView.display();
                    const arr = [formRegistration[0].value];
                    this.setFilter(arr);

                    location.reload();
                }
            }
        });
    }

    signOffCallbacksFunction() {
        controller.userList.activeUser = localStorage.setItem('active_user', JSON.stringify(""))
        controller.setCurrentUser("");
        location.reload();
    }

    publishTweetCallbackFunction(event) {
        const data = Object.fromEntries(new FormData(event.target).entries());
        event.preventDefault();
        this.addTweet(data.text, controller.userList.activeUser);
    }

    editTweetCallbackFunction(event) {

        const data = Object.fromEntries(new FormData(event.target).entries());
        const tweetId = event.currentTarget.getAttribute('name')
        event.preventDefault();

        this.editTweet(tweetId, data.text);
        //this.feedView.display(controller.tweetColl.getPage(0, 10, this.filterConfig))
    }


    removeTweetCallbackFunction(event) {
        const tweetId = event.currentTarget.getAt('name')
        event.preventDefault();
        this.removeTweet(tweetId); // how can we get tweet?
        // //after deletion, we need to call the 'GetFeedAgain' with prepared filtes
        // this.removeTweet();
    }

    showTweetCallbackFunction(event) {
        const tweetId = event.currentTarget.getAttribute('name')
        event.preventDefault();
        controller.showTweet(tweetId);
        document.getElementById('write_area').style.display = 'none';

    }

    showCallbackFunction(event) {
        event.preventDefault();
        console.log('clock')
    }

    commentCallbackFunction(event) {
        //const data = Object.fromEntries(new FormData(event.target).entries());

        //console.log(event.currentTarget.getAttribute('name'))
        //const twId = event.currentTarget.getAttribute('name')
        console.log('twId')
        // console.log('ertbereb')

        event.preventDefault();
        // this.tweetColl.addComment(twId, data.text);
    }


    filtersCallbackFunction(event) {
        const formFilter = document.querySelector('.filtration');

        event.preventDefault();

        const authorFilter = document.getElementById('filter');
        const dateFilter_from = document.getElementById('filter_date_from');
        const dateFilter_to = document.getElementById('filter_date_to');
        const textFilter = document.getElementById('filter_text');
        const tagFilter = document.getElementById('filter_tag');

        const filters = filterValue([authorFilter.value, dateFilter_from.value, dateFilter_to.textFilter.value, tagFilter.value,]);
        console.log(filters)
        controller.getFeed(0, controller.tweetColl.tweets.length, filters);


        authorFilter.value = '';
        textFilter.value = '';
        tagFilter.value = '';
        dateFilter_from.value = '';
        dateFilter_to.value = '';
    }


    setFilter(arr) {

        const authors = arr.map((user) => user.user);
        this.filterView.setAuthors(authors);
    }

    getCurrentFilter() {
        // mocked filter
        return this.filterConfig;

    }

    setCurrentUser(user) {
        this.headerView.display(user);
    }


    addTweet(text, user) {
        if (text && user) {
            console.log(text, user)
            this.tweetColl.add(text, user);
            this.feedView.display(controller.tweetColl.getPage(0, 10, this.filterConfig));
        }
        return false;
    };

    editTweet(id, tw) {
        this.tweetColl.edit(id, tw);
        this.feedView.display(controller.tweetColl.getPage(0, 10, this.filterConfig));
        //document.querySelector(`.${feedView.id}`).innerHTML = '';
    }

    removeTweet(tw) {
        this.tweetColl.remove(tw);
        this.feedView.display(this.tweetColl.getPage(0, 10, this.filterConfig));
        //document.querySelector(`.${feedView.id}`).innerHTML = '';
    }

    getFeed(skip = 0, top = 10, filterConfig) {
        this.feedView.display(this.tweetColl.getPage(skip, top, this.filterConfig));
        //this.setFilter(controller.userList.users);
    };


    showTweet(id) {
        const tweet = this.tweetColl.get(id);

        if (tweet) {
            this.tweetView.display(tweet)
            this.commentView.display(tweet.comments)
        }
    }




}



const controller = new TweetsController();

const mainViewDocument = () => {
    document.addEventListener('DOMContentLoaded', () => {
        controller.userList.restore();
        const tweets = controller.tweetColl.getPage(0, 100, controller.filterConfig);
        controller.feedView.display(tweets); // Показать список по фильтру
        controller.filtersView.display();

        controller.setFilter(controller.userList.users); // Добавить список авторов
        // if (controller.userList.activeUser) {
        controller.textareaView.display();

    })
}

mainViewDocument();
// console.log(controller.userList.users.map((user) => user.user))

//controller.addTweet('Hi, this is my new tweet', TweetCollection.user); // Добавить твит
//controller.editTweet('77', 'New text for my tweet'); // Изменить твит по ID
//controller.removeTweet('77'); // Удалить твит по ID


function localStor() {
    if (localStorage.length === 0) {
        localStorage.setItem('tweets', JSON.stringify(tweets));
        localStorage.setItem('active_user', JSON.stringify(controller.userList.users));
    }
}
localStor()


const showMore =
    document.getElementById('more').addEventListener('click', (event) => {
        controller.getFeed(0, tweet.childElementCount + 10, {});
        event.stopPropagation();

    })

// const text_reg =
//     document.getElementById('a_reg').addEventListener('click', (event) => {
//         controller.registrationView.display();
//         event.preventDefault();

//     })

// const text_enter =
//     document.getElementById('a_enter').addEventListener('click', (event) => {
//         controller.formView.display();
//         event.preventDefault();

//     })


// const back = () => {
//     document.getElementById('back').addEventListener('click', (event) => {
//         console.log('clock')
//         // //controller.getFeed();
//         // event.preventDefault(); 
//     })
// }
// back();

// Фильтровать твиты

function filterValue(arr = []) {
    const obj = {
        author: arr[0],
        dateFrom: arr[1],
        dateTo: arr[2],
        text: arr[3],
        tag: arr[4],
    };
    for (const key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
    return obj;
}



//const filtration =
//     document.getElementById('confirm').addEventListener('click', function () {
// //        console.log("filtr")
//         const formFilter = document.querySelector('.filtration');

//         formFilter.addEventListener('submit', (event) => {
//             event.preventDefault();

//             const authorFilter = document.getElementById('filter');
//             const dateFilter_from = document.getElementById('filter_date_from');
//             const dateFilter_to = document.getElementById('filter_date_to');
//             const textFilter = document.getElementById('filter_text');
//             const tagFilter = document.getElementById('filter_tag');

//             const filters = filterValue([authorFilter.value, dateFilter_from.value, dateFilter_to.textFilter.value, tagFilter.value,]);
//             controller.getFeed(0, controller.tweetColl.tweets.length, filters);


//             authorFilter.value = '';
//             textFilter.value = '';
//             tagFilter.value = '';
//             dateFilter_from.value = '';
//             dateFilter_to.value = '';

//         })
//     })


// const showTweet = document.getElementById('twit').addEventListener('click', (event) => {
//     event.preventDefault();
//     controller.showTweet(`${event.target.id}`);
//     console.log('show')

// });

// const edit = document.querySelector('.correct').addEventListener('click', (event) => {
//     console.log('ed')
//     //controller.editTweet('77', 'New text for my tweet');
// });

// document.getElementById('remove').addEventListener('click', (event) => {
//     console.log(event.target(id));
//     //controller.removeTweet('77');
// });



