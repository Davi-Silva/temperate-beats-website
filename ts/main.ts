let periods: any = document.querySelectorAll(".release-carousel");
periods.forEach((period) => {
  fillCarousel(period);
});

// Create HTML element
function createHTMLElement(elementType: string, classNameId: string, href: string, src: number): HTMLElement {
  let element: any = document.createElement(`${elementType}`);
  if (elementType == "a") {
    element.href = `${href}`;
  } else if (elementType == "img") {
    getAlbumImageCoverFromDB();
    element.src = `./img/album-cover-${src}.jpg`
  }

  if(classNameId.substring(0, 1) == ".") {
    element.className = `${classNameId}`;
  } else if (classNameId.substring(0, 1) == "#") {
    element.id = `${classNameId}`;
  } else if (classNameId == "") {
    return element;
  }
  return element;
}

// Set thumbnail attributes
function setThumbnailAttibutes(albumContainer: HTMLElement, width: number, height: number, red: number, green: number, blue: number, alpha: number, borderRadius: number, marginTopBottom: number, marginRightLeft: number): HTMLElement {
  if (width > 0 && height > 0) {
    if (red >= 0 && green >= 0 && blue >= 0) {
      if (borderRadius >= 0) {
        albumContainer.style.width = `${width}px`;
        albumContainer.style.height = `${height}px`;
        albumContainer.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        albumContainer.style.borderRadius = `${borderRadius}%`;
        albumContainer.style.margin = `${marginTopBottom}px ${marginRightLeft}px`
        albumContainer.style.display = "inline-block"
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

// Create a new individual album container
function createNewAlbumContainer(imgAlbumCoverSrc: number): HTMLElement {
  // Create each individual element container
  let albumContainer: HTMLElement = createHTMLElement("div", ".release-abum-container", "", imgAlbumCoverSrc);
  let aAlbumCover: HTMLElement = createHTMLElement("a", "#album-cover", "#", imgAlbumCoverSrc)
  let imgAlbumCover: any = createHTMLElement('img', "#album-cover", "", imgAlbumCoverSrc);

  // Set the thumbnail attributes
  imgAlbumCover = setThumbnailAttibutes(imgAlbumCover, 217, 217, 0, 0, 0, 0.5, 3, 0, 0)
  albumContainer = setThumbnailAttibutes(albumContainer, 217, 217, 0, 0, 0, 0.5, 3, 0, 2);

  // Append 'img' into 'a'
  aAlbumCover.appendChild(imgAlbumCover);
  albumContainer.appendChild(aAlbumCover);

  return albumContainer;
}

// Get the album image cover from the databases
function getAlbumImageCoverFromDB() {

}

// Fill the carousel with each album container
function fillCarousel(carouselId: HTMLElement): void {
  let releaseAlbumCarousel: any = document.querySelectorAll(`.releases-section #${carouselId.id}`);

  releaseAlbumCarousel.forEach(carousel => {
    for (let i = 0; i < 5; i++) {
      let newAlbumContainer: any = createNewAlbumContainer(i);
      carousel.appendChild(newAlbumContainer);
      
    }
  });
  console.log(releaseAlbumCarousel);
}
