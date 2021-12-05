var myNavbar = document.getElementById("NavBar");
myNavbar.style.display = "none";

var mybutton = document.getElementById("upBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            $(".navbar").fadeIn();
        }else {
            $(".navbar").fadeOut();
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
        btncopy.classList.add("clicked")
        setTimeout(function(){
            btncopy.classList.remove("clicked")
            }, 1950);
        }
    }
    catch(err) {
        alert(err);
    }

    selection = window.getSelection();

    if (typeof selection.removeRange === 'function') {
        selection.removeRange(range);
    } else if (typeof selection.removeAllRanges === 'function') {
        selection.removeAllRanges();
    }
    }

    function getCookie(c_name) {
        return localStorage.getItem(c_name);
    }

    function setCookie(c_name, value, expiredays) {
        return localStorage.setItem(c_name, value);
    }