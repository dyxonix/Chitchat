"use script"

class HeaderView {

    constructor(containerId) {
        this.containerId = containerId;
    }

    display({ currentUser }) {
        const headerUserView = document.getElementById(this.containerId);
        headerUserView.innerHTML = user ?
            `<div class="header_user">${currentUser}</div><button class="btn_blue" type="button_exit">Выйти</button>`
            : `<div class="header_user">Гость</div> <button class="btn_blue" type="button_exit">Войти</button>`;
    }
}

export default HeaderView;


