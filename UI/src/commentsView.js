"use script"

import { formatDate } from "./mainView.js";

export default class CommentsView {
    constructor(containerId) {
        this.containerId = containerId;
    }

    display(com) {
        if(!com) {
            return '';
        }

        const comView = document.getElementById(this.containerId);

        if (comView) {
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
}
