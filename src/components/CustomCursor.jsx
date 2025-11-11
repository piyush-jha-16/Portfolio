import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Dot follows with slight delay for smooth effect
      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY })
      }, 20)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') || 
                           target.closest('button') ||
                           target.classList.contains('nav-link') ||
                           target.classList.contains('project-card') ||
                           target.classList.contains('skill-item') ||
                           target.classList.contains('tag') ||
                           target.style.cursor === 'pointer'
      
      setIsHovering(isInteractive)
    }

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}

export default CustomCursor
