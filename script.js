function windowScroll() {
    const navbar = document.getElementById("nav-sticky");
    if (navbar) {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener("scroll", (event) => {
    event.preventDefault();
    windowScroll();
});
///

