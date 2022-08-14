const videoSource = document.getElementById("videoSource");
const videoSourceMenu = document.getElementById("video-source-menu");
const shareDropdown = document.getElementById("shareDropdown");
const dropdownShare = document.getElementById("dropdown-share");
const commentSortDropdown = document.getElementById("comment-sort-dropdown");
const iframeEmbed = document.getElementById("iframe-embed");

function videoSourceToggle() {
    toggle(videoSourceMenu, "block")
}

function vieoSourceSelect(value) {
    const { name, iframe } = value;
    if (name && iframe) {
        console.log(value);
        videoSource.innerHTML =
            `
        Source : <span>${name}</span>
        `;
        videoSourceMenu.style.display = "none";
        iframeEmbed.innerHTML =
            `
        <iframe
        src="${iframe}"
        data-src="${iframe}"
        frameborder="0" scrolling="no" allow="autoplay; encrypted-media"
        allowfullscreen="">
        </iframe>
        `;
    }
}

function shareDropdownToggle() {
    toggle(dropdownShare, "flex")
}

function commentSortDropdownToggle() {
    toggle(commentSortDropdown, "block")
}