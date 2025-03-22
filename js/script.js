// // const navbar = document.getElementsByClassName("navbar");
// const navbar = document.querySelector('navbar');
// const page = document.getElementById("page")

// // window.onscroll = () => {
// //     if (window.scrollY > 20) {
// //         navbar.classList.add('scroll');
// //     }
// //     else {
// //         navbar.classList.remove('scroll');
// //     }
// // }
 let navbar = document.getElementById("navbar");
window.addEventListener('scroll', () => {
    console.log(navbar);
    
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    }
    else {
        navbar.classList.remove("scrolled");
    }
})
