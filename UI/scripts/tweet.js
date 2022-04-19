/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

class Tweet {

  getRandomInt() {
    return Math.floor(Math.random() * 0.4).toString();
  }
  constructor(text, id, createdAt, author, comments) {
    this._id = id || uniId();
    this._text = text || '';
    this._author = author || TweetCollection.user;
    this._createdAt = createdAt || new Date();
    this._comments = comments
      ? comments.map((comment) => new Comment(comment))
      : [];
  }

  get id() {
    return this._id;
  }

  set id(id) {
    console.log("can't set author name");
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(createdAt) {
    console.log("can't set a date");
  }

  get author() {
    return this._author;
  }

  set author(author) {
    console.log("can't set author name");
  }

  static validate(tw) {

    if (tw) {
      const isValidTweet = Object.keys(tw)
        .map((key) => {
          if (Array.isArray(tw[key])) {
            return tw[key] && tw[key].length
              ? tw[key].every((element) => Comment.validate(element))
              : true;
          }
          return TweetCollection.tweetRules(tw);
        })
        .every((item) => item);
      return isValidTweet;
    }
    return false;
  }
}
