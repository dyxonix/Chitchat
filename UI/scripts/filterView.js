/* eslint-disable lines-around-directive */
/* eslint-disable no-undef */
"use strict"

class FiltersView {
  constructor(containerId) {
    this.containerId = containerId;
  }

  display(fltr) {
    const filtersView = document.getElementById(this.containerId);

    filtersView.innerHTML = fltr ? `` : `

    <div id="filtration" class="twit_write_area">
                        <form>
                            <textarea class="main_textarea" maxlength="280"
                                placeholder="Напишите что-нибудь ..."></textarea>
                            <hr>
                            <div class="twit_actions">
                                <p>280</p>
                                <button class="btn_blue" type="submit">Опубликовать</button>
                            </div>
                        </form>
                    </div>


                    <nav class="filter_items">

                        <form class="filtration filter_name">
                            <button class="filter_confirm selector_name">Применить</button>
                        </form>

                        <form class="filtration filter_name">
                            <button class="selector_name">Имя</button>
                            <ul id="filter" class="list_filter">
                            </ul>
                        </form>



                        <form class="filtration filter_date">

                            <button class="selector_name">Дата</button>
                            <ul class="list_filter">
                                <li>От:<input class="date_input" type="date" value="2022-02-22" />
                                </li>
                                <hr>
                                <li>До:<input class="date_input" type="date" value="2022-02-22" /></li>
                            </ul>
                        </form>


                        <form class="filtration filter_text">
                            <button class="selector_name">Текст
                            </button>
                            <ul class="list_filter">
                                <li><input class="date_input" type="text" name="text" placeholder="Введите текст">
                                </li>
                                <li><input class="date_input" type="checkbox" /></li>
                            </ul>
                        </form>


                        <form class="filtration filter_tag">
                            <button class="selector_name selected">Хэштег
                                <img class="reset" src="images/x.svg" alt="X">
                            </button>
                            <!-- <ul class="list_filter">
                                <li><input class="date_input" type="text" name="text" placeholder="Введите тэг">
                                </li>
                                <li><input class="date_input" type="checkbox" /></li>
                            </ul> -->
                        </form>
                        </nav>
    `
  }
}

// eslint-disable-next-line no-unused-vars
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
      filterAuthors.innerHTML = author.map((item) => `
                <li class="list_item"><a class="item_filtration" href="#">${item}</a></li>
                    <hr>
            `).join('\n');
    }
  }

  setAuthors(authors) {
    this.display(authors);
  }
}

// eslint-disable-next-line no-unused-vars
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
