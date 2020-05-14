function showMenu() {
    var mq = window.matchMedia("(max-width:600px)");
    if (mq.matches) {
        document.getElementById("navi").style.height = "150px";
    } else {
        document.getElementById("navi").style.height = "auto";
    }

    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "block";
    let x = document.querySelectorAll(".alinks");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}
function closeMenu() {
    document.getElementById("navi").style.height = "0";
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";
    let x = document.querySelectorAll(".alinks");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
window.addEventListener('load', (event) => {
    document.getElementById("navi").style.height = "0";
});