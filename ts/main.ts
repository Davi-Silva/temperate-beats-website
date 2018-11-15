// RELEASES SECTION
let releaseAlbumCarousel: any = document.querySelectorAll(".releases-section .release-carousel");

releaseAlbumCarousel.forEach((carousel: any) => {
    let thumb: any = carousel.children[0];
    let albumName: string[] = ["", "", "", "", ""];
    let albumImg: string[] = ["", "", "", "", ""];
    for (let i = 0; i < 4; i++) {
        let clnThumb: any = thumb.cloneNode(true);
        carousel.appendChild(clnThumb);
    }

});

// Get the data from the 'Released Album Info' database with PHP and
// return it as a JSON file. Then get the JSON file data with typescript
// and display it on the 'release-album-container' class' children(img).

function getAlbumThumbnailInfo() {

}

// SHOP SECTION
let shopCarousel: any = document.querySelectorAll(".shop-section .shop-items-container");

shopCarousel.forEach((carousel: any) => {
    let thumb: any = carousel.children[0];
    let shopItemName: string[] = ["", "", "", "", ""];
    let shopItemImg: string[] = ["", "", "", "", ""];
    for(let i = 0; i < 4; i++) {
        let clnThumb: any = thumb.cloneNode(true);
        carousel.appendChild(clnThumb);
        
    }
});

function getShopThumbnailInfo() {

}
