let el = document.querySelector('#element');
el.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
};

let container = document.querySelectorAll('.container');
// 用forEach來做多個class的監聽事件綁定
container.forEach(container => {
  container.addEventListener('drop', dropped);
  container.addEventListener('dragenter', cancelDefault)
  container.addEventListener('dragover', cancelDefault)
})

function dropped(e) {
    cancelDefault(e)
    let id = e.dataTransfer.getData('text/plain');
    e.target.appendChild(document.querySelector(`#${id}`));
};

 function cancelDefault(e) {
    e.preventDefault();
    e.stopPropagation();
    return false
};

