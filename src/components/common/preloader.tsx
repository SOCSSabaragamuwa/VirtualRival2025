'use client'
import { useEffect, useState } from 'react'

const Preloader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate a loading delay or wait for window load
        const handleLoad = () => {
            setTimeout(() => setLoading(false), 1200) // fade after 1.2s
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
            return () => window.removeEventListener('load', handleLoad)
        }
    }, [])

    if (!loading) return null

    return (
        <div className="bg-background fixed inset-0 z-[9999] flex items-center justify-center lg:cursor-none">
            <div className="border-primary-red h-16 w-16 animate-spin rounded-full border-4 border-t-transparent"></div>
        </div>
    )
}

export default Preloader
