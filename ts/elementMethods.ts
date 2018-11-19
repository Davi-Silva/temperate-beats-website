class Elements {

    // Create HTML element
    createElement(elementType: string, classNameId: string): HTMLElement {
        let element: HTMLElement = document.createElement(`${elementType}`);
        element.querySelector(`${classNameId}`);
        return element;
    }


    // Set thumbnail attributes 
    setThumbnailAttibutes(albumContainer: HTMLElement, width: number, height: number, red: number, green: number, blue: number, alpha: number, borderRadius: number): HTMLElement {
        if (width > 0 && height > 0) {
            if (red >= 0 && green >= 0 && blue >= 0) {
                if (borderRadius >= 0) {
                    albumContainer.style.width = `${width}`;
                    albumContainer.style.height = `${height}`;
                    albumContainer.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha});`;
                    albumContainer.style.borderRadius = `${borderRadius}px`;
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
    }

    // Fill Carousel
    fillCarousel(carouselId: HTMLElement, albumContainer: HTMLElement): void {
        let releaseAlbumCarousel: any = document.querySelectorAll(`.releases-section #${carouselId.id}`);

        releaseAlbumCarousel.forEach((carousel) => {
            for (let i = 0; i < 5; i++) {
                let cloneAlbumContainer: any = albumContainer.cloneNode(true);
                carousel.appendChild(cloneAlbumContainer);
            }
        });
    }

}

// export {Elements as elementMethods};