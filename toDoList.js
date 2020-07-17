const todos = [];

const myList = document.getElementById("myList");
const myInput = document.getElementById("myInput");

function refreshList() {
  myList.innerHTML = '';
  for (let i = 0; i < todos.length; i += 1) {
    const todo = todos[i];
    const listItem = document.createElement('li');
    listItem.classList.add('content');

    const div = document.createElement('div');
    const editIcon = document.createElement('i');
    editIcon.classList.add('fa');
    editIcon.classList.add('fa-pencil');
    editIcon.setAttribute('aria-hidden', true);
    editIcon.setAttribute('id', `edit-${i}`);
    editIcon.setAttribute('onclick', `prepareForEditing(${i})`)

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa');
    deleteIcon.classList.add('fa-trash');
    deleteIcon.setAttribute('aria-hidden', true);
    deleteIcon.setAttribute('onclick', `deleteElement(${i})`);

    const todoText = document.createElement('p');
    todoText.setAttribute('id', `todo-${i}`);
    todoText.classList.add('text');
    todoText.innerText = todo;

    div.appendChild(editIcon);
    div.appendChild(deleteIcon);

    listItem.appendChild(todoText);
    listItem.appendChild(div);
    myList.appendChild(listItem);
  }
}

function prepareForEditing(position) {
  const editParagraph = document.getElementById(`todo-${position}`);
  const editInput = document.createElement('input');
  editInput.setAttribute('id', `editInput-${position}`);
  editInput.value = todos[position];
  editParagraph.innerHTML = '';
  editParagraph.appendChild(editInput);

  const editIcon = document.getElementById(`edit-${position}`);
  editIcon.classList.remove('fa-pencil');
  editIcon.classList.add('fa-check');
  editIcon.setAttribute('onclick', `editElement(${position})`);
}

function newElement() {
  const todo = myInput.value;
  if (todo === '') {
    return alert('Please supply your todo item');
  }
  todos.push(todo);
  myInput.value = '';
  refreshList();
}

function editElement(editIndex) {
  const newValue = document.getElementById(`editInput-${editIndex}`).value;
  if (newValue) {
    todos[editIndex] = newValue;
  }
  refreshList();
}

function deleteElement(deleteIndex) {
  todos.splice(deleteIndex, 1);
  refreshList();
}