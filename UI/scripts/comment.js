/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */


class Comment {


  getRandomInt(max) {
    return Math.floor(Math.random() * max).toString();  
  }

  comment = {}

  constructor(text, id, createdAt, author) {
    this._id = id || this.getRandomInt(2000);
    this.text = text || '';
    this._author = author
    this._createdAt = createdAt || new Date();
    this.comment = { text, id: this._id , createdAt, author };
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
    // eslint-disable-next-line no-undef
    return TweetCollection.commentRules(com);
  }
}
