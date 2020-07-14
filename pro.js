const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-things');
const todobutton = document.querySelector('.todo-button');



todobutton.addEventListener('click',function(e){
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
     
    const listDiv = document.createElement('li');
    listDiv.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    const input = todoInput.value;
    listDiv.innerHTML += " ";
    listDiv.innerHTML += input;
    listDiv.classList.add('todo-items');
    todoDiv.appendChild(listDiv);

    const checked = document.createElement('button');
    checked.innerHTML = '<i class="fas fa-check"></i>';
    checked.classList.add('checked-btn');
    todoDiv.appendChild(checked);
    
    const deleted = document.createElement('button');
    deleted.innerHTML = '<i class="fas fa-trash"></i>';
    deleted.classList.add('delete-btn');
    todoDiv.appendChild(deleted);

    todoList.appendChild(todoDiv); 
    todoInput.value = "";
});

todoList.addEventListener('click',function(event){
    const item = event.target;
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall'); 
        todo.addEventListener('transitionend',function(){
          todo.remove();
        });
    }

    if(item.classList[0] === 'checked-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
});
