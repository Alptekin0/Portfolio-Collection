/*active nav-item*/

const item = document.querySelectorAll(".header >a");

item.forEach(element => {
     element.addEventListener("click", page => {

          item.forEach(element => {
               element.classList.remove("active");
          })

          page.target.classList.add("active");

     });
})

/* burger menü */

function toggleVisibility() {
    const bar = document.querySelector(".bar");
    const header = document.querySelector(".header");

    if (bar && header) {
        if (window.innerWidth < 768) {
            header.style.display = "none";
            bar.style.display = "block";
        } else {
            header.style.display = "block";
            bar.style.display = "none";
        }
    }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", toggleVisibility);

// Ekran boyutu değiştiğinde çalıştır
window.addEventListener("resize", toggleVisibility);


/* bar item */
const bar = document.querySelector(".bar");
const burger = document.querySelector(".burgerMenu");
const xMark = document.querySelector(".headerClose");
const header2 = document.querySelectorAll(".header2");

bar.addEventListener("click" , (e)=>{
     e.preventDefault();
     burger.style.display = "block";
});

xMark.addEventListener("click", (e)=>{
     e.preventDefault();
     burger.style.display = "none";

})

header2.forEach(element =>{
     element.addEventListener("click", ()=>{
          burger.style.display = "none";
     })
})