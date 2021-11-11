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
    var btncopy = document.querySelector('.js-copy');
    if(btncopy) {
    btncopy.addEventListener('click', docopy);
    }

    function docopy() {
    var range = document.createRange();
    var target = this.dataset.target;
    var fromElement = document.querySelector(target);
    var selection = window.getSelection();

    range.selectNode(fromElement);
    selection.removeAllRanges();
    selection.addRange(range);

try {
    var result = document.execCommand('copy');
    if (result) {
    // La copie a réussi
    btncopy.classList.add("clicked")
    setTimeout(function(){
        btncopy.classList.remove("clicked")
        }, 1950);
    }
}
catch(err) {
    // Une erreur est surevnue lors de la tentative de copie
    alert(err);
}

selection = window.getSelection();

if (typeof selection.removeRange === 'function') {
    selection.removeRange(range);
} else if (typeof selection.removeAllRanges === 'function') {
    selection.removeAllRanges();
}
}
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}