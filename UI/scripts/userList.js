"use strict"


class UserList {

    _activeUser = '';

    constructor() {
         this.restoreUser();
    }

    set activeUser(activeUser) {
        this._activeUser = activeUser;
    }

    get activeUser() {
        return this._activeUser;
    }
    setUser(user) { 
        this.activeUser = user;
        this.saveUser();
    }

    saveUser() {
        localStorage.setItem('active_user', JSON.stringify(this.activeUser));
    }

    restoreUser() {

        if (localStorage.getItem('active_user')) 
        this.activeUser = JSON.parse(localStorage.getItem('active_user'));
    }
}
