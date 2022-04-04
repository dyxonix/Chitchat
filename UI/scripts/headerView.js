"use strict"


class HeaderView {

    constructor(containerId) {
        this.containerId = containerId;
    }

    display(currentUser) {
        if (!currentUser) {
            return '';
        }

        const headerUserView = document.getElementById(this.containerId);

        if (headerUserView) {
            headerUserView.innerHTML = currentUser ?
                `<div class="header_user">${currentUser}</div><button class="btn_blue" type="button_exit">Выйти</button>`
                : `<div class="header_user">Гость</div> <button class="btn_blue" type="button_exit">Войти</button>`;
        }
    }
}