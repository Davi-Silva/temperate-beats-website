let i: number = 0; //Start ponit
let backgroundImages: any[] = [];
let time = 3000;
let backgroundImagesContainer:HTMLImageElement = document.querySelector(".title-section .carousel-bg img");

backgroundImages[0] = './img/carousel-background-imgs/landscape-1.jpg';
backgroundImages[1] = './img/carousel-background-imgs/soundwave-form.jpg';
backgroundImages[2] = './img/website-menu-logo.png';


function changeImg() {
    backgroundImagesContainer.src = backgroundImages[i];
    backgroundImagesContainer.style.transition = "all .5s";

    if(i < backgroundImages.length - 1) {
        i++;
    } else {
        i =0
    }
    
    setTimeout("changeImg()", time)


}

window.onload = changeImg;


