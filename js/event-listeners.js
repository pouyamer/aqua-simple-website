const headerHeight = getComputedStyle(headerEl).height.split("px")[0]
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

document.addEventListener("scroll", () => {
  let scrollPercent =
    (window.scrollY * 100) / (document.body.offsetHeight - window.innerHeight)

  if (innerWidth > 768) navInnerScrollBarEl.style.width = scrollPercent + "%"
  else navInnerScrollBarEl.style.height = scrollPercent + "%"

  if (window.scrollY <= headerHeight) {
    arrowUpEl.classList.add("hidden")
  } else {
    arrowUpEl.classList.remove("hidden")
  }
})

arrowUpEl.addEventListener("click", () => {
  window.scrollTo(0, headerHeight)
})

window.addEventListener("resize", () => {
  initializeCanvas()
})
