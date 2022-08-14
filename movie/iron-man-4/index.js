const videoSource = document.getElementById("videoSource");
const videoSourceMenu = document.getElementById("video-source-menu");
const shareDropdown = document.getElementById("shareDropdown");
const dropdownShare = document.getElementById("dropdown-share");
const commentSortDropdown = document.getElementById("comment-sort-dropdown");
const iframeEmbed = document.getElementById("iframe-embed");
const actorsMore = document.getElementsByClassName("toggle");
const actorsMoreBtn = document.getElementById("actors-more-btn");


window.addEventListener('click', function (event) {
    var isClickInsideShare = shareDropdown.contains(event.target);
    var isClickInsideVideoSource = videoSource.contains(event.target);
    if (!isClickInsideShare) {
        dropdownShare.style.display = "none"
    }
    if (!isClickInsideVideoSource) {
        videoSourceMenu.style.display = "none"
    }
});


function videoSourceToggle() {
    dropdownShare.style.display = "none";
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
    videoSourceMenu.style.display = "none";
    toggle(dropdownShare, "flex")
}

function commentSortDropdownToggle() {
    toggle(commentSortDropdown, "block")
}
function showMore() {
    if (actorsMoreBtn.innerHTML == "Show more") {
        actorsMoreBtn.innerHTML = "Show Less";
    } else {
        actorsMoreBtn.innerHTML = "Show more";
    }
    for (let i = 0; i < actorsMore.length; i++) {
        const actor = actorsMore[i];
        toggle(actor, "block")
    }
}