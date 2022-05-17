
class TweetFeedApiService {

    token;

    constructor() {
        this.userList = new UserList();
        this.errorView = new ErrorView('tweet');
        this.user = JSON.parse(localStorage.getItem('active_user'));
        this.token = JSON.parse(localStorage.getItem('token'));
        this.filterConfig = {};

    }

    saveToken() {            
        localStorage.setItem('token', JSON.stringify(this.token));
    }

    restoreToken() {   
        if (localStorage.getItem('token')) this.token = JSON.parse(localStorage.getItem('token'));
    }

    #checkResponseStatus(response) {
        if (response.status === 200 || response.status === 201 || response.status === 204) {
            return Promise.resolve(response);
        }
        return Promise.reject(response)
    }

    #convertResponseToJson(response) {
        return response.json()
    }

    #errorPage(response) {
        if (response.status === 401) {
            this.userList.activeUser = localStorage.setItem('active_user', JSON.stringify(''));
            this.token = localStorage.setItem('token', JSON.stringify(''));
            controller.setCurrentUser('');
            controller.formView.display();
            controller.viewForBloks();
        }
        else { this.errorView.display(response.status) };
    }

    #convertParamsToUrl(from, count, filterConfig) {
        let result="";
        console.log(filterConfig.dateFrom)

        if (filterConfig.author) {
            result += `&author=${filterConfig.author}`;
        }
        if (filterConfig.text) {
            result += `&text=${filterConfig.text}`;
        }
        if (filterConfig.dateFrom) {
            result += `&dateFrom=${filterConfig.dateFrom}`;
        }
        if (filterConfig.dateTo) {
            result += `&dateTo=${filterConfig.dateTo}`;
        }
        if (from || from===0) {
            result += `&from=${from}`;
        }
        if (count) {
            result += `&count=${count}`;
        }
        if (filterConfig.hashtags && filterConfig.hashtags.length) {
            result += `&hashtags=${filterConfig.hashtags}`;
        }
        
        return result.slice(0);
        
    }

    delay(ms) {
        return new Promise(resolve => setInterval(resolve, ms));
    }

    async register(user, pass) {
        let params = new URLSearchParams();
        params.set('login', user);
        params.set('password', pass);

        return await fetch('https://jslabapi.datamola.com/registration', {
            method: 'POST',
            body: params,
        })
            .then(this.#checkResponseStatus)
            .then(this.#convertResponseToJson)
            .then(() => {
                this.userList.setUser(user);
                this.login(user, pass);
                return true;
            })
    }

    async login(user, pass) {

        let params = new URLSearchParams();
        params.set('login', user);
        params.set('password', pass);

        return await fetch('https://jslabapi.datamola.com/login', {
            method: 'POST',
            body: params,
        })
            .then(this.#checkResponseStatus)
            .then(this.#convertResponseToJson)
            .then((result) => {

                this.userList.setUser(user);
                this.token = result.token;
                console.log(this.token)
                this.saveToken();
                localStorage.setItem('token', JSON.stringify(result.token));
                return this.token;
            })
    }

    async getTweets(from =0, count = 10, filterconfig = {}) {


        const paramForUrl = this.#convertParamsToUrl(from, count, filterconfig);
        let url = 'https://jslabapi.datamola.com/tweet?' + paramForUrl;

        return await fetch(url, {
            method: 'GET',
        })
            .then(this.#checkResponseStatus)
            .then(this.#convertResponseToJson)
            .then((result) => {
                result = result.sort(function (a, b) {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                result = result.slice(from, from + count);
                return result;
            })
            .catch(error => {
                this.#errorPage(error);
            })
    }

    async addTweetInServer(text) {
        let params = new URLSearchParams();
        params.set('text', text);
        this.token = this.restoreToken();


        return await fetch('https://jslabapi.datamola.com/tweet', {
            method: 'POST',
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
            body: params,
        })
            .then(this.#checkResponseStatus)
            .then(this.#convertResponseToJson)
            .then(() => {
                const tweetsForDisplaying = this.getTweets()
                return tweetsForDisplaying;
            })
            .catch(error => {
                this.#errorPage(error);
            })
    }

    async editTweetInServer(id, text) {

        let params = new URLSearchParams();
        params.set('text', text);
        this.token = this.restoreToken();

        return await fetch(`https://jslabapi.datamola.com/tweet/${id}`, {
            method: 'PUT',
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
            body: params,
        })
            .then(this.#checkResponseStatus)
            .then(this.#convertResponseToJson)
            .then(() => {
                const tweetsForDisplaying = this.getTweets();
                return tweetsForDisplaying;
            })
            .catch(error => {
                this.#errorPage(error);
            })
    }

    async deleteTweetInServer(id) {

        let params = new URLSearchParams();
        params.set('id', id);

        this.token = this.restoreToken();

        return await fetch(`https://jslabapi.datamola.com/tweet/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
            body: params,
        })
            .then(this.#checkResponseStatus)
            .then(() => {
                const tweetsForDisplaying = this.getTweets();
                return tweetsForDisplaying;
            })
            .catch(error => {
                this.#errorPage(error);
            })
    }


    async addCommentInServer(id, text) {

        let params = new URLSearchParams();
        params.set('id', id);
        params.set('text', text);

        this.token = this.restoreToken();

        return await fetch(`https://jslabapi.datamola.com/tweet/${id}/comment`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
            body: params,
        })
            .then(this.#checkResponseStatus)
            .then(this.#convertResponseToJson)
            .catch(error => {
                this.#errorPage(error);
            })
    }
}
