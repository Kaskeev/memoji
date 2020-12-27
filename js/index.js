const grid = document.querySelector(".grid");

grid.addEventListener("click",  (event) => {
    event.target.classList.toggle("open")
    console.log(event.target)
})