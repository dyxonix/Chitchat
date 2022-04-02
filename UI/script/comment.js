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

        console.log('can\'t set id');
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


    static validate(com) {
        if (!com) {
            return false;
        }
        return TweetCollection.commentRules(com);
    }

}

export default Comment;