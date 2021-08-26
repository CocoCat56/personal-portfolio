// nav -- max-width:768px
let nav = document.querySelector("nav");
let nav_btn = document.querySelector(".nav_btn");
let mark = document.querySelector(".mark");
nav_btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    mark.classList.toggle("mark_show");
    nav_btn.classList.toggle("nav_btn_click");
});
//click nav li bg
let nav_li = nav.children[0].children;
for (let i = 0; i < nav_li.length; i++) {
    nav_li[i].addEventListener("click", function() {
        show(this);
    });
}
function show(index) {
    for ( let i = 0; i < nav_li.length; i++) {
        if (nav_li[i] == index) {
            if (index == 4) {
                nav_li[i].classList.remove("li_active");
            }
            nav_li[i].classList.add("li_active");
            nav.classList.toggle("open");
            mark.classList.toggle("mark_show");
        } else {
            nav_li[i].classList.remove("li_active");
        }
    }
}

//scroll nav li bg
let skills = document.querySelector("#skills");
let works = document.querySelector("#works");
let about = document.querySelector("#about");
let footer = document.querySelector("footer");
let skill_item = skills.children[0].children[1].children;
let work_item = works.children[0].children;
window.addEventListener("scroll", () => {
    let distance_y = window.pageYOffset;
    if(distance_y > (skills.offsetTop - 500) && distance_y < (works.offsetTop - 500)){
        nav_li[1].classList.add("li_active");
        //h2
        skills.children[0].children[0].classList.remove("visible");
        skills.children[0].children[0].classList.add("fade-in");
        //item
        for (let i = 0; i < skill_item.length; i++) {
            setTimeout(() => {
                skill_item[i].classList.remove("visible");
                skill_item[i].classList.add("fade-in");
            }, i*300);
        }
    } else {
        nav_li[1].classList.remove("li_active");
    }
    if(distance_y > (works.offsetTop - 500) && distance_y < (about.offsetTop - 500)){
        nav_li[2].classList.add("li_active");
        for (let i = 1; i < work_item.length; i++) {
            setTimeout(() => {
                work_item[i].classList.remove("visible");
                work_item[i].classList.add("fade-in");
            }, i*300);
        }
    } else {
        nav_li[2].classList.remove("li_active");
    }
    if(distance_y > (about.offsetTop - 500) && distance_y < (footer.offsetTop - 500)){
        nav_li[3].classList.add("li_active");
    } else {
        nav_li[3].classList.remove("li_active");
    }
});