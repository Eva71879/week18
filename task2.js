
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
        clearButton.disabled = false;

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

    if (taskListItems > 0) {
        taskList.innerHTML +=
        `<li class="task__item">
          <input type="checkbox" class="task__item" />${input.value}
        </li>`;
    }
    
}

// function showEleven() {
// 	const arrayElevenJSON = localStorage.getItem('arrayEleven');
// 	const arrayEleven = JSON.parse(arrayElevenJSON);
// 	let output = '';
// 	for (let i = 0; i < arrayEleven.length; i++) {
// 		const object = arrayEleven[i];
// 		for (let key in object) {
// 			output += `${key} ${object[key]} </br>`;
// 		}
// 	}
// 	document.querySelector('.practicum12').innerHTML = output;
// }

// document.querySelector('.b-12').addEventListener('click', showEleven);

// const removeFromCart = () => {
// 	let cartItems = localStorage.getItem('cartItems');
// 	cartItems = cartItems ? JSON.parse(cartItems) : [];

// 	if (cartItems.length > 0) {
// 		cartItems.pop();
// 		localStorage.setItem('cartItems', JSON.stringify(cartItems));
// 		console.log('Последний добавленный товар удален из корзины');
// 		console.log(cartItems);	
// 	} else {
// 		console.log('Корзина пуста, нечего удалить');
// 	}
// };


function clearList () {
    taskList.innerHTML = '';
    taskEmpty.style.opacity = 1;
}
clearButton.onclick = clearList;


// const addToCart = () => {
// 	const productInput = document.getElementById('productInput');
// 	const product = productInput.value;

// 	if (product.trim() !== '') {
// 		let cartItems = localStorage.getItem('cartItems');
// 		cartItems = cartItems ? JSON.parse(cartItems) : []; //код из подсказки

// 		cartItems.push(product);
// 		localStorage.setItem('cartItems', JSON.stringify(cartItems));

// 		console.log(`Товар "${product}" добавлен в корзину и сохранен в Local Storage.`);
// 		console.log(cartItems);
// 		productInput.value = '';
// 	} else {
// 		console.log('Введите название товара.');
// 	}
// };

// document.querySelector('.b-21').addEventListener('click', addToCart);






// function checkTask(evt) {
//     if (evt.target.tagName === "LI" || evt.target.tagName === "CHECKBOX") {
//      evt.target.classList.toggle("checked");
//     }
//    }
//    document.querySelector('.task').onclick = checkTask;


// - Каждый чекбокс напротив задачи должен менять своё состояние при клике (говоря нам, что задача выполнена)+
// - При клике на кнопку «Очистить список» все задачи должны удаляться+
    
//     **Важно: Для сохранения состояния списка задач между сеансами работы с приложением используйте Local Storage. Это позволит восстановить список задач при повторном открытии приложения.**
    
