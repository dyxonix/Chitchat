"use script"



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

export default CommentsView;