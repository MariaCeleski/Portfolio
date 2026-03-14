// MENU HAMBURGER

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}


// SCROLL ANIMATION

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(section=>{
  section.classList.add("hidden");
  observer.observe(section);
});


// TYPING EFFECT

const texts = [
"Desenvolvedora FullStack",
"Especialista em React",
"Criadora de Apps Mobile",
"Desenvolvedora TypeScript"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typing(){

const element = document.getElementById("typing");
const currentText = texts[textIndex];

if(!isDeleting){

element.innerHTML = currentText.substring(0, charIndex + 1);
charIndex++;

if(charIndex === currentText.length){
isDeleting = true;
setTimeout(typing,1500);
return;
}

}else{

element.innerHTML = currentText.substring(0, charIndex - 1);
charIndex--;

if(charIndex === 0){
isDeleting = false;
textIndex++;

if(textIndex === texts.length){
textIndex = 0;
}

}

}

setTimeout(typing, isDeleting ? 40 : 80);

}

typing();


// FORM VALIDATION

const form = document.getElementById("formContato");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();

if(nome === "" || email === ""){
alert("Preencha os campos obrigatórios");
return;
}

alert("Mensagem enviada com sucesso!");

form.reset();

});

}

// 3D CARD EFFECT

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove", (e) => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 12;
const rotateY = (centerX - x) / 12;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave", () => {

card.style.transform = "rotateX(0) rotateY(0)";

});

});


// PARTICLES BACKGROUND

particlesJS("particles-js", {

particles: {

number: { value: 80 },

color: { value: "#38bdf8" },

shape: { type: "circle" },

opacity: { value: 0.5 },

size: { value: 3 },

move: {
enable: true,
speed: 2
},

line_linked: {
enable: true,
distance: 150,
color: "#38bdf8",
opacity: 0.3,
width: 1
}

}

});