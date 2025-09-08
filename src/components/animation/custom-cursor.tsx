'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const moveHandler = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const hoverStart = () => setIsHovering(true)
        const hoverEnd = () => setIsHovering(false)

        const hoverTargets = document.querySelectorAll(
            'a, button, input, textarea, [data-cursor="hover"]'
        )
        hoverTargets.forEach((el) => {
            el.addEventListener('mouseenter', hoverStart)
            el.addEventListener('mouseleave', hoverEnd)
        })

        window.addEventListener('mousemove', moveHandler)

        return () => {
            window.removeEventListener('mousemove', moveHandler)
            hoverTargets.forEach((el) => {
                el.removeEventListener('mouseenter', hoverStart)
                el.removeEventListener('mouseleave', hoverEnd)
            })
        }
    }, [])

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
            animate={{
                x: position.x - 12,
                y: position.y - 12,
                scale: isHovering ? 2 : 1,
            }}
            transition={{ type: 'spring', stiffness: 1000, damping: 100 }}
        >
            <div
                className={`bg-primary-red/30 h-6 w-6 rounded-full border-2 mix-blend-difference ${isHovering ? 'border-white' : 'border-primary-red'}`}
            />
        </motion.div>
    )
}

export default CustomCursor
