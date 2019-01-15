
/**
 * TODOS
 * 1. Добавление задачи
 * 2. Удаление задачи
 * 3. Редактирование задачи
 */

 /**
 * Одна задача это объект из следующих полей
 * id - произвольная уникальная строка
 * title - заголовок задачи
 * text - текст задачи
 */

/**
 * todosStorage - обьект для хранения всех todos
 * @type {Object}
 */
const todosStorage = {
	currentTodos: [],
	deletedTodos: []	
};

/**
 * [description]
 * @param  {String} title [description]
 * @param  {String} text  [description]
 * @return {[]} currentTodos
 */
const addTodoItem = (title, text) => {
	if (!title) return console.log('Please provide todo title');
	if (!text) return console.log('Please provide todo text');

	//const todo = {title, text};
	//todosStorage.currentTodos.push(todo);
	todosStorage.currentTodos.push({title, text, id : generateId()});

	return todosStorage.currentTodos;
};

/**
 * generateId - создает произвольную строку
 * @return {String} - новый id
 */
const generateId = () => {
	const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	let id = '';

	for (let i = 0; i < 10; i++) {
		const index = Math.floor( Math.random() * uniqueValues.length );
		id += uniqueValues[index];
	}

	return id;

	// Вариант из инета:
	//http://qaru.site/questions/3112/generate-random-stringcharacters-in-javascript
	//Преобразуйте число в строку базы 36, то есть используя символы 0-9 и a-z.
	//Вариант плох тем, что буквы только в нижнем регистре генерируются.

	// let id = Math.random().toString(36).substr(2, 10);
	// return id;

	// Мой вариант:
	// let id = '';
	// let i = 0;
	// while (i < 10) {
	// id += uniqueValues.charAt(Math.round(Math.random()*uniqueValues.length));
	// i++;
	// };

	// return id;	
}

/**
 * [description]
 * @param  {String} id [description]
 * @return {[]} currentTodos
 */
const deleteTodoItem = (id) => {
	if (!id) return console.log('Передайте id удаляемой задачи.');

	todosStorage.currentTodos = todosStorage.currentTodos.filter((todoItem) => todoItem.id !== id);
	
	return todosStorage.currentTodos;
}

/**
 * [description]
 * @param  {String} id    [description]
 * @param  {String} title [description]
 * @param  {String} text  [description]
 * @return {[]}       [description]
 */
const editTodoItem = (id, title, text) => {
	if (!id) return console.log('Please provide todo id');
	if (!title) return console.log('Please provide new todo title');
	if (!text) return console.log('Please provide new todo text');

	todosStorage.currentTodos.map((item) => {
		if (item.id === id) {
			item.title = title;
			item.text = text;
		}
	});
	return todosStorage.currentTodos;
}


