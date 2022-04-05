/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class HeaderView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(currentUser) {
    const headerUserView = document.getElementById(this.containerId);

    headerUserView.innerHTML = currentUser

      ? `<div class="header_user">${currentUser}</div><button class="btn_blue" type="button_exit">Выйти</button>`

      : '<div class="header_user">Гость</div> <button class="btn_blue" type="button_exit">Войти</button>';
  }
}
