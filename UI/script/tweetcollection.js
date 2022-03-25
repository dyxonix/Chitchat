"use strict"


class TweetCollection {

    constructor(tws) {

        this._tweets = new Map();

        if (tws) {
            tws.forEach((tweet, index) => {
                this._tweets.set(index, new Tweet(tweet));
            });
        }
    }


    static _user = 'Мария';


    get user() {
        return TweetCollection._user;
    }

    set user(value) {
        TweetCollection._user = value;
    }

    get tweets() {
        return this._tweets;
    }

    static _maxTextLength = 280;

    /////////////////////////////All helper methods for validate///////////////////////////////////

    static tweetRules(tw) {
        const { keys, types } = TweetCollection.validateConfig.tweet;
        const ruleByKeys = TweetCollection.validateTweetByKeys(tw, keys);
        const ruleByType = TweetCollection.validateTweetByType(tw, types);

        return ruleByKeys && ruleByType;
    }


    static commentRules(tw) {
        const { keys, types } = TweetCollection.validateConfig.comment;
        const ruleByKeys = TweetCollection.validateTweetByKeys(tw, keys);
        const ruleByType = TweetCollection.validateTweetByType(tw, types);

        return ruleByKeys && ruleByType;
    }


    static validateConfig = {
        tweet: {
            types: {
                id: (value) => typeof value === 'string',
                text: (value) => typeof value === 'string' && value.length <= this._maxTextLength,
                createdAt: (value) => value instanceof Date,
                author: (value) => typeof value === 'string',
                comments: (value) => Array.isArray(value)
            },
            keys: ['id', 'text', 'createdAt', 'author', 'comments']
        },
        comment: {
            types: {
                id: (value) => typeof value === 'string',
                text: (value) => typeof value === 'string' && value.length <= this._maxTextLength,
                createdAt: (value) => value instanceof Date,
                author: (value) => typeof value === 'string'
            },
            keys: ['id', 'text', 'createdAt', 'author']
        }
    };

    static validateTweetByKeys = (tw, validKeys) => {
        return !validKeys.some(key => !tw.hasOwnProperty(key));
    }


    static validateTweetByType = (tw, typeConfig) => {
        return !Object.entries(tw).some(([key, value]) => typeConfig[key] ? !typeConfig[key](value) : true);
    }


    //////////////////////////////////////// end of helper methods for validate///////////////////////////////////////




    getPage = (skip = 0, top = 10, filterConfig = {}) => {


        let copyArray = new TweetCollection(tweets).arrayTweet;


        if (filterConfig) {

            if (filterConfig.author) {

                copyArray = copyArray.filter((tweet) => {

                    if (tweet.author) {
                        return tweet.author.toLowerCase().includes(filterConfig.author.toLowerCase())
                    }
                    return false
                })


            }

            if (filterConfig.text) {
                copyArray = copyArray.filter((tweet) =>
                    tweet.text.toLowerCase().includes(filterConfig.text.toLowerCase())
                );
            }

            if (filterConfig.dateFrom) {
                copyArray = copyArray.filter(
                    (tweet) => tweet.createdAt > filterConfig.dateFrom
                );
            }

            if (filterConfig.dateTo) {
                copyArray = copyArray.filter(
                    (tweet) => tweet.createdAt < filterConfig.dateTo
                );
            }

            if (filterConfig.hashtags) {

                copyArray = copyArray.filter((tweet) => {
                    const tweetText = tweet.text.toLowerCase();
                    const hashtags = filterConfig.hashtags;

                    return !hashtags.every(tag => tweetText.includes(`#${tag}`));
                });

            }

        }

        let sortedTweets = copyArray.sort(function (a, b) {
            return a.createdAt - b.createdAt;
        });


        return sortedTweets.slice(skip, skip + top);
    };


    addComment = (id, comment) => {
        const tweet = this.getTweet(id);

        const newСomment = {
            id: commentId(),
            text: comment,
            createdAt: new Date(),
            author: TweetCollection.user
        }
        if (Comment.validate(newСomment)) {
            tweet.comments.push(newСomment)

            return true;
        }
        return false;
    };


    get(id) {
        return this.arrayTweet.find((tweetClass) => tweetClass.id === id);
    }


    add = (text) => {

        const newTweet = {
            id: uniId(),
            text: text,
            createdAt: new Date(),
            author: TweetCollection.user,
            comments: [],
        }

        if (Tweet.validate(newTweet)) {
            this.tweets.set(new Tweet(newTweet));
            return true;
        }
        return false;
    };


    edit = (id, txt) => {
        let tweet = this._get(id);

        if (Tweet.validate(tweet)) {

            if (tweet.author == TweetCollection.user) {

                tweet.text = txt;

                return true;
            }
            return false;
        }
    };


    remove(id) {
        let tweet = this._get(id);

        if (tweet.author === TweetCollection.user) {
            const index = this.arrayTweet.findIndex((tweet) => tweet.id === id);
            this.tweets.delete(index);
            return true;
        }
        return false;
    };


    addAll(tws) {
        let isFoundInValidTweet = false;
        let novalidtweets = [];

        tws.forEach(tw => {
            const obj = new Tweet();

            if (!obj.isValidTweet) {
                novalidtweets.push(tw);
                isFoundInValidTweet = true;
            }
        });


        if (isFoundInValidTweet) {
            return novalidtweets;
        } else {
            this.tweets = new Map(...this.arrayTweet, ...tws);
        }

        return novalidtweets;
    }

    clear() {
        this.tweets.clear();
    }



}