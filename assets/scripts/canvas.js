const canvasTag = document.querySelector("canvas");

canvasTag.width = window.innerWidth * 2;
canvasTag.height = window.innerHeight * 2;

canvasTag.style.width = window.innerWidth + "px";
canvasTag.style.height = window.innerHeight + "px";

const context = canvasTag.getContext("2d");
context.scale(2, 2);

let currentAimX = null;
let currentAimY = null;
let currentX = null;
let currentY = null;

var imgSrcs = new Array();
$('.js-img').each(function() {
    var src = $(this).attr('src');
    imgSrcs.push(src);
})
    

let i = 0;
const images = imgSrcs.map(
    (src) => {
    const image = document.createElement("img");
    image.src = src;
    return image;
    }
);

document.addEventListener("mousemove", function (event) {
    currentAimX = event.pageX;
    currentAimY = event.pageY;
    if (currentX === null) {
        currentX = event.pageX;
        currentY = event.pageY;
    }
});

canvasTag.addEventListener("click", function () {
    i = i + 1;
    if (i >= images.length) {
        i = 0;
    }
});

const draw = function () {
    if (currentX) {
        if (images[i].complete) {
            context.drawImage(images[i], currentX - 200, currentY - 160, 400, 320);
        }

        currentX = currentX + (currentAimX - currentX) * 0.1;
        currentY = currentY + (currentAimY - currentY) * 0.1;
    }

    requestAnimationFrame(draw);
};
draw();
