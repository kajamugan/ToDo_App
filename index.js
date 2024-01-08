const $addTodo = document.getElementById('addTodo');
const $todoList = document.getElementById('todoList');

$addTodo.addEventListener('keypress', (e) => {
    if(e.code === "Enter" && e.target.value !=''){
        let todo = e.target.value;
        let $todoItem = document.createElement('li');

        let todoID = new Date().getTime();

        $todoItem.innerHTML = `
           <input id=${todoID} type="checkbox" />
           <label for=${todoID}>${todo}</label>
        `;
        $todoList.appendChild($todoItem);

        $addTodo.value = "";
    }
});

$todoList.addEventListener('click', (e) => {
    if(e.target.checked){
        e.target.parentElement.classList.add('completed');
    }else{
        e.target.parentElement.classList.remove('completed');
    }
});

