"use strict";
exports.__esModule = true;
var Elements = /** @class */ (function () {
    function Elements() {}
    // Create HTML element
    Elements.prototype.createElement = function (elementType, classNameId) {
        var element = document.createElement("" + elementType);
        element.querySelector("" + classNameId);
        return element;
    };
    // Set thumbnail attributes 
    Elements.prototype.setThumbnailAttibutes = function (albumContainer, width, height, red, green, blue, alpha, borderRadius) {
        if (width > 0 && height > 0) {
            if (red >= 0 && green >= 0 && blue >= 0) {
                if (borderRadius >= 0) {
                    albumContainer.style.width = "" + width;
                    albumContainer.style.height = "" + height;
                    albumContainer.style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ");";
                    albumContainer.style.borderRadius = borderRadius + "px";
                } else {
                    return;
                }
            } else {
                return;
            }
        } else {
            return;
        }
        return albumContainer;
    };
    // Fill Carousel
    Elements.prototype.fillCarousel = function (carouselId, albumContainer) {
        var releaseAlbumCarousel = document.querySelectorAll(".releases-section #" + carouselId.id);
        releaseAlbumCarousel.forEach(function (carousel) {
            for (var i = 0; i < 5; i++) {
                var cloneAlbumContainer = albumContainer.cloneNode(true);
                carousel.appendChild(cloneAlbumContainer);
            }
        });
    };
    return Elements;
}());
exports.elementMethods = Elements;