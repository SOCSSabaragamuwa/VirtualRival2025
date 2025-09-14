import LandingPageLayout from '@/components/layouts/landing-page-layout'
import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player'

const TrailerSection = () => {
    return (
        <section id="trailer" className="relative">
            <div className="absolute top-0 -z-10 h-[8%] w-full bg-[url('/images/trailer-bg-top.svg')] bg-[size:100%] bg-top bg-no-repeat"></div>
            <div className="absolute top-1/2 -z-10 h-[80%] w-full -translate-y-1/2 bg-[url('/images/trailer-bg-center.svg')] bg-left bg-no-repeat"></div>
            <div className="absolute bottom-0 -z-10 h-[8%] w-full bg-[url('/images/trailer-bg-bottom.svg')] bg-[size:100%] bg-bottom bg-no-repeat"></div>

            <LandingPageLayout>
                <div className="flex items-center justify-center">
                    <div className="aspect-video w-full max-w-[1024px] overflow-hidden rounded-2xl shadow-lg">
                        <ReactPlayer
                            src="/videos/trailer.mp4"
                            controls
                            playing
                            light="/images/trailer.svg"
                            playIcon={
                                <Image
                                    src="/icons/play-icon.svg"
                                    alt="play icon"
                                    width={80}
                                    height={80}
                                />
                            }
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: 'black' }}
                            className="lg:cursor-none"
                        />
                    </div>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default TrailerSection
