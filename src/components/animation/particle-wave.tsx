// components/ParticleWave.tsx
'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

interface ParticleWaveProps {
    particleColor?: number
    gridSize?: number
    particleSpacing?: number
    waveAmplitude?: number
    waveFrequency?: number
    waveSpeed?: number
    backgroundColor?: number
}

const ParticleWave: React.FC<ParticleWaveProps> = ({
    particleColor = 0xd10225,
    gridSize = 150,
    particleSpacing = 6,
    waveAmplitude = 25,
    waveFrequency = 0.02,
    waveSpeed = 0.025,
    backgroundColor = 0x0b0b0b,
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const animationFrameId = useRef<number>(0)
    const time = useRef<number>(0)

    useEffect(() => {
        const container = containerRef.current

        if (container) return

        let scene: THREE.Scene
        let camera: THREE.PerspectiveCamera
        let renderer: THREE.WebGLRenderer
        let points: THREE.Points
        let controls: OrbitControls

        const totalGridSize = gridSize * particleSpacing
        const halfGrid = totalGridSize / 2

        const createParticleTexture = () => {
            const canvas = document.createElement('canvas')
            canvas.width = 64
            canvas.height = 64
            const context = canvas.getContext('2d') as CanvasRenderingContext2D

            const gradient = context.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width / 2
            )
            gradient.addColorStop(0, 'rgba(255,255,255,1)')
            gradient.addColorStop(0.2, 'rgba(255,255,255,1)')
            gradient.addColorStop(0.7, 'rgba(255,255,255,0.3)')
            gradient.addColorStop(1, 'rgba(255,255,255,0)')

            context.fillStyle = gradient
            context.fillRect(0, 0, canvas.width, canvas.height)

            return new THREE.CanvasTexture(canvas)
        }

        const init = () => {
            scene = new THREE.Scene()
            scene.background = new THREE.Color(backgroundColor)

            const aspectRatio = window.innerWidth / window.innerHeight
            camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 10000)
            camera.position.set(0, 50, 400)
            camera.lookAt(0, 0, 0)

            renderer = new THREE.WebGLRenderer({ antialias: true })
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(window.devicePixelRatio)
            containerRef.current!.appendChild(renderer.domElement)

            controls = new OrbitControls(camera, renderer.domElement)
            controls.enabled = false

            const geometry = new THREE.BufferGeometry()
            const positions = []
            const colors = []
            const color = new THREE.Color(particleColor)

            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    const x = i * particleSpacing - halfGrid
                    const z = j * particleSpacing - halfGrid
                    positions.push(x, 0, z)
                    colors.push(color.r, color.g, color.b, 0)
                }
            }

            geometry.setAttribute(
                'position',
                new THREE.Float32BufferAttribute(positions, 3)
            )
            geometry.setAttribute(
                'color',
                new THREE.Float32BufferAttribute(colors, 4)
            )

            const material = new THREE.PointsMaterial({
                size: 4,
                map: createParticleTexture(),
                vertexColors: true,
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            })

            points = new THREE.Points(geometry, material)
            scene.add(points)
        }

        const animate = () => {
            time.current += waveSpeed

            const positions = points.geometry.attributes.position.array
            const colors = points.geometry.attributes.color.array

            let pos_index = 0
            let color_index = 0

            for (let ix = 0; ix < gridSize; ix++) {
                for (let iy = 0; iy < gridSize; iy++) {
                    const x = positions[pos_index]
                    const z = positions[pos_index + 2]
                    const y =
                        ((Math.sin(x * waveFrequency + time.current) +
                            Math.cos(z * waveFrequency + time.current)) *
                            waveAmplitude) /
                        2
                    positions[pos_index + 1] = y
                    const alpha = Math.min(
                        Math.abs(y) / (waveAmplitude * 0.7),
                        1.0
                    )
                    colors[color_index + 3] = alpha

                    pos_index += 3
                    color_index += 4
                }
            }

            points.geometry.attributes.position.needsUpdate = true
            points.geometry.attributes.color.needsUpdate = true

            controls.update()
            renderer.render(scene, camera)
            animationFrameId.current = requestAnimationFrame(animate)
        }

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        init()
        animate()
        window.addEventListener('resize', onWindowResize, false)

        return () => {
            window.removeEventListener('resize', onWindowResize, false)
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
            if (containerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                containerRef.current.removeChild(renderer.domElement)
            }
            renderer.dispose()
            camera.remove()
            controls.dispose()
        }
    }, [
        particleColor,
        gridSize,
        particleSpacing,
        waveAmplitude,
        waveFrequency,
        waveSpeed,
        backgroundColor,
    ])

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden"
            style={{
                backgroundColor: `#${backgroundColor.toString(16).padStart(6, '0')}`,
            }}
        ></div>
    )
}

export default ParticleWave
