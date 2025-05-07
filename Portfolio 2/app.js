// All Elements

const titles = document.querySelectorAll(".titles a");
const AboutMeTexts = document.querySelector(".text");
const skillList = document.querySelector(".selectionSkills");
const experienceText = document.querySelector(".selectionExperience");
const educationList = document.querySelector(".selectionEducation");


titles.forEach(titles=>{
     titles.addEventListener("click", AboutMeClicked);
})

function AboutMeClicked(e){
     e.preventDefault();  // sayfa yenilenmesi engellendi

     // seçilen başlığa active verildi.
     titles.forEach(link=>link.classList.remove("active"));
     e.target.classList.add("active");

     // önce tüm içerikler gizleniyor
     skillList.style.display = "none";   
     experienceText.style.display = "none";
     educationList.style.display = "none";
     
     //yapılan tıklamaya göre görünüm sağlanıyor
     if(e.target.textContent == "Skills"){
         AboutMeTexts.children[0].style.display = "block";
     }  
     if(e.target.textContent == "Experience"){
          AboutMeTexts.children[1].style.display = "block";
     } 
     if(e.target.textContent == "Education"){
          AboutMeTexts.children[2].style.display = "block";
     } 
}


/*  *********************************************    */


const header = document.querySelector(".header");
const menuBar = document.querySelector(".menuBar");
const hamburgerHeader = document.querySelector(".hamburgerHeader");
const xMark = document.querySelector(".xMark");


menuBar.addEventListener("click", menuAc);
xMark.addEventListener("click", menuKapat);


if(window.innerWidth <= 768){  //  mobil boyutunda

  header.style.display = "none";   // mobil boyutta menü kaldırıld yenie hamburger menü getirilecek
  menuBar.style.display = "inline-block";
}

function menuAc(e){  // menuBar'a tıklanınca menu açılması

  e.preventDefault();

  menuBar.style.display = "none";  //menuBar görünümü kapatıldı
  hamburgerHeader.style.display = "inline-block";
}

function menuKapat(e){

  e.preventDefault();
  hamburgerHeader.style.display = "none";
  menuBar.style.display = "inline-block";
}