const display_text = document.getElementById("display_text")
const home = document.querySelector(".home")
const about = document.querySelector(".about")
const contact = document.querySelector(".contact")

function changeText(text) {
    display_text.innerHTML = text;

}
contact.addEventListener("click", function(event){
    event.preventDefault();
    changeText("Contact");
})
home.addEventListener("click", function(event){
    event.preventDefault();
    changeText("Home");
})
about.addEventListener("click", function (event){
    event.preventDefault();
    changeText("About");
})


