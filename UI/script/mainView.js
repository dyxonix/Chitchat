"use script"

import TweetCollection from "./tweetcollection.js";

const formatDate = (date) => {
    const checkDate = (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };

    return `${checkDate(date.getDate())}.${checkDate(
        date.getMonth() + 1
    )}.${checkDate(date.getFullYear())}, ${checkDate(
        date.getHours()
    )}:${checkDate(date.getMinutes())}`;
}


class TweetFeedView {
    constructor(containerId) {
        this.containerId = containerId;
    }

    display(tws) {
        const tweetfeedView = document.getElementById(this.containerId);
        tweetfeedView.innerHTML = tws.map((item) =>

            `
            <article class="twit">
            <div class="user_info">
            <h1 class="user_name">${item.author}</h1>
            ${item.author === tweetColl.user
                ? '<span class="user_check">(Вы)</span>'
                : ""
            }
            </div>
    
            <div class="twit_date">${formatDate(item.createdAt)}</div>
            <p>${item.text}</p>
    
            <div class="twit_footer">
            <a href="#">
            <img src="images/chat.svg" alt="chat">
            </a>
            <span class="twit_comment_number">${item.comments.length}</span>
            ${item.author === tweetColl.user
                ? ' <div class="twit_edit"> <a class="correct" href="#"><img src="images/edit.svg" alt="edit"></a><a href="#"><img src="images/delete.svg" alt="delete"></a></div>'
                : ""
            }
            </div>
            </div>
            </article>
            `
        ).join('\n');
    }
}



class FilterView {
    constructor(containerId) {
        this.containerId = containerId;
    }

    display(author) {
        const filterMenu = document.getElementById(this.containerId);

        filterMenu.innerHTML = author.map((item) =>
            `
            <li class="list_item"><a class="item_filtration" href="#">${item}</a></li>
                <hr>
        `
        ).join('\n');
    }

    setAuthors(authors) {
        this.display(authors);
    }
}

const allautors = [
    'Ирина',
    'Мария',
    'Евгений',
    'Gleb',
    'Виктория Смит',
    'Тема Николаев',
    'Евгений',
    'Артем',
    'Лиза',
    'Москва',
    'Петр',
    'snow',
    'Геннадий',
    'Катя',
    'Ирина',
    'Мария',
    'Trojan',
    'Ваня',
    'Света',
    'Rick',
];


const filterview = new FilterView("filter");

filterview.setAuthors(allautors)

export default TweetFeedView;