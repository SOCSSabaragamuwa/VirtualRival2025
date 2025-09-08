'use client'

import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'

const images = [
    '/games-images/cod-img.jpg',
    '/games-images/pubg-img.jpg',
    '/games-images/mw-img.jpg',
    '/games-images/nfs-run-img.jpg',
    '/games-images/mk-img.jpg',
    '/games-images/blur-img.jpg',
    '/games-images/hill-climb-img.jpg',
]

const GamesSection = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [loaded, setLoaded] = useState<boolean[]>(
        Array(images.length).fill(false)
    )
    const [isUserInteracting, setIsUserInteracting] = useState(false)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let rafId: number
        const speed = 0.8

        const animate = () => {
            if (!isUserInteracting) {
                container.scrollLeft += speed
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0
                }
            }
            rafId = requestAnimationFrame(animate)
        }

        animate()
        return () => cancelAnimationFrame(rafId)
    }, [isUserInteracting])

    // 🖱️ Drag-to-scroll
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let isDown = false
        let startX: number
        let scrollLeft: number

        const startDrag = (e: MouseEvent | TouchEvent) => {
            isDown = true
            setIsUserInteracting(true)
            startX = 'touches' in e ? e.touches[0].pageX : e.pageX
            scrollLeft = container.scrollLeft
        }

        const onDrag = (e: MouseEvent | TouchEvent) => {
            if (!isDown) return
            const x = 'touches' in e ? e.touches[0].pageX : e.pageX
            const walk = (startX - x) * 1.2
            container.scrollLeft = scrollLeft + walk
        }

        const endDrag = () => {
            if (!isDown) return
            isDown = false
            setTimeout(() => setIsUserInteracting(false), 1200)
        }

        // Mouse events
        container.addEventListener('mousedown', startDrag)
        container.addEventListener('mousemove', onDrag)
        container.addEventListener('mouseup', endDrag)
        container.addEventListener('mouseleave', endDrag)

        // Touch events
        container.addEventListener('touchstart', startDrag)
        container.addEventListener('touchmove', onDrag)
        container.addEventListener('touchend', endDrag)

        return () => {
            container.removeEventListener('mousedown', startDrag)
            container.removeEventListener('mousemove', onDrag)
            container.removeEventListener('mouseup', endDrag)
            container.removeEventListener('mouseleave', endDrag)
            container.removeEventListener('touchstart', startDrag)
            container.removeEventListener('touchmove', onDrag)
            container.removeEventListener('touchend', endDrag)
        }
    }, [])

    return (
        <section
            id="games"
            className="bg-background w-full overflow-hidden py-[80px]"
        >
            <div
                ref={containerRef}
                className="scrollbar-hide flex gap-3 overflow-x-scroll py-3"
            >
                {[...images, ...images].map((src, i) => (
                    <div
                        key={i}
                        className="relative size-[410px] w-full max-w-[410px] flex-shrink-0 overflow-hidden rounded-xl select-none"
                    >
                        {/* Skeleton Loader */}
                        {!loaded[i % images.length] && (
                            <div className="absolute inset-0 animate-pulse rounded-xl bg-gray-700" />
                        )}

                        <Image
                            src={src}
                            alt={`game-${i}`}
                            width={1500}
                            height={1500}
                            quality={100}
                            draggable={false}
                            className={`pointer-events-none h-full w-full object-cover transition-opacity duration-500 ${
                                loaded[i % images.length]
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }`}
                            onLoad={() =>
                                setLoaded((prev) => {
                                    const newState = [...prev]
                                    newState[i % images.length] = true
                                    return newState
                                })
                            }
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GamesSection
