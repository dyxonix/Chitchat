/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */


class ModalView {

  enteredId = '';
  removeTweetEventFunc = () => { };
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(id) {
    const ModalView = document.getElementById(this.containerId);

    ModalView.innerHTML = `    
          <div class="list_filter modal">
            <h2>Удалить?</h2>
          <div class="modal_btn">
            <button style="background-color:orangered" class="btn confirm" name="${id}" type="button" data-action="yes">Да</button>
            <button class="btn reset"type="button" data-action="yes">Отмена</button>
         </div>
         </div>
          `;

    if (ModalView) {
      this.enteredId = id;
      this.bindRemoveTweetEvent();
      this.hideModal();
    }
  }


  bindRemoveTweetEvent() {
    let removingItems = document.querySelectorAll('.confirm');
    removingItems.forEach((userItem) => {
      userItem.addEventListener('click', this.removeTweetEventFunc);
    });
  }

  hideModal() {
    let removingItems = document.querySelectorAll('.reset');
    let modal = document.querySelectorAll('.modal');
    removingItems.forEach((userItem) => {
      userItem.addEventListener('click', () => {
        modal.forEach((item) => {
          item.style.display = 'block' ? 'none' : 'block';
        })
      });
    });
  }

}


class TweetFeedView {

  editTweetEventFunc = () => { };
  modalEventFunc = () => { };
  showTweetEventFunc = () => { };
  removeTweetEventFunc = () => { };

  constructor(containerId, user) {
    this.containerId = containerId;
    this.user = user;
  }

  // eslint-disable-next-line consistent-return
  display(tws) {
    if (!tws) {
      return "";
    }


    if (tws.length === 0) {
      document.querySelector('.none').style.opacity = '1';
      document.getElementById('more').style.opacity = '0';
    } else {
      document.getElementById('more').style.opacity = '1';
      document.querySelector('.none').style.opacity = '0';
    }

    // eslint-disable-next-line no-undef
    const tweetfeedView = document.getElementById(this.containerId);

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
            <button class="onetweet" name="${item.id}" type="button">
              <img src="images/chat.svg" alt="chat">
              </button>
                <span class="twit_comment_number">${item.comments ? item.comments.length : ''}</span>
                ${item.author === this.user
          ? ` <div class="twit_edit">
           <button class="correct" name="${item.id}" type="button" ><img src="images/edit.svg" alt="edit"></button>
          <button type="button" name="${item.id}" class="remove">
          <img src="images/delete.svg" alt="delete">
          </button>      
          </div>

          `
          : ''
        }
        </div>
        </article>

      `,)
        .join('\n');
    }

    showTags();

    if (tweetfeedView) {
      this.bindEditTweetEvent();
      this.modalTweetEvent();
      this.bindShowTweetEvent();
      this.bindRemoveTweetEvent();
    }
    this.bindShowTweetEvent();

  }

  bindEditTweetEvent() {
    let editedTweet = document.querySelectorAll('.correct');
    editedTweet.forEach((userItem) => {
      userItem.addEventListener('click', this.editTweetEventFunc);
    });
  }


  bindShowTweetEvent() {
    let showedItems = document.querySelectorAll('.onetweet');
    showedItems.forEach((userItem) => {
      userItem.addEventListener('click', this.showTweetEventFunc);
    });
  }

  modalTweetEvent() {
    let removingItems = document.querySelectorAll('.remove');
    removingItems.forEach((userItem) => {
      userItem.addEventListener('click', this.modalEventFunc);
    });
  }

  bindRemoveTweetEvent() {
    let removingItems = document.querySelectorAll('.confirm');
    removingItems.forEach((userItem) => {
      userItem.addEventListener('click', this.removeTweetEventFunc);
    });
  }

}








