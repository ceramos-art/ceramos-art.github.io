const menuFunction = () => {
    elm = document.getElementById("myLinks");
    if (elm.classList.contains("hidden"))
        elm.classList.remove("hidden");
    else
        elm.classList.add("hidden");
}

// Function to change bg-color by scrolling -----------

// window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
//     var maxScroll = document.body.scrollHeight - window.innerHeight;
//     var pcScrolled = (scrollPosition / maxScroll);
    
//     const color1 = [0,38,51];
//     const color2 = [0,26,51];
//     const color3 = [ Math.round(pcScrolled*color1[0]+(1-pcScrolled)*color2[0]) ,
//         Math.round(pcScrolled*color1[1]+(1-pcScrolled)*color2[1]),
//         Math.round(pcScrolled*color1[2]+(1-pcScrolled)*color2[2])];
//     var backgroundColor = 'rgb('+color3[0]+','+color3[1]+','+color3[2]+')';

//     document.body.style.backgroundColor = backgroundColor;
//     document.body.style.setProperty('--bg-color', backgroundColor);
//   });