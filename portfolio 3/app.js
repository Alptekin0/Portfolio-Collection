/*! menü göster */

const menuButton = document.querySelector("#menuButton");
const carpi = document.querySelector("#x-mark");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", menuClicked);
carpi.addEventListener("click", carpiClicked);


function menuClicked(e){
     e.preventDefault();
     menu.style.display = "flex";
}

function carpiClicked(e){
     e.preventDefault();
     menu.style.display = "none";
}


/* animasyon scroll kaydıkça göstersin */ 

const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const animationName = entry.target.dataset.animation;
         entry.target.classList.add(animationName);
         observer.unobserve(entry.target); // animasyon bir kere çalışsın
       }
     });
   });
   
   const elements = document.querySelectorAll('.animate-on-scroll');
   elements.forEach(element => {
     observer.observe(element);
   });

   

   /*let isFooterVisible = false;
   let lastScrollPosition = 0;
   
   document.addEventListener("scroll", function() {
     const footer = document.querySelector("footer");
     const currentScroll = window.scrollY + window.innerHeight;
     const scrollHeight = document.documentElement.scrollHeight;
     const scrollDirection = window.scrollY > lastScrollPosition ? "down" : "up";
     
     // Scroll yönünü takip et
     lastScrollPosition = window.scrollY;
   
     // 1. En altı geçme kontrolü (5px tolerans)
     const isOverBottom = currentScroll >= scrollHeight - 5;
     
     // 2. Scroll aşağı yönlüyse ve en alt geçildiyse
     if (scrollDirection === "down" && isOverBottom) {
       if (!isFooterVisible) {
         footer.style.display = "block";
         isFooterVisible = true;
       }
     } else if (scrollDirection === "up" && isFooterVisible) {
       footer.style.display = "none";
       isFooterVisible = false;
     }
   });*/
