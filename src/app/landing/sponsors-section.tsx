'use client'
import SectionHeader from '@/components/common/section-header'
import LandingPageLayout from '@/components/layouts/landing-page-layout'
import React from 'react'
import Image from 'next/image'

interface SponsorLogos {
    logoSrc: string
}

const sponsors: SponsorLogos[] = [
    {
        logoSrc: '/sponsors/boc.png',
    },
    {
        logoSrc: '/sponsors/Asset_1.png',
    },
    {
        logoSrc: '/sponsors/chello.png',
    },
    {
        logoSrc: '/sponsors/taproIt.png',
    },
    {
        logoSrc: '/sponsors/creative_maths.png',
    },
    {
        logoSrc: '/sponsors/jrc.png',
    },
]

const SponsorsSection = () => {
    return (
        <section id="sponsor" className="bg-background">
            <LandingPageLayout>
                <div className="flex w-full flex-col items-center gap-12 sm:gap-24">
                    <SectionHeader
                        title="Our Valued Sponsors"
                        description="The Virtual Rival Programme is made possible through the generous support of our sponsors and partners. Their commitment and collaboration help us deliver excellence, innovation, and growth while empowering participants to reach new heights. We are proud to recognize their vital role in driving our vision forward."
                    />

                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                        {sponsors.map((data, index) => (
                            <div
                                key={index}
                                className="group relative aspect-square min-h-[200px] w-full overflow-hidden rounded-lg bg-[#15151C] p-[20px]"
                            >
                                {/* Gradient Border Animation */}
                                <div className="from-primary-red/10 via-primary-red/50 to-primary-red/10 absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r bg-[length:200%_200%] bg-[position:top_right] transition-all duration-700 ease-in-out group-hover:bg-[position:bottom_left] hover:scale-105"></div>

                                <div className="absolute inset-[1.5px] rounded-lg bg-white"></div>

                                {/* Content */}
                                <div className="relative z-10 flex h-full w-full items-center justify-center p-4 hover:scale-105 hover:duration-400">
                                    <div className="relative h-full max-h-[180px] w-full max-w-[180px]">
                                        <Image
                                            src={data.logoSrc}
                                            alt={''}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default SponsorsSection
