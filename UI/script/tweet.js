"use strict"

class Tweet {

    constructor(tweet) {

        if (Tweet.validate(tweet)) {
            this.isValidTweet = true;
            this._id = tweet.id || uniId();
            this._text = tweet.text || "";
            this._author = tweet.author || TweetCollection.user;
            this._createAt = tweet.createAt || new Date();
            this._comments = tweet.comments ? tweet.comments.map(comment => new Comment(comment)) : [];
            this.tweet = tweet;
        } else {
            this.isValidTweet = false;
            this._tweet = {};
        }
    }

    #_isValidTweet = true;

    get isValidTweet() {
        return this.#_isValidTweet;
    }

    set isValidTweet(invalid) {
        this.#_isValidTweet = invalid;
    }

    ///////////////////////////////////

    get tweets() {
        return this._tweets;
    }

    set tweets(tweets) {

        if (tweets.length === 0) this._tweets = {};
        else
            tweets.forEach((tw) => {
                if (Tweet.validate(tw)) { this._tweets.push(tw) }
                else false;
            });
    }


    ////////// immutability of fields/////////////
    get id() {
        return this._id;
    }

    set id(id) {

        try {
            if (this._id !== id) throw new Error("Can't change field");
        } catch (id) {
            console.log('error', id);
        }
        this._id = id;
    }

    /////////
    get createdAt() {
        return this._createdAt;
    }

    set createdAt(createdAt) {
        if (this._createdAt !== createdAt) throw new Error("Can't change Date");
        this._createdAt = createdAt;
    }

    /////////////


    get author() {
        return this._author;
    }

    set author(author) {

        try {
            if (this._author !== author) throw new Error("Can't change author");
        } catch (author) {
            console.log('error', author);
        }
        this._author = author;
    }


    static validate(tw) {

        const isInValidTweet = Object.keys(tw).some((key) => {
            if (Array.isArray(tw[key])) {
                return tw[key].some(element =>
                    !validateComment(element)
                );
            }

            return this.tweetRules(tw);
        });

        return !isInValidTweet;

    }

}
