var btns = document.querySelectorAll('.btn');
var menus = document.querySelectorAll('.menu');

var i = 1;

btns.forEach(btn => {

    const menu = btn.querySelector('.menu');

    btn.addEventListener('focus', () => {
        menu.style.display = "block";
    });
    btn.addEventListener('focusout', () => {
        menu.style.display = "none";
    });
});
