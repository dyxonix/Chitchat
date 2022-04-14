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

      ? `<div class="header_user">${currentUser}</div><button id="exit" class="btn_blue">Выйти</button>`

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

class FormView {

  constructor(containerId) {

    this.containerId = containerId;

  }

  display() {

    const formView = document.getElementById(this.containerId);

    formView.innerHTML = `
          <section class="twit error_container">
          <form name="formText" id='form_login' class="form_enter">

               <h1>Войти</h1>
                <p class="twit_text">Войдите в свою учетную запись</p>

              <label for="login">
                  <h2>Логин</h2>
              </label>
             <input id="login" class="comment_textarea login_textarea" type="text" placeholder="Ваш логин" name="login" required>

            <label for="psw">
              <h2>Пароль</h2>
            </label>
            <input id="password" class="comment_textarea  login_textarea pass_textarea" type="password" placeholder="Ваш пароль" name="psw" autocomplete="on" required>

            <button type="submit" class="btn_blue submit">Войти</button>
            </form>
          </section>
                  `;
  }

}



class RegistrationView {

  constructor(containerId) {

    this.containerId = containerId;

  }

  display(id) {

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

              <label for="login">
                  <h2>Логин</h2>
              </label>
             <input id="login" class="comment_textarea login_textarea" type="text" placeholder="Ваш логин" name="login" required>

            <label for="psw">
              <h2>Пароль</h2>
            </label>
            <input id="password" class="comment_textarea  login_textarea pass_textarea" type="password" placeholder="Ваш пароль" name="psw" required>

            <label for="psw">
              <h2>Подтвердите пароль</h2>
            </label>
            <input id="password" class="comment_textarea  login_textarea pass_textarea" type="password" placeholder="Ваш пароль" name="psw" required>

            <button type="submit" class="btn_blue submit">Зарегистрироваться</button>
            </form>
          </section>
                  `;
  }

}