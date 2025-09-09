'use client'
import { useEffect, useState } from 'react'

const Preloader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setLoading(false), 8000)
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            {/* Background video */}
            <video
                autoPlay
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-scale-down lg:object-cover"
            >
                <source src="/videos/preloader.mp4" type="video/mp4" />
                <source src="/videos/preloader.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Preloader
