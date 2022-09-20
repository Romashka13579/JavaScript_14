var btns = document.querySelectorAll('.btn');
var menus = document.querySelectorAll('.menu');

var i = 1;
var focuss = false;

btns.forEach(btn => {

    const menu = btn.querySelector('.menu');
    const triangle = btn.querySelector('.triangle');

    btn.addEventListener('focus', () => {
        menu.style.display = "block";
        triangle.style.display = "block";
        var text = btn.querySelector(".text");
        text.style.display = "none";
        focuss = true;
    });
    btn.addEventListener('focusout', () => {
        menu.style.display = "none";
        triangle.style.display = "none";
        focuss = false;
    });

    var menus1 = btn.querySelectorAll('.menu-1');

    menus1.forEach(menu1 => {
        menu1.addEventListener('click', () => {
            var menuicon = menu1.querySelector('.menuicon');
            var menutxt = menu1.querySelector('.menutxt-1');
            var hovertext = btn.querySelector('.hovertext');
            var icon = btn.querySelector('.icon');
            icon.classList.remove(icon.classList[1]);
            icon.classList.add(menuicon.classList[1]);
            hovertext.innerHTML = menutxt.innerHTML;
        });
    });
    btn.addEventListener('mouseover', () => {
        if(focuss == false){
            var text = btn.querySelector(".text");
            text.style.display = "flex";
        }
    });
    btn.addEventListener('mouseout', () => {
        var text = btn.querySelector(".text");
        text.style.display = "none";
    });
});

var dropdownsFull = document.querySelectorAll('.dropdown-full');
var dropdownsOverflow = document.querySelectorAll('.dropdown-overflow');
var btns2 = document.querySelectorAll('.btn2');

btns2.forEach(btn2 => {

    const dropdownFull = btn2.querySelector('.dropdown-full');
    const dropdownOverflow = btn2.querySelector('.dropdown-overflow');

    const dropdownstyle = dropdownFull.getBoundingClientRect();
    dropdownFull.style.top = ""+(-Math.round(dropdownstyle.height))+"px";
    btn2.addEventListener('focus', () => {
        dropdownFull.style.top = "0px";
        setTimeout(() => {
            dropdownOverflow.style.zIndex = 1;
        }, dropdownstyle.transition);
    });
    btn2.addEventListener('focusout', () => {
        dropdownFull.style.top = ""+(-Math.round(dropdownstyle.height))+"px";
        setTimeout(() => {
            dropdownOverflow.style.zIndex = -1;
        }, dropdownstyle.transition);
    });
});