const mobilMenu = document.getElementById("mobil-menu");
const mobilSearch = document.getElementById("mobil-search");
const mobilsearchInput = document.getElementById("mobil-search-input");
const scrollUp = document.getElementById("scroll-up");

const headerSearch = document.getElementById("header-search");
const searchField = document.getElementById("search-field");
const searchInput = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");

const typeaheadBackdrop = document.getElementById("typeahead-backdrop");

window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
        scrollUp.style.display = "block"
    } else {
        scrollUp.style.display = "none"
    }
})

typeaheadBackdrop.addEventListener('click', function () {
    typeaheadBackdrop.style.display = "none";
    searchResult.style.display = "none"
    searchField.style.backgroundColor = "var(--color-bg-variant)";
    searchInput.style.backgroundColor = "var(--color-bg-variant)";
    searchInput.style.color = "var(--color-light)"

    if (window.screen.width <= 992) {
        headerSearch.style.display = "none"
    }

})

function search(value) {
    if (value.length >= 3) {
        searchResult.innerHTML = `
        <ul>
            <li>"${value}" no results</li>
        </ul>
        `;
        if (window.screen.width <= 992) {
            headerSearch.style.display = "block"
            searchInput.value = value;
        }

        searchField.style.zIndex = "1041";
        searchField.style.backgroundColor = "white";

        searchInput.style.backgroundColor = "white";
        searchInput.style.color = "black"

        searchResult.style.zIndex = "1041";
        searchResult.style.display = "block"
        searchResult.style.position = "relative"

        typeaheadBackdrop.style.display = "block";
        typeaheadBackdrop.style.opacity = "0.7";
        typeaheadBackdrop.style.position = "fixed";
        typeaheadBackdrop.style.zIndex = "1040";
        typeaheadBackdrop.style.inset = "0px";
        typeaheadBackdrop.style.backgroundColor = "rgb(0, 0, 0)";



    }
}

function menuOpen() {
    mobilMenu.style.display = "block";
}

function menuClose() {
    mobilMenu.style.display = "none";
}

function searchOpen() {
    console.log(1);
    mobilSearch.style.display = "flex";
    mobilsearchInput.focus();
}

function searchClose() {
    mobilSearch.style.display = "none";
}
