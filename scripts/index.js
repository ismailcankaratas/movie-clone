const mobilMenu = document.getElementById("mobil-menu");
const mobilSearch = document.getElementById("mobil-search");
const searchInput = document.getElementById("search-input");
const scrollUp = document.getElementById("scroll-up");

window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
        scrollUp.style.display = "block"
    } else {
        scrollUp.style.display = "none"
    }
})

function menuOpen() {
    mobilMenu.style.display = "block";
}

function menuClose() {
    mobilMenu.style.display = "none";
}

function searchOpen() {
    mobilSearch.style.display = "flex";
    searchInput.focus();
}

function searchClose() {
    mobilSearch.style.display = "none";
}
