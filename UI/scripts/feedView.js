/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

class TweetFeedView {

  editTweetEventFunc = () => { };
  removeTweetEventFunc = () => { };
  showTweetEventFunc = () => { };

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
                    <button class="onetweet" id="one_tweet" name="${item.id}" type="button">
                    <img src="images/chat.svg" alt="chat">
                    </button>
                    <span class="twit_comment_number">${item.comments ? item.comments.length : ''}</span>
                    ${item.author === this.user
          ? ` <div class="twit_edit">
           <button id="correct" name="${item.id}" type="button" ><img src="images/edit.svg" alt="edit"></button>
          <button id="remove" type="button" name="${item.id}" class="remove_id">
          <img src="images/delete.svg" alt="delete">
          </button>
          </div>`
          : ''
        }
                </div>
                </article>

      `,)
        .join('\n');
    }

  

     if (this.user) {
    //   this.bindEditTweetEvent();
    //   this.bindRemoveTweetEvent();
       this.bindShowTweetEvent();
     }
   }

  bindEditTweetEvent() {
    document.getElementById('correct').addEventListener("click", this.editTweetEventFunc);
   // document.getElementById('correct').addEventListener("click", function (event) {  });
  }

  bindRemoveTweetEvent() {
    document.querySelector('.remove_id').addEventListener("click", this.removeTweetEventFunc);
  }

  bindShowTweetEvent() {
    document.getElementById('one_tweet').addEventListener("click", this.showTweetEventFunc);
  }

}


class ModalView {

  constructor(containerId) {
    this.containerId = containerId;
  }

  display(id) {
    const element = document.querySelector(`#${this.containerId}`);

    modal.innerHTML = id.map(
      (item) => `         
     <div class="list_filter modal">
    <h2>Уверены?</h2>
    <div class="modal_buttons">
        <button class="btn" type="button" data-action="no">Нет</button>
        <button class="btn" type="button" data-action="yes">Да</button>
    </div>
    </div>`,)
      .join('\n');
  }

}




