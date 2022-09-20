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



var dropdownMenu2 = document.querySelector('.dropdown-menu-2');
var btnsblocks = dropdownMenu2.querySelectorAll('.btn-block');

var focusout = false;

btnsblocks.forEach(btnsblock => {

    var btn2 = btnsblock.querySelector('.btn2');

    const dropdownFull = btnsblock.querySelector('.dropdown-full');
    const dropdownOverflow = btnsblock.querySelector('.dropdown-overflow');

    const dropdownstyle = dropdownFull.getBoundingClientRect();
    dropdownFull.style.top = ""+(-Math.round(dropdownstyle.height + 2))+"px";
    btn2.addEventListener('focus', () => {
        focusout = false;
        dropdownOverflow.style.display = "flex";
        setTimeout(() => {
            dropdownFull.style.top = "0px";
        }, 10);
    });
    btn2.addEventListener('focusout', () => {
        focusout = true;
        dropdownFull.style.top = ""+(-Math.round(dropdownstyle.height + 2))+"px";
        if(focusout == true){
            setTimeout(() => {
                if(focusout == true){
                    dropdownOverflow.style.display = "none";
                }
            }, 1000);
        } 
    });
});



var dropdownMenu3 = document.querySelector('.dropdown-menu-3');
var btnsblocks3 = dropdownMenu3.querySelectorAll('.btn-block3');

var focusout3 = false;

btnsblocks3.forEach(btnsblock3 => {
    const dropdownFull3 = btnsblock3.querySelector('.dropdown-full');
    const dropdownOverflow3 = btnsblock3.querySelector('.dropdown-overflow');

    var btn3 = btnsblock3.querySelector('.btn3');

    const dropdownstyle3 = dropdownFull3.getBoundingClientRect();
    dropdownFull3.style.top = ""+(-Math.round(dropdownstyle3.height + 2))+"px";
    btn3.addEventListener('focus', () => {
        dropdownOverflow3.style.display = "flex";
        setTimeout(() => {
            dropdownFull3.style.top = "0px";
        }, 10);
    });
    btn3.addEventListener('focusout', () => {
        dropdownFull3.style.top = ""+(-Math.round(dropdownstyle3.height + 2))+"px";
    });
    dropdownFull3.addEventListener('transitionend', () => {
        console.log(dropdownFull3.style.top);
        console.log(""+(-Math.round(dropdownstyle3.height + 2))+"px");
        if(dropdownFull3.style.top == ""+(-Math.round(dropdownstyle3.height + 2))+"px"){
            dropdownOverflow3.style.display = "none";
        }
    });
});