let i: number = 0; //Start ponit
let backgroundImages: any[] = [];
let time = 3000;
let backgroundImagesContainer:HTMLImageElement = document.querySelector(".title-section");
let titleH1:HTMLElement = document.querySelector(".title-section .main-title-container #title");
let subtitleH2:HTMLElement = document.querySelector(".title-section .main-title-container #subtitle");
let dotsIndicator: any = document.querySelectorAll(".title-section .indicators .fa-circle");
console.log(dotsIndicator)

// Carousel Background Images
backgroundImages[0] = './img/carousel-background-imgs/landscape-1.jpg';
backgroundImages[1] = './img/carousel-background-imgs/soundwave-form.jpg';
backgroundImages[2] = './img/carousel-background-imgs/temperate-forest.jpg';

// Carousel Title Texts
let titleText: string[] = ["New Releases", "Temperate Shop", "Coming Soon"];
let subtitleText: string[] = ["Week updates", "Buy our Temperate Beats products", "Coming soon"];

// Carousel Arrows
let arrowLeft: any = document.querySelector(".title-section #arrow-left");
let arrowRight: any = document.querySelector(".title-section #arrow-right");

function changeSlide(): void {
    changeBackgroundImage(i)
    changeTitle(i);
    changeDotsIndicators(i);

    if(i < backgroundImages.length - 1) {
        i++;
    } else {
        i = 0;
    } 
    setTimeout(`changeSlide(${i})`, time);
}

// function changeSlideArrowLeft(): void {
//     changeBackgroundImage(i)
//     changeTitle(i);
//     changeDotsIndicators(i);

//     if(i < 0) {
//         i--;
//     } else {
//         i = 2;
//     } 
// }

// function changeSlideArrowRight(): void {
//     changeBackgroundImage(i)
//     changeTitle(i);
//     changeDotsIndicators(i);

//     if(i < backgroundImages.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     } 
// }

function changeBackgroundImage(i: number): void {
    backgroundImagesContainer.style.background = `url(${backgroundImages[i]})`;
    backgroundImagesContainer.style.backgroundRepeat = "no-repeat";
    backgroundImagesContainer.style.backgroundSize = "cover";
}

function changeTitle(i: number): void {
    titleH1.innerHTML = titleText[`${i}`];
    subtitleH2.innerHTML = subtitleText[`${i}`];
}

function changeDotsIndicators(i: number): void {
    if(i == 0) {
        dotsIndicator[i].style.opacity = "1";
        dotsIndicator[i].style.transform = "scale(1, 1)";
        dotsIndicator[i + 1].style.opacity = "0.5";
        dotsIndicator[i + 1].style.transform = "scale(0.7, 0.7)";
        dotsIndicator[i + 2].style.opacity = "0.5";
        dotsIndicator[i + 2].style.transform = "scale(0.7, 0.7)";
    } else if(i == 1) {
        dotsIndicator[i - 1].style.opacity = "0.5";
        dotsIndicator[i - 1].style.transform = "scale(0.7, 0.7)";
        dotsIndicator[i].style.opacity = "1";
        dotsIndicator[i].style.transform = "scale(1, 1)";
        dotsIndicator[i + 1].style.opacity = "0.5";
        dotsIndicator[i + 1].style.transform = "scale(0.7, 0.7)";
    } else if (i == 2) {
        dotsIndicator[i - 2].style.opacity = "0.5";
        dotsIndicator[i - 2].style.transform = "scale(0.7, 0.7)";
        dotsIndicator[i - 1].style.opacity = "0.5";
        dotsIndicator[i - 1].style.transform = "scale(0.7, 0.7)";
        dotsIndicator[i].style.opacity = "1";
        dotsIndicator[i].style.transform = "scale(1, 1)";
    }
}

window.onload = changeSlide;

// arrowLeft.addEventListener('click', () => {
//     changeSlideArrowLeft();
//     // if(i > 0) {
//     //     i--;
//     // } else {
//     //     i = 2;
//     // } 
// });

// arrowRight.addEventListener('click', () => {
//     changeSlideArrowRight();
//     // if(i < backgroundImages.length - 1) {
//     //     i++;
//     // } else {
//     //     i = 0;
//     // } 
// });












