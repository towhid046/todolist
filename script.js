let todoList = [
    {id:983704872934, title: 'Go to School', completed: false},
    {id:983704872938, title: 'Go to College', completed: false},
    {id:983704872931, title: 'Go to University', completed: true},
    {id:983704872914, title: 'Visit School', completed: true},
];

// create to do
const toCreateFunctionBind = () =>{
    const todoAddButtonSelector = document.querySelector('#todoAddButton');
    const todoFormInputIdSelector = document.querySelector('#todoFormInputId');
    todoAddButtonSelector.addEventListener('click', function(event){
        event.preventDefault();
        const todoItemValue =  todoFormInputIdSelector.value;
        if(todoItemValue === ''){alert('Add something on your list')}
        else{todoList.push({id: Date.now(), title: todoItemValue, completed: false})};
        todoFormInputIdSelector.value = '';
        output();
    });
};

// delete to do
const deletetodoFunctionHandelar = () => {
    const deletetoDo = document.querySelectorAll('.deleteBtn');
    deletetoDo.forEach(function(btn){
        btn.addEventListener('click', function(event){
            const deletetodoId = parseInt(event.target.attributes.deletetodo.value)
                todoList = todoList.filter(function(item){
                    if(item.id === deletetodoId){ return false}
                    else{return true}
            })
            output()
        })
    })
}

// complete to do
const completetodoFunctionHendaler = ()=> {
    const completeButton = document.querySelectorAll('.completeBtn');
    completeButton.forEach(function(item){
        item.addEventListener('click', function(a){
        const completeId =  parseInt(a.target.attributes['check-arrtibute'].value)
        todoList.map(function(list){
            (list.id === completeId) && (list.completed = true)
        })
        output();
        })
    })
}

const output = () => {
    const totoOlListSelector = document.querySelector('#totoOlList');
    const templete = todoList.map((item) => {
        const todoTemplete = `
        <li>
            <button check-arrtibute="${item.id}" ${item.completed && 'disabled'} class="completeBtn btn ${item.completed && 'cursor-none'} ${item.completed && 'completedBtn'}" id="completeButton">✓</button>
            <span class="todoListTitle ${item.completed && 'line-through' }" id="todoTitle">${item.title}</span>
            <button class="deleteBtn btn" id="deleteButton">
                <svg deletetoDo="${item.id}" class="deleteBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>
            </button>
        </li>`
    return todoTemplete
    });
    totoOlListSelector.innerHTML = templete.join('')

    completetodoFunctionHendaler();
    deletetodoFunctionHandelar()
}
toCreateFunctionBind();
output();