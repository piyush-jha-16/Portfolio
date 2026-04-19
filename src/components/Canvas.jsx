import { useEffect, useRef } from 'react'
import './Canvas.css'

const Canvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })
    let animationFrameId
    let lastFrameTime = 0
    const targetFps = 30
    const frameInterval = 1000 / targetFps
    let mouseX = 0
    let mouseY = 0
    let currentMouseX = 0
    let currentMouseY = 0
    let staticGridCanvas = null
    let staticGridCtx = null

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      staticGridCanvas = document.createElement('canvas')
      staticGridCanvas.width = canvas.width
      staticGridCanvas.height = canvas.height
      staticGridCtx = staticGridCanvas.getContext('2d', { alpha: true, desynchronized: true })
      staticGridCtx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
      const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.08)'
      const pointColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.15)'

      staticGridCtx.clearRect(0, 0, width, height)
      staticGridCtx.strokeStyle = gridColor
      staticGridCtx.lineWidth = 1

      // Grid settings
      const gridSize = 60

      for (let x = 0; x < width; x += gridSize) {
        staticGridCtx.beginPath()
        staticGridCtx.moveTo(x, 0)
        staticGridCtx.lineTo(x, height)
        staticGridCtx.stroke()
      }

      for (let y = 0; y < height; y += gridSize) {
        staticGridCtx.beginPath()
        staticGridCtx.moveTo(0, y)
        staticGridCtx.lineTo(width, y)
        staticGridCtx.stroke()
      }

      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          staticGridCtx.fillStyle = pointColor
          staticGridCtx.beginPath()
          staticGridCtx.arc(x, y, 1, 0, Math.PI * 2)
          staticGridCtx.fill()
        }
      }
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Grid settings
    const gridSize = 60
    const maxDistance = 130
    const circleRadius = 3

    const ease = 0.16

    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isVisible = () => document.visibilityState === 'visible'

    // Draw grid and mouse effect
    const draw = (timestamp) => {
      animationFrameId = requestAnimationFrame(draw)

      if (shouldReduceMotion || !isVisible()) {
        return
      }

      if (timestamp - lastFrameTime < frameInterval) {
        return
      }
      lastFrameTime = timestamp

      const width = window.innerWidth
      const height = window.innerHeight

      currentMouseX += (mouseX - currentMouseX) * ease
      currentMouseY += (mouseY - currentMouseY) * ease

      ctx.clearRect(0, 0, width, height)

      // Check current theme
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
      const interactColor = isDark ? '255, 255, 255' : '0, 0, 0'

      if (staticGridCanvas) {
        ctx.drawImage(staticGridCanvas, 0, 0, width, height)
      }

      // Draw grid points with mouse interaction
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const dx = x - currentMouseX
          const dy = y - currentMouseY
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            const size = circleRadius * (1 + (1 - distance / maxDistance))

            // Draw circle
            ctx.fillStyle = `rgba(${interactColor}, ${opacity * 0.6})`
            ctx.beginPath()
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fill()

            // Draw connection line to mouse
            ctx.strokeStyle = `rgba(${interactColor}, ${opacity * 0.3})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(currentMouseX, currentMouseY)
            ctx.stroke()
          }
        }
      }

      // Draw glow around mouse
      const gradient = ctx.createRadialGradient(currentMouseX, currentMouseY, 0, currentMouseX, currentMouseY, 90)
      gradient.addColorStop(0, `rgba(${interactColor}, 0.1)`)
      gradient.addColorStop(1, `rgba(${interactColor}, 0)`)
      ctx.fillStyle = gradient
      ctx.fillRect(currentMouseX - 90, currentMouseY - 90, 180, 180)
    }

    animationFrameId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="canvas-bg" />
}

export default Canvas
