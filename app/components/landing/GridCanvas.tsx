'use client'

import { useEffect, useRef } from 'react'

export default function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W: number, H: number
    let animId: number

    interface Dot {
      x: number
      y: number
      phase: number
    }
    let dots: Dot[] = []

    function resize() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
      dots = []
      const step = 80
      for (let x = 0; x <= W; x += step) {
        for (let y = 0; y <= H; y += step) {
          dots.push({ x, y, phase: Math.random() * Math.PI * 2 })
        }
      }
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, W, H)
      const step = 80

      // grid lines
      ctx!.strokeStyle = 'rgba(46,52,47,0.5)'
      ctx!.lineWidth = 0.5
      for (let x = 0; x <= W; x += step) {
        ctx!.beginPath()
        ctx!.moveTo(x, 0)
        ctx!.lineTo(x, H)
        ctx!.stroke()
      }
      for (let y = 0; y <= H; y += step) {
        ctx!.beginPath()
        ctx!.moveTo(0, y)
        ctx!.lineTo(W, y)
        ctx!.stroke()
      }

      // pulsing dots
      for (const dot of dots) {
        const alpha = 0.15 + 0.45 * ((Math.sin(t * 0.001 + dot.phase) + 1) / 2)
        ctx!.beginPath()
        ctx!.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(200,132,26,${alpha})`
        ctx!.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.35,
      }}
    />
  )
}
