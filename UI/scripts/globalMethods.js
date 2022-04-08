/* eslint-disable default-param-last */
/* eslint-disable no-undef */
import { TweetCollection } from './tweetCollection.js';

const tweetColl = new TweetCollection();

tweetColl.addAll([...tweets]);

const filterConfig = {};

const headerView = new HeaderView('headerview');

const filtersView = new FiltersView('inputs');

const filterView = new FilterView('filter');

const feedView = new TweetFeedView('tweet');

const texareaView = new TextAreaView('write_area');

const tweetView = new TweetView('tweet');

const commentView = new CommentsView('allcomments');

function setFilter(author) {
  filtersView.display();
  texareaView.display();
  filterView.setAuthors(author);
}

function getCurrentFilter() {
  // mocked filter
  return filterConfig;
}

function setCurrentUser(user) {
  headerView.display();
  if (user) {
    headerView.display(user);
    TweetCollection.user = user;
    filtersView.display();
    texareaView.display();
  }
}

function addTweet(text, user) {
  if (text && user) {
    tweetColl.add(text, user);
    feedView.display(tweetColl.getPage(0, 10, filterConfig));
  }

  return false;
}

function editTweet(id, tw) {
  tweetColl.edit(id, tw);

  feedView.display(tweetColl.getPage(0, 10, filterConfig));
}

function removeTweet(tw) {
  tweetColl.remove(tw);

  feedView.display(tweetColl.getPage(0, 10, filterConfig));
}

// eslint-disable-next-line default-param-last

function getFeed(skip = 0, top = 10, filterConfig) {
  feedView.display(tweetColl.getPage(skip, top, filterConfig));

  filtersView.display();
  setFilter(allauthors);
}

function showTweet(id) {
  const tweet = tweetColl.get(id);

  if (tweet) {
    filtersView.display(tweet);

    tweetView.display(tweet);

    commentView.display(tweet.comments);
  }
}

/// //////////////////////////////////////////////////////////////////////////////////////

setCurrentUser('Мария'); // Отобразить текущего пользователя

setFilter(allauthors); // Добавить список авторов

getFeed(); // Показать список по фильтру

// addTweet('Hi, this is my new tweet', TweetCollection.user); // Добавить твит

// editTweet('77', 'New text for my tweet'); // Изменить твит по ID

// removeTweet('77'); // Удалить твит по ID

// showTweet('1'); // получить твит по ID

// getFeed(0, 20); // Вернуться к списку по фильтру

// for changing the view of hashtags in the text on page

// eslint-disable-next-line func-names
function showTags() {
  const entries = document.querySelectorAll('p');

  if (entries && entries.length) {
    for (let i = 0; i < entries.length; i += 1) {
      entries[i].innerHTML = entries[i].innerHTML.replace(/#(\S+)/g, '<span><a href="">#$1</a></span>');
    }
  }
}

showTags();
