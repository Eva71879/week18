
const input = document.querySelector('.addTask__input');
const taskEmpty = document.querySelector('.task__empty');
const errorTask = document.querySelector('.errorTask');
const clearButton = document.querySelector('.clearButton');
const taskList = document.querySelector('.task');

function addTask () {
    if (input.value.trim().length) {
        taskEmpty.style.opacity = 0;
        errorTask.innerText = '';
        input.style.border = '1px solid #000000'
        taskList.innerHTML +=
        `<li class="task__item">
          <input type="checkbox" class="task__item" />${input.value}
        </li>`;
        clearButton.disabled = false; //я помню рекомендацию не делать disabled кнопки изначально, но здесь в задании прямо указано сделать кнопку неактивной

        addtoStorage();
    }
    else {
        input.style.border = '1px solid #ff0000'
        errorTask.innerText = 'Пожалуйста, напишите задачу';
    }
}
document.querySelector('.addTask__button').onclick = addTask;

const addtoStorage = () => {
    let taskListItems = localStorage.getItem('taskListItems');
    taskListItems = taskListItems ? JSON.parse(taskListItems) : [];
    
    taskListItems.push(input.value);
    localStorage.setItem('taskListItems', JSON.stringify(taskListItems));
    input.value = '';
    console.log(`Задача ${input.value} добавлена в список и сохранена в Local Storage`);
}

const loadFromStorage = () => {
    let taskListItems = localStorage.getItem('taskListItems');
    taskListItems = taskListItems ? JSON.parse(taskListItems) : [];
    for (let i = 0; i < taskListItems.length; i++) {
        const object = taskListItems[i];
        for (let key in object) {
            taskList.innerHTML +=
            `<li class="task__item">
              <input type="checkbox" class="task__item" />${object[key]}
            </li>`;
        }
    }
}
loadFromStorage ();

  


function clearList () {
    taskList.innerHTML = '';
    taskEmpty.style.opacity = 1;
}
clearButton.onclick = clearList;



// function checkTask(evt) {
//     if (evt.target.tagName === "LI" || evt.target.tagName === "CHECKBOX") {
//      evt.target.classList.toggle("checked");
//     }
//    }
//    document.querySelector('.task').onclick = checkTask;


// - Каждый чекбокс напротив задачи должен менять своё состояние при клике (говоря нам, что задача выполнена)+
// - При клике на кнопку «Очистить список» все задачи должны удаляться+
    
//     **Важно: Для сохранения состояния списка задач между сеансами работы с приложением используйте Local Storage. Это позволит восстановить список задач при повторном открытии приложения.**
    
