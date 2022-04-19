/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */

class TweetView {

  showEventFunc = () => { };
  commentEventFunc = () => { };

  constructor(containerId, user) {
    this.containerId = containerId;
    this.user = user;
  }

  display(tw) {
    if (!tw) {
      return '';
    }
    

    const tweetView = document.getElementById(this.containerId);
    if (tweetView) {
      tweetView.innerHTML = `
            <section class="twit">

                <button class="twit_back" type="button"><img src="images/left.svg" alt="back">На
                главную</button>


            <article class="twit_area">
            <div class="user_info">
            <h1 class="user_name">${tw.author}</h1>
            </div>
        
                <div class="twit_date">${formatDate(tw.createdAt)}</div>
                <p>${tw.text}</p>
        
                <div class="twit_footer">
                <a href="#">
                <img src="images/chat.svg" alt="chat">
                </a>
                <span class="twit_comment_number">${tw.comments ? tw.comments.length : ''
        }</span>
                </div>
                </article>
                <article id="allcomments" class="comments_area"> </article>
                <form id="formElem" class="comment_form">
                <textarea name="text" class="comment_textarea" placeholder="Комментарий..."></textarea>
                <button id="com_send" class="btn_send" name="${tw.id}" type="submit"><img src="images/send.svg" alt="send"></button>
                </form>
            </section>

            `;
      this.bindBackEvent();
      this.bindCommentEvent();
      showTags();

      if (!this.user) {
        const hideForm = document.querySelectorAll('.comment_form')
        hideForm.forEach((item) => {
          item.style.display = "none"
        })
      }
    }

  }

  bindBackEvent() {
    const back = document.querySelectorAll('.twit_back')
    back.forEach((item) => {
      item.addEventListener('click', this.showEventFunc);
    });

  };

  bindCommentEvent() {
    const allbtns = document.querySelectorAll('.comment_form')
    allbtns.forEach((item) => {
      item.addEventListener('submit', this.commentEventFunc);
    })

  };
}


class CommentsView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(com) {
    if (!com) {
      return '';
    }

    const comView = document.getElementById(this.containerId);

    if (comView) {
      comView.innerHTML = com
        .map(
          (cm) => `
                
                <div class="comment">
                <div class="comment_info">
                <h1 class="user_name">${cm.author}</h1>
                <time class="comment_date">${formatDate(cm.createdAt)}</time>
                </div>
                <p class="comments_content">${cm.text}</p>
                <hr>
                </div>
                </article>
            `,
        )
        .join('\n');
    }
  }
}
