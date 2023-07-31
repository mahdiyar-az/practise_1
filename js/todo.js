function addNewTodo(){
    
    let inputJob = document.querySelector('input.usr');
    let date = document.querySelector('input.date');
    let todos = document.querySelector('div.todos');
    
    todos.innerHTML = todos.innerHTML + `<div class="todo"><p>${inputJob.innerHTML}</p><p>${date.innerHTML}</p></div>`;
    document.querySelector('div.todos').innerHTML = todos.innerHTML;
}
