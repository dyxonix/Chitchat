class ErrorView {

    showEventFunc = () => { };

    constructor(containerId) {
        this.containerId = containerId;
    }

    display(err) {
        if (!err) {
            return '';
        }

        const errView = document.getElementById(this.containerId);

        if (errView) {
            controller.viewForBloks();
            errView.innerHTML = `
            <div class="error_container">

            <h1 class="error_title">Ошибка ${err}</h1>
            <p class="error_text">Что-то пошло не так!</p>

            <button id="error" class="btn_blue btn_error" type="submit">На главную</button>
            <img class="img_error" src="images/11104.svg" class="logo" alt="chitchat">
            </div>    
              `;
            this.bindBackEvent();
        }
    }

    bindBackEvent() {
        const back = document.getElementById('error')
        back.addEventListener('click', this.showEventFunc);

    };
}
