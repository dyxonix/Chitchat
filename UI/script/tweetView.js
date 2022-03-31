"use script"

class TweetView {
    constructor(containerId) {
        this.containerId = containerId;
    }

    display(tw) {
        const tweetView = document.getElementById(this.containerId);
        tweetView.innerHTML =
            `
        <div class="user_info">
        <h1 class="user_name">${tw.author}</h1>
        </div>
    
            <div class="twit_date">${formatDate(tw.createdAt)}</div>
            <p>${tw.text}</p>
    
            <div class="twit_footer">
            <a href="#">
            <img src="images/chat.svg" alt="chat">
            </a>
            <span class="twit_comment_number">${tw.comment}</span>
            </div>
        `
    }
}

class CommentsView {
    constructor(containerId) {
        this.containerId = containerId;
    }

    display(com) {
        const comView = document.getElementById(this.containerId);

        comView.innerHTML = com.map((cm) =>
            `
            <div class="comment">
            <div class="comment_info">
            <h1 class="user_name">${cm.author}</h1>
            <time class="comment_date">${formatDate(cm.createdAt)}</time>
            </div>
            <p class="comments_content">${cm.text}</p>
            <hr>
            </div>
        `
        ).join('\n');
    }
}
