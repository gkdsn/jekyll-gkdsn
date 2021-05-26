const $cursorTag = document.querySelector("div.cursors")
const $cursors = $cursorTag.querySelectorAll("div")
const $firstCursor = $cursorTag.querySelector("div:first-child")
const $cursorArrow = $cursorTag.querySelector("div span")
const $hover = document.querySelectorAll("a, button, input, .btn, .js-cursor-hover")
const $arrowHover = document.querySelectorAll(".js-swiper-control[data-hover]")

let aimX = 0,
    aimY = 0;

$cursors.forEach((cursor, index) => {
    let currentX = 0,
        currentY = 0,
        speed = 0.5 - index * 0.02;
    
    const animate = function () {
        currentX += (aimX - currentX) * speed
        currentY += (aimY - currentY) * speed
        cursor.style.left = currentX + "px"
        cursor.style.top = currentY + "px"
        requestAnimationFrame(animate)
    }
  animate()
})

document.addEventListener("mousemove", function (event) {
  aimX = event.clientX
  aimY = event.clientY
})

hover.forEach(hover => {
  hover.addEventListener("mouseover", function () {
    cursors.classList.add("invisible")
    firstCursor.classList.remove("invisible")
    firstCursor.classList.add("active")
  })
  
  hover.addEventListener("mouseout", function () {
    firstCursor.classList.remove("active")
    cursors.classList.remove("invisible")
  })
})
arrowHover.forEach(arrowHover => {
    arrowHover.addEventListener("mouseover", function () {
      let arrowOrientation = arrowHover.getAttribute("data-hover")
      cursorArrow.classList.add("active")
    })
    
    arrowHover.addEventListener("mouseout", function () {
      cursorArrow.classList.remove("active")
    })
  })