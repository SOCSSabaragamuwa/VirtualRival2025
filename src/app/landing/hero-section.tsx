'use client'

import React from 'react'
import LandingPageLayout from '../../components/layouts/landing-page-layout'
import Image from 'next/image'
import PrimaryButton from '@/components/common/primary-button'

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            <div className="absolute bottom-0 -z-10 min-h-[80vh] w-full bg-[url('/images/hero-bg.svg')] bg-contain bg-bottom bg-no-repeat"></div>

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 -z-20 h-full w-full translate-y-1 object-cover"
            >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
                <source src="/videos/hero-bg.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            <Image
                src={'/images/hero-ps-icons.svg'}
                alt="console icon"
                width={180}
                height={32}
                className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
            />

            <LandingPageLayout>
                <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-6">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h1 className="text-stroke max-w-[900px] text-4xl leading-[1.1] font-bold uppercase lg:text-6xl">
                            The Ultimate Inter-Faculty Gaming Showdown
                        </h1>
                        <p className="font-semibold">
                            Battle for glory, pride, and the championship crown.
                            This is your arena.
                        </p>
                    </div>

                    <PrimaryButton
                        text="join the rivaly"
                        size="large"
                        isGlow={true}
                        iconSrc={'/icons/game-console-icon.svg'}
                        onClick={() => {
                            const target = document.getElementById('countdown')
                            if (target) {
                                target.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                })
                            }
                        }}
                    />
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default HeroSection
