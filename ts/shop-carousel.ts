let shopItemCarousel: any = document.querySelectorAll(".shop-carousel");
console.log(shopItemCarousel);
let j = 0;

shopFillCarousel(shopItemCarousel[0]);
// shopItemCarousel.forEach((carousel) => {
//   shopFillCarousel(carousel);
// });

function shopCreateHTMLElement(
  elementType: string,
  classNameId: string,
  href: string,
  src: number
): HTMLElement {
  let element: any = document.createElement(`${elementType}`);
  if (elementType == "a") {
    element.href = `${href}`;
  } else if (elementType == "img") {
    this.getAlbumImageCoverFromDB();
    element.src = `./img/releases-album-cover/album-cover-${src}.jpg`;
  }

  if (classNameId.substring(0, 1) == ".") {
    element.className = `${classNameId}`;
  } else if (classNameId.substring(0, 1) == "#") {
    element.id = `${classNameId}`;
  } else if (classNameId == "") {
    return element;
  }
  return element;
}

// Set thumbnail attributes
function shopSetThumbnailAttibutes(
  shopItemContainer: HTMLElement,
  width: number,
  height: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  marginTopBottom: number,
  marginRightLeft: number
): HTMLElement {
  if (width > 0 && height > 0) {
    if (red >= 0 && green >= 0 && blue >= 0) {
      shopItemContainer.style.width = `${width}px`;
      shopItemContainer.style.height = `${height}px`;
      shopItemContainer.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
      shopItemContainer.style.margin = `${marginTopBottom}px ${marginRightLeft}px`;
      shopItemContainer.style.display = "inline-block";
    } else {
      return;
    }
  } else {
    return;
  }
  return shopItemContainer;
}

// Create a new individual album container
function shopCreateNewAlbumContainer(imgShopItemSrc: number): HTMLElement {
  // Create each individual element container
  let shopItemContainer: HTMLElement = shopCreateHTMLElement(
    "div",
    ".shop-item",
    "",
    imgShopItemSrc
  );
  let aShopItem: HTMLElement = shopCreateHTMLElement(
    "a",
    `#album-cover-${imgShopItemSrc}`,
    "#",
    imgShopItemSrc
  );
  let imgShopItem: any = shopCreateHTMLElement("img", "", "", imgShopItemSrc);

  // Set the thumbnail attributes
  imgShopItem = shopSetThumbnailAttibutes(
    imgShopItem,
    217,
    217,
    0,
    0,
    0,
    0.5,
    0,
    0
  );
  shopItemContainer = shopSetThumbnailAttibutes(
    shopItemContainer,
    217,
    217,
    0,
    0,
    0,
    0.5,
    2,
    2
  );

  // Append 'img' into 'a'
  aShopItem.appendChild(imgShopItem);
  shopItemContainer.appendChild(aShopItem);

  return shopItemContainer;
}

// Fill the carousel with each album container
function shopFillCarousel(carouselId: HTMLElement): void {
  let shopCarousel: any = document.querySelectorAll(
    `.shop-section .${carouselId.className}`
  );

  shopCarousel.forEach(carousel => {
    for (let i = 0; i < 5; i++, j++) {
      let newShopItemContainer: any = this.shopCreateNewAlbumContainer(j);
      carousel.appendChild(newShopItemContainer);
    }
  });
}
