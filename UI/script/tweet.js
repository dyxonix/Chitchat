"use strict"


class Tweet {

    constructor(text, id, createdAt, author, comments) {

        this._id = id || uniId();
        this._text = text || "";
        this._author = author || TweetCollection.user;
        this._createAt = createdAt || new Date();
        this._comments = comments ? comments.map(comment => new Comment(comment)) : [];
    }


    get id() {
        return this._id;
    }

    set id(id) {

        console.log('can\'t set author name');
    }

    get createdAt() {
        return this._createdAt;
    }

    set createdAt(createdAt) {

        console.log('can\'t set a date');
    }

    get author() {
        return this._author;
    }

    set author(author) {
        console.log('can\'t set author name');
    }


    static validate(tw) {
        if (tw) {
            const isInValidTweet = Object.keys(tw).some((key) => {
                if (Array.isArray(tw[key])) {
                    return tw[key].some(element =>
                        !Comment.validate(element)
                    );
                }
                return !TweetCollection.tweetRules(tw);
            });
            return !isInValidTweet;
        }
    }

}