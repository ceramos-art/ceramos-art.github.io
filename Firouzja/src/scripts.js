const menuFunction = () => {
    elm = document.getElementById("myLinks");
    if (elm.classList.contains("hidden"))
        elm.classList.remove("hidden");
    else
        elm.classList.add("hidden");
}

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var maxScroll = document.body.scrollHeight - window.innerHeight;
    var percentageScrolled = (scrollPosition / maxScroll) * 100;
    var backgroundColor = 'rgb(' + percentageScrolled + '%, ' + percentageScrolled + '%, ' + percentageScrolled + '%)';
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.setProperty('--bg-color', backgroundColor);
  });