"use strict"

class TweetCollection {

    user = "";

    static maxTextLength = 280;

    get user() {
        return TweetCollection.user;
    }

    set user(uservalue) {
        TweetCollection.user = uservalue;
    }

    _twscopy = [];


    constructor(tws) {
        this._twscopy = tws || [];
    }

    //////////////////////////////////////All helper methods for validate///////////////////////////////////////////

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
                text: (value) => typeof value === 'string' && value.length <= TweetCollection.maxTextLength,
                createdAt: (value) => value instanceof Date,
                author: (value) => typeof value === 'string',
                comments: (value) => Array.isArray(value)
            },
            keys: ['id', 'text', 'createdAt', 'author', 'comments']
        },
        comment: {
            types: {
                id: (value) => typeof value === 'string',
                text: (value) => typeof value === 'string' && value.length <= TweetCollection.maxTextLength,
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

    static arrayClone(arr) {
        return arr.map(item => {
            return JSON.parse(JSON.stringify(item))
        });
    }


    ///////////////////////////////////////////// end of helper methods for validate//////////////////////////////////////////////


    getPage = (skip = 0, top = 10, filterConfig = {}) => {


        const filteredTweets = TweetCollection.arrayClone(this._twscopy);

        if (filterConfig) {

            if (filterConfig.author) {
                filteredTweets = filteredTweets.filter((tweet) => {

                    if (tweet.author) {
                        return tweet.author.toLowerCase().includes(filterConfig.author.toLowerCase())
                    }
                    return false;
                })
            }

            if (filterConfig.text) {
                filteredTweets = filteredTweets.filter((tweet) =>
                    tweet.text.toLowerCase().includes(filterConfig.text.toLowerCase())
                );
            }

            if (filterConfig.dateFrom) {
                filteredTweets = filteredTweets.filter(
                    (tweet) => tweet.createdAt > filterConfig.dateFrom
                );
            }

            if (filterConfig.dateTo) {
                filteredTweets = filteredTweets.filter(
                    (tweet) => tweet.createdAt < filterConfig.dateTo
                );
            }

            if (filterConfig.hashtags) {

                filteredTweets = filteredTweets.filter((tweet) => {
                    const tweetText = tweet.text.toLowerCase();
                    const hashtags = filterConfig.hashtags;

                    return !hashtags.every(tag => tweetText.includes(`#${tag}`));
                });

            }

            const sortedTweets = filteredTweets.sort(function (a, b) {
                return a.createdAt - b.createdAt;
            }).slice(skip, skip + top);

            return sortedTweets;

        }
    }

    get(id) {
        return this._twscopy.find((tweet) => tweet.id === id);

    }

    add = (text) => {

        const newTweet = new Tweet(text);

        if (Tweet.validate(newTweet)) {
            this._twscopy.push(new Tweet(newTweet));
            return true;
        }
        return false;
    };


    edit = (id, txt) => {
        const tweet = this.get(id);

        if (Tweet.validate(tweet)) {

            if (tweet.author == TweetCollection.user && typeof txt === 'string'
                && txt.length <= TweetCollection.maxTextLength) {
                tweet.text = txt;
                return true;
            }
            return false;
        }
    };

    remove(id) {
        const tweet = this.get(id);

        if (tweet) {
            if (tweet.author == TweetCollection.user) {
                const index = this._twscopy.findIndex((tweet) => tweet.id === id);
                this._twscopy.splice(index, 1);
                return true;
            }
        }
        return false;
    };

    addAll(tws) {
        let isFoundValidTweet = false;
        let novalidtweets = [];

        tws.forEach(tw => {
            if (Tweet.validate(tw)) {
                this._twscopy.push(tw);
                isFoundValidTweet = true;
            } else {
                novalidtweets.push(tw);
            }
        });
        return novalidtweets;
    }


    clear() {
        this._twscopy.splice(0, this._twscopy.length);
        return this._twscopy;
    }


    addComment = (id, comment) => {
        const tweet = this.get(id);

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

}