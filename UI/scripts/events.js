"use strict"


//опубликовать

document.getElementById("add_tw").addEventListener("click", (event) => {
    console.log('add_tw')

});

//вход

document.getElementById("logn").addEventListener("click", (event) => {
    document.getElementById('inputs').style.display = 'none';
    document.getElementById('more').style.display = 'none';
    formView.display();
    document.getElementById('button-log-out').textContent = 'Log out';

});

document.getElementById("registr").addEventListener("click", (event) => {
    document.getElementById('inputs').style.display = 'none';
    document.getElementById('more').style.display = 'none';
    formView.display();
    
    document.getElementById('button-log-out').textContent = 'Log out';

});



//выход

// document.getElementById("exit").addEventListener("click", (event) => {
//     console.log('exit')

// });


//удаление
document.getElementById("delete").addEventListener("click", (event) => {
    console.log('delete')

});

//редактировать
document.getElementById("edit").addEventListener("click", (event) => {
    console.log('edit')

});




