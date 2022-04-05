/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

class TweetView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(tw) {
    if (!tw) {
      return '';
    }

    const tweetView = document.getElementById(this.containerId);
    if (tweetView) {
      tweetView.innerHTML = `
            <section class="twit">

                <button class="twit_back" type="button_exit"><img src="images/left.svg" alt="back">На
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
                <span class="twit_comment_number">${
  tw.comments ? tw.comments.length : ''
}</span>
                </div>
                </article>
                <article id="allcomments" class="comments_area"> </article>
                <form class="comment_form">
                <input class="comment_textarea" type="text" placeholder="Комментарий..." />
                <button class="btn_send" type="submit"><img src="images/send.svg" alt="send"></button>
                    </form>
            </section>

            `;
    }
  }
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
