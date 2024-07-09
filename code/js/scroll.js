//scroll
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
});

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});
