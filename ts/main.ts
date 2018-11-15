// RELEASES SECTION
let releaseAlbumCarousel: any = document.querySelectorAll(".releases-section .release-carousel");
let releaseAlbumImg: any = document.querySelectorAll(".releases-section .release-carousel img");

// REMINDER: CREATE HTML ELEMENT VIA TYPESCRIPT


releaseAlbumCarousel.forEach((carousel: any) => {
    let thumb: any = carousel.children[0];
    let albumAlt: string[] = ["", "", "", "", ""];
    let albumImg: string[] = ["album-cover-0.jpg", "album-cover-1.jpg", "album-cover-2.jpg", "album-cover-3.jpg", "album-cover-4.jpg"];
    for (let i = 0; i < 4; i++) {
        let clnThumb: any = thumb.cloneNode(true);
        let clnThumbImg = clnThumb.children;
        clnThumbImg[0].src = `./img/${albumImg[i]}`;

        
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
