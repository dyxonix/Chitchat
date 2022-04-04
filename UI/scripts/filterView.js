/* eslint-disable no-undef */
"use strict"

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

    const filterMenu = document.getElementById(this.containerId);

    if (filterMenu) {
      filterMenu.innerHTML = author.map((item) => `
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
const allautors = [
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
