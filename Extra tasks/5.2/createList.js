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

const createList = (title, list) => {
    document.write(`<h2>${title}</h2>`);
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (item of list) {
        const li = document.createElement("li");
        li.innerText = item.value;
        ul.children ? ul.appendChild(li) : null;
        item.children ? createChildLi(item, li) : null;
    }
};

const createChildLi = (node, li) => {
    const ul = document.createElement("ul");
    for (item of node.children) {
        const childLi = document.createElement("li");
        childLi.innerText = item.value;
        ul.children ? ul.appendChild(childLi) : null;
        li.children ? li.appendChild(ul) : null;
        item.children ? createChildLi(item, childLi) : null;
    }
};

createList("Extra Task 5.2", list);