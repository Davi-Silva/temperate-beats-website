// REMINDER: CREATE HTML ELEMENT VIA TYPESCRIPT
// RELEASES SECTION
var albumContainer = document.createElement('div');
var aAlbum = document.createElement('a');
var imgAlbum = document.createElement('img');
// Set albumContainer attributes
albumContainer.className = "release-album-container";
albumContainer.style.width = "217px";
albumContainer.style.height = "217px";
albumContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
// Set aAlbum attributes
aAlbum.id = "album-cover";
aAlbum.href = "#";
// Set imgAlbum attributes
imgAlbum.src = "./img/album-cover-1.jpg";
aAlbum.appendChild(imgAlbum);
albumContainer.appendChild(aAlbum);
// releaseAlbumCarousel[0].appendChild(albumContainer);
// Set thumbnail attributes 
function setThumbnailAttibutes(albumContainer, width, height, red, green, blue, alpha, borderRadius) {
    if (width > 0 && height > 0) {
        if (red >= 0 && green >= 0 && blue >= 0) {
            if (borderRadius >= 0) {
                albumContainer.style.width = "" + width;
                albumContainer.style.height = "" + height;
                albumContainer.style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ");";
                albumContainer.style.borderRadius = borderRadius + "px";
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
// Fill Carousel
function fillCarousel(carouselId) {
    var releaseAlbumCarousel = document.querySelectorAll(".releases-section #" + carouselId);
    releaseAlbumCarousel.forEach(function (carousel) {
        for (var i = 0; i < 5; i++) {
            var cloneAlbumContainer = albumContainer.cloneNode(true);
            carousel.appendChild(cloneAlbumContainer);
        }
    });
}
albumContainer = setThumbnailAttibutes(albumContainer, 217, 217, 0, 0, 0, 0.5, 5);
fillCarousel("week-carousel");
// SHOP SECTION
var shopCarousel = document.querySelectorAll(".shop-section .shop-items-container");
shopCarousel.forEach(function (carousel) {
    var thumb = carousel.children[0];
    var shopItemName = ["", "", "", "", ""];
    var shopItemImg = ["", "", "", "", ""];
    for (var i = 0; i < 4; i++) {
        var clnThumb = thumb.cloneNode(true);
        carousel.appendChild(clnThumb);
    }
});
function getShopThumbnailInfo() {
}
// releaseAlbumCarousel.forEach((carousel: any) => {
//     let thumb: any = carousel.children[0];
//     let albumAlt: string[] = ["", "", "", "", ""];
//     let albumImg: string[] = ["album-cover-0.jpg", "album-cover-1.jpg", "album-cover-2.jpg", "album-cover-3.jpg", "album-cover-4.jpg"];
//     for (let i = 0; i < 4; i++) {
//         let clnThumb: any = thumb.cloneNode(true);
//         let clnThumbImg = clnThumb.children;
//         clnThumbImg[0].src = `./img/${albumImg[i]}`;
//         carousel.appendChild(clnThumb);
//     }
// });
// Get the data from the 'Released Album Info' database with PHP and
// return it as a JSON file. Then get the JSON file data with typescript
// and display it on the 'release-album-container' class' children(img).
