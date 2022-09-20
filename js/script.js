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


var dropdownFull = document.querySelector('.dropdown-full');
var dropdownOverflow = document.querySelector('.dropdown-overflow');
var btns2 = document.querySelectorAll('.btn2');

var dropdownstyle = dropdownFull.getBoundingClientRect();

dropdownFull.style.top = ""+(-Math.round(dropdownstyle.height))+"px";

btns2.forEach(btn2 => {
    btn2.addEventListener('mouseover', () => {
        dropdownOverflow.style.zIndex = 1;
        dropdownFull.style.top = "0px";
        
    });
    btn2.addEventListener('focus', () => {
        dropdownOverflow.style.zIndex = 1;
        dropdownFull.style.top = "0px";
        
    });
});