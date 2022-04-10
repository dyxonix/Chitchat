/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

class TweetFeedView {
  constructor(containerId, user) {
    this.containerId = containerId;
    this.user = user;
  }

  // eslint-disable-next-line consistent-return
  display(tws) {
    if (!tws) {
      return '';
    }

    // eslint-disable-next-line no-undef
    const tweetfeedView = document.getElementById(this.containerId);
    document.getElementById('more').style.opacity = '1';

    if (tweetfeedView) {

      tweetfeedView.innerHTML = tws.map((item) => `
                <article id="twit" class="twit">
                <div class="user_info">
                    <h1 class="user_name">${item.author}</h1>
                    ${item.author === this.user
          ? '<span class="user_check">(Вы)</span>'
          : ''
        }
                </div>
        
                <div class="twit_date">${formatDate(item.createdAt)}</div>
                <p>${item.text}</p>
        
                <div class="twit_footer">
                    <a href="#">
                    <img src="images/chat.svg" alt="chat">
                    </a>
                    <span class="twit_comment_number">${item.comments ? item.comments.length : ''}</span>
                    ${item.author === this.user
          ? ' <div class="twit_edit"> <a class="correct" href="#"><img src="images/edit.svg" alt="edit"></a><a class="remove" href="#"><img src="images/delete.svg" alt="delete"></a></div>'
          : ''
        }
                </div>
                </article>
                `).join('\n');
    }
  }
}
