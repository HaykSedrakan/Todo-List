const btn = document.querySelector('.add__todo'),
     inputContein = document.querySelector('.input-contein'),
     todoInput = document.querySelector('.input_todo'),
     ulItemLi = document.querySelector('.li-todoList'),
     deleteIconTodo = document.querySelector('.delete-icon'),
     titleDo = document.querySelector('.todo-title'),
     liTodo = document.querySelector('.todo-li'),
     checkIcon = document.querySelector('.check-icon'),
     toggle = document.getElementById('toggle-moon'),
     body = document.querySelector('body'),
     deleteAll = document.querySelector('.all'),
     globalMainConteiner = document.querySelector('.global-container')

btn.addEventListener('click', () => {
    createTodo()
})
document.addEventListener('keydown',(event) => {
    if(event.code === 'Enter')
    {
        createTodo()
    }
} )

function createTodo()
{
    if(todoInput.value !== '')
    {
        let todoDiv = document.createElement('div')
        todoDiv.classList.add('todo-div')
        ulItemLi.append(todoDiv)
        let todoLi = document.createElement('li')
        todoDiv.append(todoLi)
        todoLi.classList.add('todo-li')
        todoLi.textContent = todoInput.value
        todoInput.value = ''

        let deleteTodo = document.createElement('button')
        deleteTodo.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        deleteTodo.classList.add('delete-icon')
        todoDiv.appendChild(deleteTodo)

        deleteTodo.addEventListener('click', () => {
            ulItemLi.removeChild(todoDiv)
        })

        let checkTodo =  document.createElement('button')
        checkTodo.innerHTML = `<i class="fa-solid fa-check"></i>`
        checkTodo.classList.add('check-icon')
        todoDiv.appendChild(checkTodo)

        checkTodo.addEventListener('click', () => {
            if(xMark.classList.contains('activeRed'))
            {
                xMark.classList.remove('activeRed')
            }
            todoDiv.classList.remove('activeRed')
            todoDiv.classList.add('active')
            todoDiv.style.backgroundColor = '#90EE90'
            checkTodo.classList.add('active')
        })

        let xMark =  document.createElement('button')
        xMark.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        xMark.classList.add('xMark-icon')
        todoDiv.appendChild(xMark)

        xMark.addEventListener('click', () => {
            if(checkTodo.classList.contains('active'))
            {
                checkTodo.classList.remove('active')
            }

            todoDiv.classList.remove('active')
            todoDiv.classList.add('activeRed')
            todoDiv.style.backgroundColor = '#DC143C'
            xMark.classList.add('activeRed')
        })
    }
    const todoDivItem = document.querySelectorAll('.todo-div')

    deleteAll.addEventListener('click',() => {
        todoDivItem.forEach(items => {
            items.remove()
        })
    })
}

toggle.addEventListener('click', () => {
    toggle.classList.toggle('bi-moon')
    globalMainConteiner.classList.toggle('activeBg')

    if(toggle.classList.toggle('bi-brightness-high-fill'))
    {
        body.style.backgroundColor = 'rgb(120,120,120)'
        body.style.color = 'black'
        titleDo.style.color = '#000'
        body.style.transition = '2s'

    }
    else{
        body.style.backgroundColor = 'rgb(48,48,48)'
        body.style.color = 'white'
        titleDo.style.color = '#fff'
        body.style.transition = '1.5s'
        
    }
})
