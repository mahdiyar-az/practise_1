let ToDO= []
let sortedToDO = []
function addNewTodo(){
    
    let inputJob = document.querySelector('input.usr').value;
    let dates = document.querySelector('input.date').value;
    let todos = document.querySelector('div.todos');
    ToDO.push({
        job:inputJob,
        date:dates
    });
    sortedToDO = []
    sortedToDO = ToDO.sort(
        (p1, p2) => (p1.date > p2.date) ? 1 : (p1.date < p2.date) ? -1 : 0);
    console.log(sortedToDO);
    useTodo();
   // todos.innerHTML = todos.innerHTML + `<div class="todo"><p>${inputJob}</p><p>${dates}</p></div>`;
   // document.querySelector('div.todos').innerHTML = todos.innerHTML;
}

function useTodo(){
    let b = '<p>To DO:</p>';
    
    for (const a of sortedToDO ) {
        b = b+ `<div class="todo"><p>${a.job}</p><p>${a.date}</p></div>`;
    }
    document.querySelector('div.todos').innerHTML = b;
} 