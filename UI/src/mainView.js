"use script"


import TweetCollection from "./tweetcollection.js";

export const formatDate = (date) => {
    if (!date) {
        return;
    }

    const checkDate = (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };

    return `${checkDate(new Date(date).getDate())}.${checkDate(
        new Date(date).getMonth() + 1
    )}.${checkDate(new Date(date).getFullYear())}, ${checkDate(
        new Date(date).getHours()
    )}:${checkDate(new Date(date).getMinutes())}`;
}


export class TweetFeedView {
    constructor(containerId) {
        this.containerId = containerId;
    }

    display(tws) {
        if (!tws) {
            return '';
        }

        const tweetfeedView = document.getElementById(this.containerId);

        if (tweetfeedView) {
            const user = TweetCollection.user;

            tweetfeedView.innerHTML = tws.map((item) =>
                `
                <article class="twit">
                <div class="user_info">
                    <h1 class="user_name">${item.author}</h1>
                    ${item.author === user
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
                    <span class="twit_comment_number">${item.comments ? item.comments.length : ''}</span>
                    ${item.author === user
                        ? ' <div class="twit_edit"> <a class="correct" href="#"><img src="images/edit.svg" alt="edit"></a><a href="#"><img src="images/delete.svg" alt="delete"></a></div>'
                        : ""
                    }
                </div>
                </article>
                `
            ).join('\n');
        }

    }
}



class FilterView {
    constructor(containerId) {
        this.containerId = containerId;
    }

    display(author) {
        if (!author) {
            return '';
        }

        const filterMenu = document.getElementById(this.containerId);

        if (filterMenu) {
            filterMenu.innerHTML = author.map((item) =>
                `
                <li class="list_item"><a class="item_filtration" href="#">${item}</a></li>
                    <hr>
            `
            ).join('\n');
        }
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
