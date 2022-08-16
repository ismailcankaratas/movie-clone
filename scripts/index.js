// Mobil
const mobilMenu = document.getElementById("mobil-menu");
const mobilSearch = document.getElementById("mobil-search");
const mobilsearchInput = document.getElementById("mobil-search-input");
const scrollUp = document.getElementById("scroll-up");
const adsClose = document.getElementById("ads-close");

// Header Search
const headerSearch = document.getElementById("header-search");
const searchField = document.getElementById("search-field");
const searchInput = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");
const typeaheadBackdrop = document.getElementById("typeahead-backdrop");

// Modals
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const collectionsModal = document.getElementById("collections-modal");
const trailerModal = document.getElementById("trailer-modal");
const reportModal = document.getElementById("report-modal");
const bookmarkModal = document.getElementById("bookmark-modal");
const settingsModal = document.getElementById("settings-modal");

// Dropdawns
const authProfile = document.getElementById("auth-profile");
const authLinks = document.getElementById("auth-links");
const mobilAuthLinks = document.getElementById("mobil-auth-links");
const mobilAuthProfile = document.getElementById("mobil-auth-profile");
const dropdownNotification = document.getElementById("dropdown-notification");
const dropdownPofile = document.getElementById("dropdown-profile");
const mobilDropdownProfile = document.getElementById("mobil-dropdown-profile");
const notificationBtn = document.getElementById("notification-btn");

// Tabs
const tabGeneral = document.getElementById("tab-general");
const navGeneral = document.getElementById("general-nav");
const tabCollections = document.getElementById("tab-collections");
const navCollections = document.getElementById("collections-nav");
const tabDiscussions = document.getElementById("tab-discussions");
const navDiscussions = document.getElementById("discussions-nav");
const tabFollowing = document.getElementById("tab-following");
const navFollowing = document.getElementById("following-nav");

const imageInputCover = document.getElementById("input-cover");
const fileInputCover = document.getElementById("file-input-cover");
const mediaImage = document.getElementById("media-image");
const mediaRemove = document.getElementById("media-remove");

window.addEventListener('click', function (event) {
    var isClickInsideProfile = authProfile.contains(event.target);
    var isClickInsideNotification = notificationBtn.contains(event.target);
    if (!isClickInsideProfile) {
        dropdownPofile.style.display = "none"
    }
    if (!isClickInsideNotification) {
        dropdownNotification.style.display = "none"
    }
});

imageInputCover.addEventListener('click', function () {
    fileInputCover.click();
})

fileInputCover.addEventListener('change', function () {
    const file = this.files[0];
    if (file.name.match(/\.jpe?g|png|gif/)) {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            console.log(this.result);
            mediaImage.src = this.result;
        });
        reader.readAsDataURL(file);
    }
})

mediaRemove.addEventListener('click', function () {
    mediaImage.src = " ";
})

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

// Modals Toggle
function loginModalToggle() {
    toggle(loginModal, "flex")
}
function registerModalToggle() {
    toggle(registerModal, "flex")
}
function collectionsModalToggle() {
    toggle(collectionsModal, "flex")
}
function trailerModalToggle() {
    toggle(trailerModal, "flex")
}
function reportModalToggle() {
    toggle(reportModal, "flex")
}

function bookmarkModalToggle() {
    toggle(bookmarkModal, "flex")
}
function settingsModalToggle() {
    toggle(settingsModal, "flex")
}

function bookmarkTab(tabName) {
    if (tabName == "general") {
        tabGeneral.classList.add("active");
        navGeneral.classList.add("active");

        tabCollections.classList.remove("active");
        navCollections.classList.remove("active");
        tabDiscussions.classList.remove("active");
        navDiscussions.classList.remove("active");
        tabFollowing.classList.remove("active");
        navFollowing.classList.remove("active");
    }

    if (tabName == "collections") {
        tabCollections.classList.add("active");
        navCollections.classList.add("active");

        tabGeneral.classList.remove("active");
        navGeneral.classList.remove("active");
        tabDiscussions.classList.remove("active");
        navDiscussions.classList.remove("active");
        tabFollowing.classList.remove("active");
        navFollowing.classList.remove("active");
    }

    if (tabName == "discussions") {
        tabDiscussions.classList.add("active");
        navDiscussions.classList.add("active");

        tabGeneral.classList.remove("active");
        navGeneral.classList.remove("active");
        tabCollections.classList.remove("active");
        navCollections.classList.remove("active");
        tabFollowing.classList.remove("active");
        navFollowing.classList.remove("active");
    }

    if (tabName == "following") {
        tabFollowing.classList.add("active");
        navFollowing.classList.add("active");

        tabGeneral.classList.remove("active");
        navGeneral.classList.remove("active");
        tabCollections.classList.remove("active");
        navCollections.classList.remove("active");
        tabDiscussions.classList.remove("active");
        navDiscussions.classList.remove("active");
    }
}

// Dropdawns Toggle
function notificationToggle() {
    dropdownPofile.style.display = "none";
    toggle(dropdownNotification, "block")
}

function profileToggle() {
    dropdownNotification.style.display = "none";
    toggle(dropdownPofile, "flex")
}
function mobilDropdownProfileToggle() {
    dropdownNotification.style.display = "none";
    toggle(mobilDropdownProfile, "flex")
}

function toggle(element, display) {
    if (element.style.display == "none") {
        element.style.display = display;
    } else {
        element.style.display = "none";
    }
}
