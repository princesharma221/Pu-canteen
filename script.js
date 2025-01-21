const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80)
})



document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("menu-icon");
    const menu = document.getElementById("navlist");
  
    toggleButton.addEventListener("click", () => {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        // toggleButton.textContent = "Hide Menu";
      } else {
        menu.style.display = "none";
        // toggleButton.textContent = "Show Menu";
      }
    });
  });
  