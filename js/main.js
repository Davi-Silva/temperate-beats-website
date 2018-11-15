// RELEASES SECTION
var releaseAlbumCarousel = document.querySelectorAll(".releases-section .release-carousel");
var releaseAlbumImg = document.querySelectorAll(".releases-section .release-carousel img");
// REMINDER: CREATE HTML ELEMENT VIA TYPESCRIPT
releaseAlbumCarousel.forEach(function (carousel) {
    var thumb = carousel.children[0];
    var albumAlt = ["", "", "", "", ""];
    var albumImg = ["album-cover-0.jpg", "album-cover-1.jpg", "album-cover-2.jpg", "album-cover-3.jpg", "album-cover-4.jpg"];
    for (var i = 0; i < 4; i++) {
        var clnThumb = thumb.cloneNode(true);
        var clnThumbImg = clnThumb.children;
        clnThumbImg[0].src = "./img/" + albumImg[i];
        carousel.appendChild(clnThumb);
    }
});
// Get the data from the 'Released Album Info' database with PHP and
// return it as a JSON file. Then get the JSON file data with typescript
// and display it on the 'release-album-container' class' children(img).
function getAlbumThumbnailInfo() {
}
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
