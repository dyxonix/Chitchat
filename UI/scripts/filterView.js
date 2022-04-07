/* eslint-disable max-classes-per-file */
/* eslint-disable lines-around-directive */
/* eslint-disable no-undef */

class TextAreaView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(textArea) {
    const textView = document.getElementById(this.containerId);

    if (!TweetCollection.user) {
      document.getElementById('write_area').style.display = 'none';
    }
    textView.innerHTML = textArea
      ? ''
      : `
      <form>
        <textarea class="main_textarea" maxlength="280"
         placeholder="Напишите что-нибудь ..."></textarea>
          <hr>
          <div class="twit_actions">
          <p>280</p>
          <button class="btn_blue" type="submit">Опубликовать</button>
          </div>
      </form>
    `;
  }
}

class FiltersView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(fltr) {
    const filtersView = document.getElementById(this.containerId);

    filtersView.innerHTML = fltr
      ? ''
      : `
      <form class="filtration">

      <div class="list_filter">
       <label id="show_filter">Автор</label>
       <div class="input_container"> 
       <select class="input" id="filter" class="list_filter">
        </select>
        </div>
        </div>
        <div class="list_filter">
        <label id="show_filter">Дата</label>
        <div class="input_container">        
        <input class="input" type="date"/>                
          <input class="input" type="date"/>
          </div>
          </div>               
          <div class="list_filter">
           <label id="show_filter">Текст</label>
          <div class="input_container"> 
          <input class="input" type="text" name="text" placeholder="Введите текст"></input>
          </div> 
          </div>
          <div class="list_filter">
           <label id="show_filter">Хэштег</label>
           <div class="input_container"> 
         <input class="input" type="text" name="text" placeholder="Введите тэг"></input>
         </div>
         </div>
      </form>
      <button id="confirm" class="filter_confirm selector_name">Применить</button>
    `;
  }
}

class FilterView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  // eslint-disable-next-line consistent-return
  display(author) {
    if (!author) {
      return '';
    }

    const filterAuthors = document.getElementById(this.containerId);

    if (filterAuthors) {
      filterAuthors.innerHTML = author
        .map(
          (item) => `
                <option class="list_item"><a class="item_filtration" href="#">${item}</a></option>`,
        )
        .join('\n');
    }
  }

  setAuthors(authors) {
    this.display(authors);
  }
}

const allauthors = [
  'Ирина',
  'Мария',
  'Евгений',
  'Gleb',
  'Виктория Смит',
  'Тема Николаев',
  'Евгений',
  'Артем',
  'Лиза',
  'Москва',
  'Петр',
  'snow',
  'Геннадий',
  'Катя',
  'Ирина',
  'Мария',
  'Trojan',
  'Ваня',
  'Света',
  'Rick',
];
