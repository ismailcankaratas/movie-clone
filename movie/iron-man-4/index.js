const videoSource = document.getElementById("videoSource");
const videoSourceMenu = document.getElementById("video-source-menu");
const shareDropdown = document.getElementById("shareDropdown");
const dropdownShare = document.getElementById("dropdown-share");
const commentSortDropdown = document.getElementById("comment-sort-dropdown");

function videoSourceToggle() {
    toggle(videoSourceMenu, "block")
}

function vieoSourceSelect(value) {
    const { name, embed } = value;
    if (name && embed) {
        console.log(value);
        videoSource.innerHTML =
            `
        Source : <span>${name}</span>
        `;
        videoSourceMenu.style.display = "none";
    }
}

function shareDropdownToggle() {
    toggle(dropdownShare, "flex")
}

function commentSortDropdownToggle() {
    toggle(commentSortDropdown, "block")
}

function toggle(element, display) {
    if (element.style.display == "none") {
        element.style.display = display;
    } else {
        element.style.display = "none";
    }
}