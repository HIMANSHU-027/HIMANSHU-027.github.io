
let close = document.getElementById("close")
let bar = document.querySelector('.nav-links');

function openBar(){
    bar.style.width = "100%";
}

function closeBar(){
    bar.style.width = "0";
}

let typed = new Typed(".auto-input", {
    strings: ["a graduate student", "Web Developer", "an indian", "a creative",
     "a brother,son and friend","a lover of Linux"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })