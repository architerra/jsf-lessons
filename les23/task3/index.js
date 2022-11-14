const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const createBtn = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input');
function addTask() {
  if (input.value == '') {
    return;
  }
  tasks.push({ text: `${input.value}`, done: false });
  input.value = '';
  console.log(tasks);
  listElem.innerHTML = '';
  renderTasks(tasks);
}
createBtn.addEventListener('click', addTask);

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      let newId = Math.random();
      listItemElem.setAttribute('id', `${newId}`);
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-random-id', 'text');
      checkbox.checked = done;
      checkbox.dataset.randomId = `${newId}`;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const changeDone = event => {
  let findedId = event.target.closest('.list__item-checkbox').dataset.randomId;
  tasks.forEach(obj => {
    if (String(obj.id) == findedId) {
      obj.done = true;
    }
  });
  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', changeDone);

renderTasks(tasks);
