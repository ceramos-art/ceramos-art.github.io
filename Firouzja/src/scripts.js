const menuFunction = () => {
    elm = document.getElementById("myLinks");
    if (elm.classList.contains("hidden"))
        elm.classList.remove("hidden");
    else
        elm.classList.add("hidden");
}