var btns = document.querySelectorAll('.btn');
var menus = document.querySelectorAll('.menu');

var i = 1;

btns.forEach(btn => {

    const menu = btn.querySelector('.menu');
    const triangle = btn.querySelector('.triangle');

    btn.addEventListener('focus', () => {
        menu.style.display = "block";
        triangle.style.display = "block";
    });
    btn.addEventListener('focusout', () => {
        menu.style.display = "none";
        triangle.style.display = "none";
    });

    var menus1 = btn.querySelectorAll('.menu-1');

    menus1.forEach(menu1 => {
        menu1.addEventListener('click', () => {
            var menuicon = menu1.querySelector('.menuicon');
            var icon = btn.querySelector('.icon');
            icon.classList.remove(icon.classList[1]);
            icon.classList.add(menuicon.classList[1]);
        });
    });
});
