const grid = document.querySelector(".grid");

const gridItemsArray = document.querySelectorAll(".grid-item")

let opennedAnimals = []

grid.addEventListener("click",  (event) => {
    if(!event.target.classList.contains("grid")){
        event.target.classList.toggle("open")
        opennedAnimals.push(event.target)
    if(event.target.classList.contains("open")){
        event.target.classList.add(event.target.getAttribute("name"))

    if(opennedAnimals[0].getAttribute("name") ===  opennedAnimals[1].getAttribute("name")){
        console.log("same")
    }else{
        console.log("notsame")
    }
    }   
    }
})


const animals = ["first", "second", "third", 'four', "five", 'six', "seven", "eight"]

function shuffleAnimals () {
    return animals.sort(() => Math.random() - 0.5)
}
shuffleAnimals()


gridItemsArray.forEach((item, index) => {
    item.setAttribute("name", animals[index])
})

