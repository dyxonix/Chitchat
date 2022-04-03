"use script"

import TweetCollection from "./tweetсollection.js";
import HeaderView from "./HeaderView.js";
import TweetView from "./tweetView.js";
import CommentsView from "./commentsView.js";
import TweetFeedView from "./mainView.js";
import tweets from "./tweetbase.js";


const tweetColl = new TweetCollection();
const tweetsModel = tweetColl.addAll(tweets);

console.log(tweetColl);

const headerView = new HeaderView("headerview");
const feedview = new TweetFeedView('tweet');
const commentView = new CommentsView("allcomments");
const tweetView = new TweetView('selectedtweet');


function setCurrentUser(user) {
    headerView.display(user);
    tweetColl.user = user;
}

function addTweet(text) {
    if (text) {
        tweetColl.add(text, tweetColl.user);
        feedview.display(tweetColl.getPage(0, 10));
    }
    return false;
};

function editTweet(id, tw) {

    tweetColl.edit(id, tw);
    feedview.display(tweetColl.getPage(0, 10));

}

function removeTweet(tw) {
    tweetColl.remove(tw);
    feedview.display(tweetColl.getPage(0, 10));
}

function getFeed(skip = 0, top = 10, filterConfig) {
    feedview.display(tweetColl.getPage(skip, top, filterConfig));
};


function showTweet(id) {

    tweetView.display(tweetColl.get(id))
    commentView.display(tweetColl.get(id).comments)
}




/////////////////////////////////////////////////////////////////////////////////////////

setCurrentUser("Мария"); // Отобразить текущего пользователя
feedview.display(tweetColl.getPage(0, 10)); // output tweetfeed when loading the script
//addTweet("Hi, this is my new tweet"); // Добавить твит
//editTweet("7", "New text for my tweet"); // Изменить твит по ID
// removeTweet("7"); // Удалить твит по ID
// getFeed(0, 7, { hashtags: "net" }); // Показать список по фильтру
// showTweet("1"); // получить твит по ID


//for changing the view of hashtags in the text on pages
(function () {
    'use strict';

    let entries = document.querySelectorAll('article.twit_area > p');

    if (entries.length > 0) {
        for (let i = 0; i < entries.length; i = i + 1) {
            entries[i].innerHTML = entries[i].innerHTML.replace(/#(\S+)/g, '<span><a href="">#$1</a></span>');
        }
    }

}(this, this.document));