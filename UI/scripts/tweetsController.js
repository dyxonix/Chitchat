"use strict"


class TweetsController {
    constructor() {
        this.tweetColl = new TweetCollection();
        this.tweetColl.addAll([...tweets]);
        console.log(this.tweetColl._twscopy)
        this.userList = new UserList();
        this.headerView = new HeaderView('headerview');
        this.formView = new FormView('tweet');
        this.registrView = new RegistrView('tweet');
        this.filtersView = new FiltersView('inputs');
        this.filterView = new FilterView('filter');
        this.texareaView = new TextAreaView('write_area');
        this.feedView = new TweetFeedView('tweet', this.userList.activeUser);
        this.tweetView = new TweetView('tweet');
        this.commentView = new CommentsView('allcomments');
        this.filterConfig = {};
        this.setCurrentUser(this.userList.activeUser);
        this.setEventCollbacks();
    }

    setEventCollbacks() {
        this.headerView.loginEventFunc = this.loginCollbacksFuction;
        //this.headerView.registrationEventFunc = this.loginCollbacksFuction;
    }

    loginCollbacksFuction() {
        console.log('click')
        document.getElementById('inputs').style.display = 'none';
        this.formView.display()

        const formLogin = document.getElementById('form_login')
        formLogin.addEventListener('submit', (event) => {
            event.preventDefault();
            if (this.userList.allauthors.find((item) => item === formLogin[0].value)) {
                this.tweetColl.user = formLogin[0].value;
                this.userList.addUser(formLogin[0].value, formLogin[1].value)
                this.setCurrentUser(formLogin[0].value);
                this.texareaView.display();
                this.setFilter(formLogin[0].value);
                this.filtersView.display();
            };

        })
    }

    setFilter(author) {
        this.filterView.setAuthors(author);
    }

    getCurrentFilter() {
        // mocked filter
        return this.filterConfig;
    }

    setCurrentUser(user) {
        this.headerView.display(user);
        this.feedView.display(this.tweetColl.getPage(0, 10, this.filterConfig));
    }


    addTweet(text, user) {
        if (text && user) {
            this.tweetColl.add(text, user);
            this.feedView.display(this.tweetColl.getPage(0, 10, this.filterConfig));
        }
        return false;
    };


    editTweet(id, tw) {
        this.tweetColl.edit(id, tw);
        this.feedView.display(this.tweetColl.getPage(0, 10, this.filterConfig));
        //document.querySelector(`.${feedView.id}`).innerHTML = '';
    }


    removeTweet(tw) {
        this.tweetColl.remove(tw);
        this.feedView.display(this.tweetColl.getPage(0, 10, this.filterConfig));
        //document.querySelector(`.${feedView.id}`).innerHTML = '';
    }

    getFeed(skip = 0, top = 10, filterConfig) {
        this.feedView.display(this.tweetColl.getPage(skip, top, this.filterConfig));
        this.filtersView.display();
        this.setFilter(controller.userList.allauthors);
    };


    showTweet(id) {
        const tweet = this.tweetColl.get(id);

        if (tweet) {
            this.filtersView.display(tweet)
            this.tweetView.display(tweet)
            this.commentView.display(tweet.comments)
        }
    }

}

const controller = new TweetsController();


document.addEventListener('DOMContentLoaded', () => {


    //controller.setFilter(controller.userList.allauthors); // Добавить список авторов
    controller.getFeed(); // Показать список по фильтру

})


//controller.addTweet('Hi, this is my new tweet', TweetCollection.user); // Добавить твит
//controller.editTweet('77', 'New text for my tweet'); // Изменить твит по ID
//controller.removeTweet('77'); // Удалить твит по ID


function localStor() {
    if (localStorage.length === 0) {
        localStorage.setItem('tweets', JSON.stringify(tweets));
        localStorage.setItem('active_user', JSON.stringify(controller.userList.allauthors));
    }
}
localStor()



// document.getElementById('login').addEventListener('click', function () {



//     document.getElementById('inputs').style.display = 'none';
//     controller.formView.display()

//     const formLogin = document.getElementById('form_login')
//     formLogin.addEventListener('submit', (event) => {
//         event.preventDefault();
//         if (controller.userList.allauthors.find((item) => item === formLogin[0].value)) {
//             controller.tweetColl.user = formLogin[0].value;
//             controller.userList.addUser(formLogin[0].value, formLogin[1].value)
//             controller.setCurrentUser(formLogin[0].value);
//             controller.texareaView.display();
//             controller.setFilter(formLogin[0].value);
//             controller.filtersView.display();
//         };

//     })
// })



document.querySelector('.reg_button').addEventListener('click', function () {
    //checkregist addUser activeUser(set)

    document.getElementById('inputs').style.display = 'none';
    controller.registrView.display()

    const formRegistr = document.getElementById('form_reg');
    //const user = this.userList.users.find(item => item.name === name);


    formRegistr.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!controller.userList.users.find((item) => item === formRegistr[0].value)) {
            controller.tweetColl.user = formRegistr[0].value;
            controller.userList.save(formRegistr[0].value);
            localStorage.setItem('passw', JSON.stringify(formRegistr[1].value));
            controller.setCurrentUser(formRegistr[0].value);

        }

    });

});

// document.getElementById('exit').addEventListener('click', function () {
//     controller.tweetColl.user = localStorage.setItem('active_user', JSON.stringify(""))
//     controller.setCurrentUser("");
// });



// const showMore = document.getElementById('more').addEventListener('click', (event) => {
//     controller.getFeed(0, tweet.childElementCount + 10, {});
//     event.stopPropagation();

// })

//Фильтровать твиты

// function filterValue(arr = []) {
//     const obj = {
//         author: arr[0],
//         dateFrom: arr[1],
//         dateTo: arr[2],
//         text: arr[3],
//         tag: arr[4],
//     };
//     for (const key in obj) {
//         if (!obj[key]) {
//             delete obj[key];
//         }
//     }
//     return obj;
// }



// const filtration = document.getElementById('confirm').addEventListener('click', function () {

//     const formFilter = document.querySelector('.filtration');

//     formFilter.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const authorFilter = document.getElementById('filter');
//         const dateFilter_from = document.getElementById('filter_date_from');
//         const dateFilter_to = document.getElementById('filter_date_to');
//         const textFilter = document.getElementById('filter_text');
//         const tagFilter = document.getElementById('filter_tag');

//         const filters = filterValue([authorFilter.value, dateFilter_from.value, dateFilter_to.textFilter.value, tagFilter.value,]);
//         controller.getFeed(0, controller.tweetColl.tweets.length, filters);


//         authorFilter.value = '';
//         textFilter.value = '';
//         tagFilter.value = '';
//         dateFilter_from.value = '';
//         dateFilter_to.value = '';

//     })
// })


// const showTweet = document.getElementById('twit').addEventListener('click', (event) => {
//     event.preventDefault();
//     controller.showTweet(`${event.target.id}`);
//     console.log('show')

// });

// const edit = document.querySelector('.correct').addEventListener('click', (event) => {
//     console.log('ed')
//     //controller.editTweet('77', 'New text for my tweet');
// });

// const remove = document.querySelector('.remove').addEventListener('click', (event) => {
//     console.log('re')
//     //controller.removeTweet('77');
// });

// // Добавлние твита
// const formSend = document.getElementById("form_send").addEventListener('click', (event) => {
//     event.preventDefault();

// });


