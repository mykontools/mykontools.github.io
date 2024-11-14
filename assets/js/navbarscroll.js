  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbartop").style.top = "0";
      $("#navbartop").fadeIn('5s');
    } else {
      document.getElementById("navbartop").style.top = "-100px";
      $("#navbartop").fadeOut("fast");
    }
    prevScrollpos = currentScrollPos;
  }
