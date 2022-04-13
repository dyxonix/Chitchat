"use strict"


class UserList {

    _users = [{ user: 'Петр', password: 'aa' },
    { user: 'Мария', password: 'bb' }];
    
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

    setUser(user, password) {
        this.users.push({ user: user, password: password });
        this.activeUser = user;
        this.saveUser();
    }

    checkRegistr(user) {
        return this.users.find((item) =>
        item.user === user);
    }

    checkLogin(user, psw) {
        return this.users.find((item) =>
        item.user === user && item.password === psw);
    }


    
    addUser(user, password) {
        if (!this.checkRegistr(user)) {
            this.users.push({ user: user, password: password });
            this.activeUser = user;
            this.saveUser();
            this.save();
        }
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

        if (localStorage.getItem('active_user')) 
        this.activeUser = JSON.parse(localStorage.getItem('active_user'));
    }

}
