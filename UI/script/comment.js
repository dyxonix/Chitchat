"use strict"

class Comment {

    constructor(text, id, createdAt, author) {

        this._id = id || uniId();
        this._text = text || "";
        this._author = author || TweetCollection.user;
        this._createAt = createdAt || new Date();
    }


    get id() {
        return this._id;
    }

    set id(id) {

        this._id = id;
    }

    get createdAt() {
        return this._createdAt;
    }

    set createdAt(createdAt) {
        this._createdAt = createdAt;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        this._author = author;
    }


    static validate(com) {
        if (!com) {
            return false;
        }
        return TweetCollection.commentRules(com);
    }

}