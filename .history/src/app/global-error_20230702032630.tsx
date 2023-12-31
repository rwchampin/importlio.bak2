'use client'

import { useEffect } from "react"

 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

   
const canvasGroup = ref(null)
const canvas = null
const particles = []

 useEffect(() => {
  let particles = []
  const frequency = 20
  // Popolate particles
  setInterval(
      () => {
          popolate()
      },
      frequency,
  )

  const c1 = createCanvas({ width: window.innerWidth, height: window.innerHeight })
  const c2 = createCanvas({ width: window.innerWidth, height: window.innerHeight })
  const c3 = createCanvas({ width: window.innerWidth, height: window.innerHeight })

  const tela = c1.canvas
  const canvas = c1.context

  // $("body").append(tela);
  canvasGroup.value.append(tela)
  writeText(c2.canvas, c2.context, props.error.statusCode)

  function createCanvas(properties) {
      const canvas = document.createElement('canvas')
      canvas.setAttribute('id', 'error-canvas')
      canvas.setAttribute('class', 'canvas-ui')
      canvas.width = properties.width
      canvas.height = properties.height
      const context = canvas.getContext('2d')
      return {
          canvas,
          context,
      }
  }

  function writeText(canvas, context, text) {
      const size = context.canvas.width / context.canvas.height
      context.font = `${size}px Montserrat-Black`
      context.fillStyle = '#111111'
      context.fontWeight = 'bold'
      context.textAlign = 'center'
      const lineheight = context.canvas.height
      const lines = text.split('\n')
      for (let i = 0; i < lines.length; i++)
          context.fillText(lines[i], canvas.width / 2, canvas.height / 2 + lineheight * i - (lineheight * (lines.length - 1)) / 3)
  }

  function maskCanvas() {
      c3.context.drawImage(c2.canvas, 0, 0, c2.canvas.width, c2.canvas.height)
      c3.context.globalCompositeOperation = 'source-atop'
      c3.context.drawImage(c1.canvas, 0, 0)
      blur(c1.context, c1.canvas, 2)
  }

  function blur(ctx, canvas, amt) {
      ctx.filter = `blur(${amt}px)`
      ctx.drawImage(canvas, 0, 0)
      ctx.filter = 'none'
  }

  /*
   * Function to clear layer canvas
   * @num:number number of particles
   */
  function popolate() {
      particles.push(
          new ErrorParticle(canvas, {
              x: (window.innerWidth / 2),
              y: (window.innerHeight / 2),
          }),
      )
      return particles.length
  }

  function clear() {
      canvas.globalAlpha = 0.03
      canvas.fillStyle = '#111111'
      canvas.fillRect(0, 0, tela.width, tela.height)
      canvas.globalAlpha = 1
  }

  function update() {
      clear()
      particles = particles.filter((p) => {
          return p.move()
      })
      maskCanvas()
      requestAnimationFrame(update.bind(this))
  }

  update()
}, [])

  return (
    <html>
      <body>
      <div class="super-text">
                    {{ props.error.statusCode }}
                </div>
                <div id="canvas-target" ref="canvasGroup" />
                <div class="title">
                    <h3>{{ props.error.message }}</h3>
                </div>
      </body>
    </html>
  )
}



 
<template>
    <section class="error-page">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div class="super-text">
                    {{ props.error.statusCode }}
                </div>
                <div id="canvas-target" ref="canvasGroup" />
                <div class="title">
                    <h3>{{ props.error.message }}</h3>
                </div>
                <div class="more-pens">
                    <a target="_blank" href="https://codepen.io/plasm/" class="white-mode">VIEW OTHER PENS</a>
                    <a target="_blank" href="https://codepen.io/collection/nZpPbz/" class="white-mode">VIEW OTHER
                        PARTICLES</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#canvas-target {
    position: relative;
    margin: 0px auto 50px auto !important;
    width: 80%;
    text-align: center;
    background: blue !important;
    min-height: 300px;
}

#error-canvas {
    position: absolute;
    z-index: 10000;
    margin: 20px auto;
    min-height: 300px;
}

h2,
h3 {
    text-align: center;
}

h3:last-child {
    font-weight: bold;
}

#canvas-target canvas {
    width: 100%;
}

.error-page #smooth-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 1;
    text-align: center;
}

section {
    min-height: 100vh;
    width: 100vw;
    padding: var(--padding-inner);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #111111;
    color: #EEEEEE;
}

p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #EEEEEE;
}

.error-title h3 {
    font-family: Montserrat-Black;
}

h3 {
    opacity: 1;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    line-height: 1;
    color: #EEEEEE;
    letter-spacing: 20px;
}
</style>
