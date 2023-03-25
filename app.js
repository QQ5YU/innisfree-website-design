let header = document.querySelector("header");
let headerImg = document.getElementById("logoImg");
let headerLi = document.querySelectorAll("header nav ul li");



window.addEventListener("scroll", e => {
    if(window.pageYOffset != 0){
        header.style.backgroundColor = "#094438";
        headerImg.src = "./imgs/logo_foot.png";
        headerLi.forEach( li => {
            li.style.color = "#ffffff";
        })
    } else {
        header.style = "";
        headerImg.src = "./imgs/logo.png";
        headerLi.forEach( li => {
            li.style.color = "#094438";
        })
    }
})