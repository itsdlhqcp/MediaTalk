const navMenu = document.getElementById("nav-menu")
const navLink =document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    // Toggle the menu to slide in/out
    navMenu.classList.toggle("left-[0]") 
    navMenu.classList.toggle("left-[-100%]")

    // Toggle between menu icon and close icon
    hamburger.classList.toggle('ri-menu-4-fill')
    hamburger.classList.toggle('ri-close-line')
}) 

navLink.forEach(link => {
    link.addEventListener("click", ()=>{
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-arge-line')
    })
})
