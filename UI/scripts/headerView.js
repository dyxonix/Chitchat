/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

class HeaderView {

  loginEventFunc = () => { };
  signupEventFunc = () => { };
  signOffEventFunc = () => { };

  constructor(containerId) {
    this.containerId = containerId;
  }

  display(currentUser) {
    const headerUserView = document.getElementById(this.containerId);
    headerUserView.innerHTML = currentUser

      ? `<div class="header_user">${currentUser}</div><button id="exit" class="btn_blue ">Выйти</button>`

      : '<div class="header_user"><a href=\'#\'id="registr" class="reg_button">Регистрация</a></div> <button id="login" class="btn_blue" type="button">Войти</button>';

    if (!currentUser) {
      this.bindLoginButtonEvent();
      this.bindSignUpButtonEvent();
    } else {
      this.bindSignOffButtonEvent();
    }
  }

  bindLoginButtonEvent() {
    document.getElementById('login').addEventListener('click', this.loginEventFunc);
  }

  bindSignUpButtonEvent() {
    document.getElementById('registr').addEventListener('click', this.signupEventFunc);

  }

  bindSignOffButtonEvent() {
    document.getElementById('exit').addEventListener('click', this.signOffEventFunc);
  }

}

class LoginFormView {

  confirmLoginFormEventFunc = () => { };

  constructor(containerId) {

    this.containerId = containerId;

  }
  // without parameter -> display normal form
  // with parameter -> display extended error
  display(error = "") {

    const formView = document.getElementById(this.containerId);

    formView.innerHTML = `
          <section class="twit error_container">
          <form name="formText" id='form_login' class="form_enter">

               <h1>Войти</h1>
                <p class="twit_text ">Войдите в свою учетную запись</p>
                <p style="color:orangered" class="twit_text ">${error}</p>

              <label for="login">
                  <h2>Логин</h2>
              </label>
             <input id="login" class="comment_textarea login_textarea" type="text" placeholder="Ваш логин" name="login" required>

            <label for="psw">
              <h2>Пароль</h2>
            </label>
            <input id="password" class="comment_textarea  login_textarea pass_textarea" type="password" placeholder="Ваш пароль" name="password" autocomplete="off"required>

            <button type="submit" class="btn_blue submit">Войти</button>
          </form>
          </section>
                  `; this.sendLoginFormEvent();
  }

  sendLoginFormEvent() {
    document.getElementById('form_login').
      addEventListener('submit', this.confirmLoginFormEventFunc);
  }

}



class RegistrationView {

  confirmRegistrFormEventFunc = () => { };

  constructor(containerId) {

    this.containerId = containerId;
  }


  display(id, error = "") {

    const formView = document.getElementById(this.containerId);
    formView.innerHTML = id ? `
          <section class="twit error_container">
          <form class="form_enter">
          <h1>Выйти</h1>
          </form>
          </section>`


      : `
          <section class="twit error_container">
          <form name="formFilter" id='form_reg' class="form_enter">

               <h1>Регистрация</h1>
                <p class="twit_text">Придумайте логин и пароль для регистрации в системе</p>
                <p style="color:orangered"  class="twit_text ">${error}</p>
              <label for="login">
                  <h2>Логин</h2>
              </label>
             <input name="login" id="login" class="comment_textarea login_textarea" type="text" placeholder="Ваш логин" required>

            <label for="psw">
              <h2>Пароль</h2>
            </label>
            <input name="password" id="password" class="comment_textarea  login_textarea pass_textarea" type="password" placeholder="Ваш пароль" name="psw" required autocomplete="off">

            <label for="psw">
              <h2>Подтвердите пароль</h2>
            </label>
            <input name="passwordRepeat" id="password" class="comment_textarea  login_textarea pass_textarea" type="password" placeholder="Ваш пароль" name="psw" required autocomplete="off">

            <button type="submit" class="btn_blue submit">Зарегистрироваться</button>
            </form>
          </section>
                  `;
    if (!id) { this.sendRegistrFormEvent(); }
  }

  sendRegistrFormEvent() {
    document.getElementById('form_reg').
      addEventListener('submit', this.confirmRegistrFormEventFunc);
  }

}


const formatDate = (date) => {
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
