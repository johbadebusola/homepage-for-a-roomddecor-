let hamburger = document.querySelector(".hamburger")
let cancelMenu = document.querySelector("#cancel")
let menu = document.querySelector("#menu")
let buttons = document.querySelectorAll("#button")
let banner = document.querySelector("#banner")

hamburger.addEventListener("click", toggle)

function toggle() {
    menu.classList.remove("active")
}

cancelMenu.addEventListener("click", toggleCancel)
function toggleCancel() {

    menu.classList.add("active")

}

// image slider
let images = ["img1", "img2", "img3"]
let count = 0
buttons.forEach(button => {
    button.addEventListener("click", slide)
    function slide() {
        if (button.classList.contains("prev")) {
            count--
            if (count < 0) {
                count = images.length - 1
            }
            banner.style.background = `url('images/${images[count]}.jpg')`
            // console.log("prev")
        }
        if (button.classList.contains("next")) {
            count++
            if (count > images.length - 1) {
                count = 0
            }
            banner.style.background = `url('images/${images[count]}.jpg')`
            // console.log("next")
        }
    }
   

})


