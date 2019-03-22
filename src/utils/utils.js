const addListItem = num => {
  const list = getList();
  list.innerHTML += `<li class="ex">
    <div class="ex-title">Excercise ${num}</div>
    <div class="ex-data" id="data-${num}"></div>
    </li>`;
};

const addData = (num, data) => {
  const id = `data-${num}`;
  const list = document.getElementById(id);
  list.innerHTML += `${data}<br/>`;
};

const getList = () => document.getElementById('result');
export { addListItem, addData };
