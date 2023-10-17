const themeHue = getComputedStyle(
  document.querySelector(":root")
).getPropertyValue("--site-hue")

// Canvas Application
const ctx = canvas.getContext("2d")

canvas.width = getComputedStyle(headerEl).width.split("px")[0]
canvas.height = getComputedStyle(headerEl).height.split("px")[0]

const hslStringify = (h, s, l, a = 1) => `hsl(${h}, ${s}%, ${l}%, ${a})`

const fireflies = []

const { min, max } = config.fireflies.size
const { min: minSpeed, max: maxSpeed } = config.fireflies.speed

for (let i = 0; i < config.fireflies.number; i++) {
  fireflies.push(
    new FireFly(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * (max - min) + min,
      {
        h: config.rainbowMode ? Math.random() * 360 : themeHue,
        s: config.fireflies.color.s,
        l: config.fireflies.color.l,
        a: config.fireflies.color.a
      },
      Math.random() * (maxSpeed - minSpeed) + minSpeed,
      config.rainbowMode
    )
  )
}

const render = () => {
  // Sky
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = hslStringify(
    config.skyColor.h,
    config.skyColor.s,
    config.skyColor.l,
    config.skyColor.a
  )
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Fireflies
  fireflies.forEach(firefly => firefly.update())

  // requestAnimationFrame causes the browser to call the function again and again
  requestAnimationFrame(render)
}

// App Starts here...
render()
