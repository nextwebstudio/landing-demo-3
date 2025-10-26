// Sticky year
document.getElementById("year").textContent = new Date().getFullYear();

// Zoom gallery
function zoom(el){
  el.style.transform = "scale(1.15)";
  setTimeout(()=>el.style.transform="",500);
}

// Color switch
const colorImg = document.getElementById("color-img");
document.querySelectorAll(".color-chip").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelector(".color-chip.selected")?.classList.remove("selected");
    btn.classList.add("selected");
    colorImg.src = btn.dataset.img;
  });
});
