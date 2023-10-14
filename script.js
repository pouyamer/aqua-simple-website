const nav = document.querySelector(".nav")

document.addEventListener("keypress", e => {
  if ((e.key = "s")) {
    nav.classList.toggle("active")
  }
})
