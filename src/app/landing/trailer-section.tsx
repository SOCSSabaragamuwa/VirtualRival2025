import LandingPageLayout from '@/components/layouts/landing-page-layout'
import Image from 'next/image'
import React from 'react'

const TrailerSection = () => {
    return (
        <section id="trailer" className="relative">
            {/* bg */}
            <div className="bg-[size: 100%] absolute top-0 -z-10 h-[8%] w-full bg-[url('/images/trailer-bg-top.svg')] bg-top bg-no-repeat"></div>
            <div className="absolute top-1/2 -z-10 h-[80%] w-full -translate-y-1/2 bg-[url('/images/trailer-bg-center.svg')] bg-left bg-no-repeat"></div>
            <div className="bg-[size: 100%] absolute bottom-0 -z-10 h-[8%] w-full bg-[url('/images/trailer-bg-bottom.svg')] bg-bottom bg-no-repeat"></div>

            <LandingPageLayout>
                <div className="flex items-center justify-center">
                    <Image
                        src={'/images/trailer.svg'}
                        alt="trailer image"
                        width={600}
                        height={600}
                        className="w-full max-w-[1024px]"
                    />
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default TrailerSection
