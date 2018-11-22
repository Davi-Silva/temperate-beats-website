var shopItemCarousel = document.querySelectorAll(".shop-carousel");
console.log(shopItemCarousel);
var j = 0;
shopFillCarousel(shopItemCarousel[0]);
// shopItemCarousel.forEach((carousel) => {
//   shopFillCarousel(carousel);
// });
function shopCreateHTMLElement(elementType, classNameId, href, src) {
    var element = document.createElement("" + elementType);
    if (elementType == "a") {
        element.href = "" + href;
    }
    else if (elementType == "img") {
        this.getAlbumImageCoverFromDB();
        element.src = "./img/releases-album-cover/album-cover-" + src + ".jpg";
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
function shopSetThumbnailAttibutes(shopItemContainer, width, height, red, green, blue, alpha, marginTopBottom, marginRightLeft) {
    if (width > 0 && height > 0) {
        if (red >= 0 && green >= 0 && blue >= 0) {
            shopItemContainer.style.width = width + "px";
            shopItemContainer.style.height = height + "px";
            shopItemContainer.style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
            shopItemContainer.style.margin = marginTopBottom + "px " + marginRightLeft + "px";
            shopItemContainer.style.display = "inline-block";
        }
        else {
            return;
        }
    }
    else {
        return;
    }
    return shopItemContainer;
}
// Create a new individual album container
function shopCreateNewAlbumContainer(imgShopItemSrc) {
    // Create each individual element container
    var shopItemContainer = shopCreateHTMLElement("div", ".shop-item", "", imgShopItemSrc);
    var aShopItem = shopCreateHTMLElement("a", "#album-cover-" + imgShopItemSrc, "#", imgShopItemSrc);
    var imgShopItem = shopCreateHTMLElement("img", "", "", imgShopItemSrc);
    // Set the thumbnail attributes
    imgShopItem = shopSetThumbnailAttibutes(imgShopItem, 217, 217, 0, 0, 0, 0.5, 0, 0);
    shopItemContainer = shopSetThumbnailAttibutes(shopItemContainer, 217, 217, 0, 0, 0, 0.5, 2, 2);
    // Append 'img' into 'a'
    aShopItem.appendChild(imgShopItem);
    shopItemContainer.appendChild(aShopItem);
    return shopItemContainer;
}
// Fill the carousel with each album container
function shopFillCarousel(carouselId) {
    var _this = this;
    var shopCarousel = document.querySelectorAll(".shop-section ." + carouselId.className);
    shopCarousel.forEach(function (carousel) {
        for (var i = 0; i < 5; i++, j++) {
            var newShopItemContainer = _this.shopCreateNewAlbumContainer(j);
            carousel.appendChild(newShopItemContainer);
        }
    });
}
