'use client'
import React from 'react'
import Image from 'next/image'
import LandingPageLayout from '@/components/layouts/landing-page-layout'
import SectionHeader from '@/components/common/section-header'
import TimelineCard from '@/components/landing/pricing-section/timeline-card'

type TimelineDataType = {
    title: string
    date: string
    iconSrc: string
}

const timelineData: TimelineDataType[] = [
    {
        title: 'Registration Open',
        date: '2025-09-08',
        iconSrc: '/images/open.png',
    },
    {
        title: 'Registration Close',
        date: '2025-09-16',
        iconSrc: '/images/delete_user.png',
    },
    {
        title: 'Team Draw & Match Schedule',
        date: '2025-09-17',
        iconSrc: '/images/billboard.png',
    },
    {
        title: 'Virtual Rival Event Day',
        date: '2025-09-19',
        iconSrc: '/images/calendar.png',
    },
]

const PriceSection = () => {
    return (
        <section id="rules" className="bg-background">
            <LandingPageLayout>
                <div className="flex w-full flex-col items-center gap-12 sm:gap-24">
                    <SectionHeader
                        title="glory awaits the champions"
                        description="Beyond the competition, Virtual Rival celebrates skill, teamwork, and spirit. Every little victory here gets the spotlight it deserves."
                    />

                    <div className="flex w-full justify-center">
                        <Image
                            src="/images/price.png"
                            alt="Tournament Prizes"
                            width={1200}
                            height={500}
                            className="h-auto max-w-full"
                        />
                    </div>

                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {timelineData.map((data, index) => (
                            <TimelineCard
                                key={index}
                                title={data.title}
                                date={data.date}
                                iconSrc={data.iconSrc}
                            />
                        ))}
                    </div>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default PriceSection
