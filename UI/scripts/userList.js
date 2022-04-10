"use strict"


//хранит массив зарегистрированных пользователей и методы для добавления новых. 

// const userList = document.getElementById('filter_name');


class UserList {

    _users = [];
    _activeUser = '';

    constructor() {
        this.restore();
        this.restoreUser();
    }

    set users(users) {
        this._users = users;
    }

    get users() {
        return this._users;
    }

    set activeUser(activeUser) {
        this._activeUser = activeUser;
    }

    get activeUser() {
        return this._activeUser;
    }

    addUser(user, password) {
        this.users.push({ user: user, password: password });
        this.activeUser = user;
        this.save();
        this.saveUser();
    }

    checkRegistr(user) {
        return this.users.find(user);
    }

    save() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    saveUser() {
        localStorage.setItem('active_user', JSON.stringify(this.activeUser));
    }

    restore() {
        if (localStorage.getItem('users')) this.users = JSON.parse(localStorage.getItem('users'));
    }

    restoreUser() {
        if (localStorage.getItem('active_user')) this.activeUser =
            JSON.parse(localStorage.getItem('active_user'));
        console.log(this.activeUser);
    }


    allauthors = [

        'Тема Николаев',
        'Евгений',
        'Артем',
        'Лиза',
        'Москва',
        'Петр',
        'Мария'
    ];
}
