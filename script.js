var mybutton = document.getElementById("upBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function upFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

setTimeout(function(){
    document.getElementById("navbar").removeAttribute('style');
    document.getElementById("scrolldown").removeAttribute('style');
    document.getElementById("showcontent").removeAttribute('style');
  }, 3000);