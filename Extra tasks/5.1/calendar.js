
"use script"


function createCalendar(elem, year, month) {
    const element = document.getElementById(elem);

    let table = `<table border="1" cellspacing="0">
            
        <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
        </tr>`;

    const date = new Date(year, month - 1, 1);
    for (let i = 0; i < 6; i++) {
        let isEmpty = true;
        let row = '\n <tr>';
        for (let j = 1; j < 8; j++) {
            if (date.getDay() !== j % 7 || date.getMonth() !== month - 1) {
                row += '\n <td></td>';
            } else {
                row += `\n <td>${date.getDate().toString()}</td>`;
                date.setDate(date.getDate() + 1);
                isEmpty = false;
            }
        }
        row += '\n </tr>';
        if (!isEmpty) {
            table += row;
        }
    }
    table += '\n </table>';
    element.innerHTML = table;
}

/*-----------------------------------------------------------------------------------------------*/

createCalendar('calendar', 2012, 10);