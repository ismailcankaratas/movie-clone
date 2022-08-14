const mobilMenu = document.getElementById("mobil-menu");
const mobilSearch = document.getElementById("mobil-search");
const mobilsearchInput = document.getElementById("mobil-search-input");
const scrollUp = document.getElementById("scroll-up");
const adsClose = document.getElementById("ads-close");

const headerSearch = document.getElementById("header-search");
const searchField = document.getElementById("search-field");
const searchInput = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");

const typeaheadBackdrop = document.getElementById("typeahead-backdrop");

const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const authProfile = document.getElementById("auth-profile");
const authLinks = document.getElementById("auth-links");
const mobilAuthLinks = document.getElementById("mobil-auth-links");
const mobilAuthProfile = document.getElementById("mobil-auth-profile");

const dropdownNotification = document.getElementById("dropdown-notification");
const dropdownPofile = document.getElementById("dropdown-profile");


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


function adsCloseToggle() {
    adsClose.classList.remove("show");
}
function search(value) {
    if (value.length >= 3) {
        searchInput.focus();
        if (value.indexOf("iron") == 0) {
            searchResult.innerHTML = `
            <ul class="typeahead-list">
            <li class="typeahead-group">
                <a>Results</a>
            </li>
            <li class="typeahead-item typeahead-group-results">
                <a href="movie/iron-man-4">
                    <div class="movie">
                        <div class="media">
                            <img src="https://demo.codelug.com/wovie/public/upload/cover/iron-man.webp"
                                alt="">
                        </div>
                        <div class="movie-caption">
                            <div class="name"><strong>Iron</strong> Man</div>
                            <div class="category">Movie</div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
            `;
        } else {
            searchResult.innerHTML = `
            <ul>
                <li>"${value}" no results</li>
            </ul>
            `;
        }

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
    mobilSearch.style.display = "flex";
    mobilsearchInput.focus();
}

function searchClose() {
    mobilSearch.style.display = "none";
}

function loginModalToggle() {
    toggle(loginModal, "flex")
}
function registerModalToggle() {
    toggle(registerModal, "flex")
}


function auth() {
    loginModal.style.display = "none";

    authLinks.style.display = "none";
    mobilAuthLinks.style.display = "none";

    authProfile.style.display = "flex";
    mobilAuthProfile.style.display = "flex";
}

function notificationToggle() {
    toggle(dropdownNotification, "block")
}

function profileToggle() {
    toggle(dropdownPofile, "flex")
}

function toggle(element, display) {
    if (element.style.display == "none") {
        element.style.display = display;
    } else {
        element.style.display = "none";
    }
}
