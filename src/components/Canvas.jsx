import { useEffect, useRef } from 'react'
import './Canvas.css'

const Canvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let mouseX = 0
    let mouseY = 0

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
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
    const gridSize = 50
    const maxDistance = 150
    const circleRadius = 3

    // Draw grid and mouse effect
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw grid points with mouse interaction
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
          )

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            const size = circleRadius * (1 + (1 - distance / maxDistance))

            // Draw circle
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.6})`
            ctx.beginPath()
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fill()

            // Draw connection line to mouse
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke()
          } else {
            // Normal grid points
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
            ctx.beginPath()
            ctx.arc(x, y, 1, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Draw glow around mouse
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 100)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(mouseX - 100, mouseY - 100, 200, 200)

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="canvas-bg" />
}

export default Canvas
