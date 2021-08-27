const profileTop = document.querySelector(".profile-1");
const profileBottom = document.querySelector(".profile-2");
const intro = document.querySelector(".intro");
const icons = document.querySelector(".social-icons");

function display(x) {
    if(x.matches) {
        profileTop.style.display = "block";
        profileBottom.style.display = "none";
        intro.style.textAlign = "center";
        icons.style.justifyContent = "center"
    }
    else {
        profileTop.style.display = "none";
        profileBottom.style.display = "block";
    }
}

let x = window.matchMedia("(max-width: 826px)");
display(x);
x.addListener(display);

