console.log(document);

let trangChu = document.getElementById('trang-chu');

console.log(trangChu);
trangChu.innerHTML = 'Trang chu moi';
trangChu.style.color = 'pink';
trangChu.style.cursor = 'pointer';

let text = document.getElementById('text'); // Object thể hiện cho thẻ input
text.placeholder = 'Something'
text.type = 'password';

// Tim kiem
// document.getElementById();
console.log(document.getElementsByClassName('text'));
console.log(document.getElementsByTagName('p'));
// document.querySelector()

// Thêm mới hoặc xoá elements
const todoList = ['Homework', 'Eat', 'Play video game', 'Play soccer'];
function addTodoList(search) {
    console.log(search);
    let filterList = [];
    if (search == '') {
        filterList = todoList;
    } else {
        filterList = todoList.filter(todo => todo.includes(search));
        console.log(filterList);
    }
    const ul = document.createElement('ul'); // Tạo mới một element

    for (let i=0; i<filterList.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = filterList[i];
        ul.appendChild(li); // Thêm một element con vào sau cùng của một element khác.
    }
    document.body.appendChild(ul);
}

addTodoList('');

function sayHello() {
    console.log('Hello, My name is MindX');
    alert('Hello, My name is MindX');
}

// const btn = document.getElementById('btn');
// console.log(btn);
// btn.onclick = sayHello;

// addEventListener
const btn = document.getElementById('btn');
function helloEvent() {
    console.log('Hello event');
}
btn.addEventListener('click', helloEvent);
btn.addEventListener('click', function(event) {
    console.log(event.target)
    console.log('Hello function');
    const btn = document.getElementById('btn');
    btn.removeEventListener('click', helloEvent);
})


const text2 = document.getElementById('text2');
text2.addEventListener('change', function(event) {
    console.log('event.target.value', event.target.value);
})

// HTML Web Storage
localStorage.setItem('total', 199000);
console.log(localStorage.getItem('total'));

sessionStorage.setItem('total', 199000);
console.log(sessionStorage.getItem('total'));

let data = {
    name: 'MindX'
}
localStorage.setItem('data', JSON.stringify(data));
console.log(localStorage.getItem('data'));
console.log(JSON.parse(localStorage.getItem('data')));


// Windown localion & History
console.log(location.href)
console.log(location.host)
console.log(location.hostname)
console.log(location.pathname)
// location.assign('https://www.google.com/maps')

// history.back();
// history.forward();

// Timer
setTimeout(function() {
    console.log('Set time out');
}, 3000) // function, time: miliseconds

let i = 5;
const interval = setInterval(function() {
    i--;
    console.log('Set interval', i);

    if (i == 0) {
        clearInterval(interval);   
    }
}, 1000)


console.log('End of code');