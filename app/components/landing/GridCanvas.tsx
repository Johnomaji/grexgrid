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

    interface Node {
      x: number
      y: number
      phase: number
      energy: number
      active: boolean
    }

    let nodes: Node[] = []

    function resize() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
      nodes = []
      const step = 72
      for (let x = 0; x <= W; x += step) {
        for (let y = 0; y <= H; y += step) {
          nodes.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            energy: Math.random(),
            active: Math.random() > 0.88,
          })
        }
      }
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, W, H)
      const step = 72

      // Draw grid lines — subtle
      ctx!.strokeStyle = 'rgba(46,52,47,0.35)'
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

      // Draw energy connections between nearby active nodes
      for (let i = 0; i < nodes.length; i++) {
        if (!nodes[i].active) continue
        for (let j = i + 1; j < nodes.length; j++) {
          if (!nodes[j].active) continue
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > step * 2.2) continue

          const pulse = (Math.sin(t * 0.0015 + nodes[i].phase) + 1) / 2
          const alpha = pulse * 0.18 * (1 - dist / (step * 2.2))
          ctx!.beginPath()
          ctx!.moveTo(nodes[i].x, nodes[i].y)
          ctx!.lineTo(nodes[j].x, nodes[j].y)
          ctx!.strokeStyle = `rgba(26,122,82,${alpha})`
          ctx!.lineWidth = 0.75
          ctx!.stroke()
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = (Math.sin(t * 0.001 + node.phase) + 1) / 2

        if (node.active) {
          // Active node: solar color, larger, glowing
          const r = 1.5 + pulse * 1.5
          const alpha = 0.35 + pulse * 0.55

          // Glow ring
          ctx!.beginPath()
          ctx!.arc(node.x, node.y, r * 3, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(200,132,26,${alpha * 0.12})`
          ctx!.fill()

          // Core dot
          ctx!.beginPath()
          ctx!.arc(node.x, node.y, r, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(200,132,26,${alpha})`
          ctx!.fill()
        } else {
          // Inactive node: subtle
          const alpha = 0.08 + 0.1 * pulse
          ctx!.beginPath()
          ctx!.arc(node.x, node.y, 1, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(196,192,180,${alpha})`
          ctx!.fill()
        }
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
        opacity: 0.45,
      }}
    />
  )
}
