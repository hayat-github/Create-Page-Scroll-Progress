
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {

    let scrolltop = document.documentElement.scrollTop;
    el.style.width = ` ${(scrolltop / height) * 100}% `;;

})
