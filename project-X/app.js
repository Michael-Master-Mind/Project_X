
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;

    
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
})

var pro_btn = document.getElementById('pro_btn');
var plan_btn = document.getElementById('plan_btn');
var setting_btn = document.getElementById('setting_btn');
var profile_container_ = document.getElementById('profile_container_');
var profile_container_x = document.getElementById('profile_container_x');
var profile_container_y = document.getElementById('profile_container_y');
  pro_btn.addEventListener('click', () => {
    profile_container_.style.display='block';
    profile_container_x.style.display='none';
    profile_container_y.style.display='none';
  });
  plan_btn.addEventListener('click', () => {
    profile_container_.style.display='none';
    profile_container_x.style.display='block';
    profile_container_y.style.display='none';
  });
  setting_btn.addEventListener('click', () => {
    profile_container_.style.display='none';
    profile_container_x.style.display='none';
    profile_container_y.style.display='block';
  });

// let dropDown=document.getElementsByClassName("custom-options")[0];
// let isOpen = false;

// function openDropDown(){
//   isOpen = !isOpen;
//   if(isOpen){
//     dropDown.setAttribute('class', 'custom-options dropdown-open');
//   }else{
//     dropDown.setAttribute('class', 'custom-options dropdown-close');
//   }
// }