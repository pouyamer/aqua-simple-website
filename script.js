const nav = document.querySelector(".nav")
const hamburgerButtonEl = document.querySelector(".hamburger-button-container")
const mobileShadowEL = document.querySelector(".mobile-shadow")
const navInnerScrollBarEl = document.querySelector(".nav-inner-scroll-bar")

document.addEventListener("click", e => {
  if (e.target.classList.contains("hamburger-button-container")) {
    nav.classList.add("active")
    mobileShadowEL.classList.add("shown")

    return
  }

  if (nav.classList.contains("active") && !e.target.classList.contains("nav")) {
    nav.classList.remove("active")
    mobileShadowEL.classList.remove("shown")
    return
  }
})

document.addEventListener("scroll", e => {
  let scrollPercent =
    (window.scrollY * 100) / (document.body.offsetHeight - window.innerHeight)

  if (innerWidth > 768) navInnerScrollBarEl.style.width = scrollPercent + "%"
  else navInnerScrollBarEl.style.height = scrollPercent + "%"
})
