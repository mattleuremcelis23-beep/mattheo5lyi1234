const openVideoButton = document.getElementById("open-video");

function openVideo() {
    const popupWidth = screen.availWidth;
    const popupHeight = screen.availHeight;

    window.open(
        "video.html",
        "videoPopup",
        `width=${popupWidth},height=${popupHeight},left=0,top=0,resizable=yes,scrollbars=no`
    );
}

openVideoButton.addEventListener("click", openVideo);
