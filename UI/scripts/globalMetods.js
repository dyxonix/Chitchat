/* eslint-disable no-undef */

const tweetColl = new TweetCollection();
tweetColl.addAll([...tweets]);

const headerView = new HeaderView('headerview');
const filterview = new FilterView('filter');
const feedview = new TweetFeedView('tweet');
const tweetView = new TweetView('selectedtweet');
const commentView = new CommentsView('allcomments');

function setFilter(author) {
  filterview.setAuthors(author);
}

function setCurrentUser(user) {
  headerView.display(user);
  TweetCollection.user = user;
}

function addTweet(text) {
  if (text) {
    tweetColl.add(text, TweetCollection.user);
    feedview.display(tweetColl.getPage(0, 10));
  }
  return false;
};

function editTweet(id, tw) {

  tweetColl.edit(id, tw);
  feedview.display(tweetColl.getPage(0, 10));

}

function removeTweet(tw) {
  tweetColl.remove(tw);
  feedview.display(tweetColl.getPage(0, 10));
}

// eslint-disable-next-line default-param-last
function getFeed(skip = 0, top = 10, filterConfig) {
  feedview.display(tweetColl.getPage(skip, top, filterConfig));
};

function showTweet(id) {
  const tweet = tweetColl.get(id);

  if (tweet) {
    tweetView.display(tweet)
    commentView.display(tweet.comments)
  }
}

/// //////////////////////////////////////////////////////////////////////////////////////

setFilter(allautors); // Добавить список авторов
// setCurrentUser('Мария'); // Отобразить текущего пользователя
// addTweet('Hi, this is my new tweet'); // Добавить твит
// editTweet('77', 'New text for my tweet'); // Изменить твит по ID
// removeTweet('77'); // Удалить твит по ID
//showTweet('1'); // получить твит по ID
getFeed(0, 10); // Показать список по фильтру

// for changing the view of hashtags in the text on page
(function () {

  const entries = document.querySelectorAll('article.twit_area > p');

  if (entries && entries.length) {
    for (let i = 0; i < entries.length; i += 1) {
      entries[i].innerHTML = entries[i].innerHTML.replace(/#(\S+)/g, '<span><a href="">#$1</a></span>');
    }
  }

}(this, document));
