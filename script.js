const menu = document.getElementById("menu");
const navLinks = document.querySelectorAll('.nav-links'); 

const toggleMenu = (val) =>{
    if(val){
        menu.innerHTML = `<i class="ri-close-fill show" onclick="toggleMenu(false)"></i>`
        navLinks.forEach((link)=>{
            link.classList.toggle('show');
        })
    }
    else{
        menu.innerHTML = `<i class="ri-menu-3-line show" onclick="toggleMenu(true)" ></i>`
        navLinks.forEach((link)=>{
            link.classList.remove('show');
        })
    }

}