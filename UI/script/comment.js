"use strict"


class Comment {

    constructor(comment) {
        this._comment = Tweet.comment;
        if (Comment.validate(comment)) {
            this.isInValidComment = false;
            this._id = comment.id || commentId();
            this._text = comment.text || "";
            this._author = comment.author || TweetCollection._user;
            this._createAt = comment.createAt || new Date();
        } else {
            this.isInValidComment = true;
            this._comment = [];
        }
    }

    #_isInValidComment = false;

    get isInValidComment() {
        return this.#_isInValidComment;
    }

    set isInValidComment(invalid) {
        this.#_isInValidComment = invalid;
    }

    /////////////////////////////////

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


    static validate(com) {
        if (com == null || com == undefined) {
            return false;
        }
        return TweetCollection.commentRules(com);
    }

}