let trangChu = document.getElementById('trang-chu');

console.log(trangChu);
trangChu.innerHTML = 'Trang chu moi';
trangChu.style.color = 'pink';
trangChu.style.cursor = 'pointer';

let text = document.getElementById('text');
text.placeholder = 'Something'
text.type = 'password';

// Tim kiem
// document.getElementById();
console.log(document.getElementsByClassName('text'));
console.log(document.getElementsByTagName('p'));
// document.querySelector()

// Thêm mới hoặc xoá elements
const todoList = ['Homework', 'Eat', 'Phay video game'];
const ul = document.createElement('ul'); // Tạo mới một element

for (let i=0; i<todoList.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = todoList[i];
    ul.appendChild(li); // Thêm một element con vào sau cùng của một element khác.
}

document.body.appendChild(ul);