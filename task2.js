const input = document.querySelector('.addTask__input');
const taskEmpty = document.querySelector('.task__empty');
const errorTask = document.querySelector('.errorTask');
const clearButton = document.querySelector('.clearButton');
const taskList = document.querySelector('.task');
let taskListItems = localStorage.getItem('taskListItems');

if (taskListItems) {
    clearButton.disabled = false; //я помню рекомендацию не делать disabled кнопки изначально, но здесь в задании прямо указано сделать кнопку неактивной
    taskEmpty.style.display = "none";
    clearButton.classList.add("enabled");
}
else {
    clearButton.disabled = true;
    taskEmpty.style.display = "block";
}

const loadFromStorage = () => {
    taskListItems = taskListItems ? JSON.parse(taskListItems) : [];
    for (let i = 0; i < taskListItems.length; i++) {
            taskList.innerHTML +=
            `<li>
            <label class="label">
              <input
                type="checkbox"
                name="checkbox-name"
                class="real-checkbox"
              />${taskListItems[i]}
              <span class="custom-checkbox"></span>
            </label>
          </li>`;
    }
}
loadFromStorage ();

function addTask () {
    if (input.value.trim().length) {
        taskEmpty.style.display = "none";
        errorTask.innerText = '';
        input.style.border = '1px solid #000000'
        taskList.innerHTML +=
        `          <li>
            <label class="label">
              <input
                type="checkbox"
                name="checkbox-name"
                class="real-checkbox"
              />${input.value}
              <span class="custom-checkbox"></span>
            </label>
          </li>`;
        clearButton.disabled = false;
        clearButton.classList.add("enabled");
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
}

function clearList () {
    taskList.innerHTML = '';
    localStorage.clear();
    clearButton.disabled = true;
    clearButton.classList.remove("enabled");
    taskEmpty.style.display = "block";
}
clearButton.onclick = clearList;


// function checkTask(evt) {
//     if (evt.target.tagName === "LI" || evt.target.tagName === "CHECKBOX") {
//      evt.target.classList.toggle("checked");
//     }
//    }
//    document.querySelector('.task').onclick = checkTask;