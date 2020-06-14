
const selectElement = (element) => {
    return document.querySelector(element);
}   

let menuToggle = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggle.addEventListener("click", ()=>{
    body.classList.toggle('open');
});