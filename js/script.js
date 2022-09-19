var btns = document.querySelectorAll(".btn");
var menus = document.querySelectorAll(".menu");

var i = 1;

btns.forEach(btn => {
    btn.addEventListener('focus', (e) => {
        e.preventDefault();
    });
});