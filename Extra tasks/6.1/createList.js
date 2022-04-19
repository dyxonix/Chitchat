
"use strict"

const list = [
    {
        value: "Пункт 1.",
        children: null,
    },
    {
        value: "Пункт 2.",
        children: [
            {
                value: "Подпункт 2.1.",
                children: null,
            },
            {
                value: "Подпункт 2.2.",
                children: [
                    {
                        value: "Подпункт 2.2.1.",
                        children: null,
                    },
                    {
                        value: "Подпункт 2.2.2.",
                        children: null,
                    },
                ],
            },
            {
                value: "Подпункт 2.3.",
                children: null,
            },
        ],
    },
    {
        value: "Пункт 3.",
        children: null,
    },
];

function createList(title, list) {
    const body = document.querySelector('body');
    const newTitle = document.createElement('h2');
    const newList = createUl(list);
    newTitle.innerHTML = title;
    body.appendChild(newTitle);
    body.appendChild(newList);
}

function createUl(ul) {
    const newUl = document.createElement('ul');


    ul.forEach(li => {
        const newLi = document.createElement('li');

        if (li.children) {
            newLi.setAttribute('style', 'font-size: 90%');
            newLi.innerHTML = `<div>${li.value}</div>`;
            newLi.appendChild(createUl(li.children));
        } else {
            newLi.innerHTML = `<div>${li.value}</div>`;
        }

        newUl.appendChild(newLi);
    })
    return newUl;
}

createList("List", list);

//task6.1

const ulList = document.querySelector("ul")

ulList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'DIV') {
        let parent = target.parentNode.querySelector('ul');
        if (!parent) return;
        parent.hidden = !parent.hidden;
    }
});