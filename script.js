let content = document.querySelector(".container");
content.style.display = "none";
let loader = document.querySelector(".loader");
loader.style.display = "block";
setTimeout(() => {
  content.style.display = "block";
  loader.style.display = "none";
}, 2000);
function toggle(el) {
  if (el.classList.contains("show")) {
    document.querySelector(".__head").style.height = "15rem";
    document.querySelector(".head__links").style.display = "flex";
    document.querySelector(".head__links").style.margin = "1rem auto";
    document.querySelector("[data-list]").style.display = "block";
    [...document.querySelectorAll("[data-links]")].forEach((e)=>{
	e.style.margin = "auto";
	})
    	el.classList.remove("show")
}
else{
document.querySelector(".__head").style.height = "4rem";
    document.querySelector(".head__links").style.display = "none";
    document.querySelector("[data-list]").style.display = "flex";
    el.classList.add("show")
  }
}