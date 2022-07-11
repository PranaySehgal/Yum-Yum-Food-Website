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
    document.querySelector(".head__links").style.display = "block";
    document.querySelector(".head__links").style.margin = "1rem auto";
    document.querySelector("[data-list]").style.display = "block";
    document.querySelector("[data-links]").style.margin = "auto";
    el.classList.remove("show")
}
else{
    document.querySelector(".head__links").style.display = "none";
    document.querySelector("[data-list]").style.display = "flex";
    el.classList.add("show")
  }
}