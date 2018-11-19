var carouselWeek = document.querySelector("#week-carousel");
var carouselMonth = document.querySelector("#month-carousel");
var carouselYear = document.querySelector("#year-carousel");
fillCarousel(carouselWeek);
fillCarousel(carouselMonth);
fillCarousel(carouselYear);
// Create HTML element
function createHTMLElement(elementType, classNameId, href, src) {
    var element = document.createElement("" + elementType);
    if (elementType == "a") {
        element.href = "" + href;
    }
    else if (elementType == "img") {
        element.src = "./img/album-cover-" + src + ".jpg";
    }
    if (classNameId.substring(0, 1) == ".") {
        element.className = "" + classNameId;
    }
    else if (classNameId.substring(0, 1) == "#") {
        element.id = "" + classNameId;
    }
    else if (classNameId == "") {
        return element;
    }
    return element;
}
// Set thumbnail attributes
function setThumbnailAttibutes(albumContainer, width, height, red, green, blue, alpha, borderRadius, marginTopBottom, marginRightLeft) {
    if (width > 0 && height > 0) {
        if (red >= 0 && green >= 0 && blue >= 0) {
            if (borderRadius >= 0) {
                albumContainer.style.width = width + "px";
                albumContainer.style.height = height + "px";
                albumContainer.style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
                albumContainer.style.borderRadius = borderRadius + "%";
                albumContainer.style.margin = marginTopBottom + "px " + marginRightLeft + "px";
                albumContainer.style.display = "inline-block";
            }
            else {
                return;
            }
        }
        else {
            return;
        }
    }
    else {
        return;
    }
    return albumContainer;
}
// Create a new individual album container
function createNewAlbumContainer(imgAlbumCoverSrc) {
    // Create each individual element container
    var albumContainer = createHTMLElement("div", ".release-abum-container", "", imgAlbumCoverSrc);
    var aAlbumCover = createHTMLElement("a", "#album-cover", "#", imgAlbumCoverSrc);
    var imgAlbumCover = createHTMLElement('img', "#album-cover", "", imgAlbumCoverSrc);
    // Set the thumbnail attributes
    imgAlbumCover = setThumbnailAttibutes(imgAlbumCover, 217, 217, 0, 0, 0, 0.5, 3, 0, 0);
    albumContainer = setThumbnailAttibutes(albumContainer, 217, 217, 0, 0, 0, 0.5, 3, 0, 2);
    // Append 'img' into 'a'
    aAlbumCover.appendChild(imgAlbumCover);
    albumContainer.appendChild(aAlbumCover);
    return albumContainer;
}
// Get the album image cover from the databases
function getAlbumImageCover() {
}
// Fill the carousel with each album container
function fillCarousel(carouselId) {
    var releaseAlbumCarousel = document.querySelectorAll(".releases-section #" + carouselId.id);
    releaseAlbumCarousel.forEach(function (carousel) {
        for (var i = 0; i < 5; i++) {
            var newAlbumContainer = createNewAlbumContainer(i);
            carousel.appendChild(newAlbumContainer);
        }
    });
    console.log(releaseAlbumCarousel);
}
