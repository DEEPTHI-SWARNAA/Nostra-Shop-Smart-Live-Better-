var sidenav = document.querySelector(".side-navbar");


function showNavbar(){
    sidenav.style.left = "0";   // slide in
}
function closeNavbar(){
    sidenav.style.left = "-60%"; // slide out
}