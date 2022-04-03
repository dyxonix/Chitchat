"use script"

import TweetCollection from "./tweetcollection.js";
import HeaderView from "./headerView.js";
import TweetView from "./tweetView.js";
import CommentsView from "./commentsView.js";
import {TweetFeedView} from "./mainView.js";
import {tweets} from "./tweetbase.js";


const tweetColl = new TweetCollection([...tweets]);

const headerView = new HeaderView("headerview");
const feedview = new TweetFeedView('tweet');
const commentView = new CommentsView("allcomments");
const tweetView = new TweetView('selectedtweet');


export function setCurrentUser(user) {
    headerView.display(user);
    TweetCollection.user = user;
}

export function addTweet(text) {
    if (text) {
        tweetColl.add(text, TweetCollection.user);
        feedview.display(tweetColl.getPage(0, 10));
    }
    return false;
};

export function editTweet(id, tw) {

    tweetColl.edit(id, tw);
    feedview.display(tweetColl.getPage(0, 10));

}

export function removeTweet(tw) {
    tweetColl.remove(tw);
    feedview.display(tweetColl.getPage(0, 10));
}

export function getFeed(skip = 0, top = 10, filterConfig) {
    feedview.display(tweetColl.getPage(skip, top, filterConfig));
};


export function showTweet(id) {
    const tweet = tweetColl.get(id);

    if (tweet) {
        tweetView.display(tweet)
        commentView.display(tweet.comments)
    }
}



/////////////////////////////////////////////////////////////////////////////////////////

setCurrentUser("Мария"); // Отобразить текущего пользователя
feedview.display(tweetColl.getPage(0, 10)); // output tweetfeed when loading the script
addTweet("Hi, this is my new tweet"); // Добавить твит
editTweet("7", "New text for my tweet"); // Изменить твит по ID
removeTweet("7"); // Удалить твит по ID
getFeed(0, 7, { hashtags: "net" }); // Показать список по фильтру
showTweet("5"); // получить твит по ID


//for changing the view of hashtags in the text on page
(function () {
    'use strict';

    let entries = document.querySelectorAll('article.twit_area > p');

    if (entries && entries.length) {
        for (let i = 0; i < entries.length; i = i + 1) {
            entries[i].innerHTML = entries[i].innerHTML.replace(/#(\S+)/g, '<span><a href="">#$1</a></span>');
        }
    }

}(this, document));