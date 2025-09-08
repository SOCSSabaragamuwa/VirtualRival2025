import React from 'react'
import LandingPageLayout from '../../components/layouts/landing-page-layout'
import Image from 'next/image'
import HighlightCard from '@/components/landing/about-us-section/hightlight-cart'

type HighlightDataType = {
    id: number
    title: string
    description: string
    icon: string
}

const eventHighlights: HighlightDataType[] = [
    {
        id: 1,
        title: 'Ultimate Bragging Rights',
        description:
            'Win the championship title and earn recognition as the top gaming team in the university.',
        icon: '/icons/event-highlights-icons/cup-icon.svg',
    },
    {
        id: 2,
        title: 'Thrilling Game Lineup',
        description:
            'Compete in a mix of tactical shooters, sports, and racing games for nonstop excitement.',
        icon: '/icons/event-highlights-icons/target-icon.svg',
    },
    {
        id: 3,
        title: 'Community & Spirit',
        description:
            'Meet new people, share strategies, and celebrate the love for gaming together.',
        icon: '/icons/event-highlights-icons/user-group-icon.svg',
    },
    {
        id: 4,
        title: 'Organised by Experts',
        description:
            'Professionally planned and managed by the Society of Computer Sciences, ensuring a smooth event.',
        icon: '/icons/event-highlights-icons/light-icon.svg',
    },
]

const AboutUsSection = () => {
    return (
        <section id="about-us" className="bg-background">
            <LandingPageLayout>
                <div className="grid gap-8 sm:grid-cols-3 lg:gap-16">
                    <div className="flex-shrink-0 xl:row-span-2">
                        <Image
                            src="/images/about-bg.svg"
                            alt="about us image"
                            width={432}
                            height={175}
                            className="h-auto w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-4 sm:col-span-2">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Where Skill Meets Strategy
                        </h2>
                        <p className="space-y-6 text-justify text-base leading-relaxed font-medium md:text-lg">
                            <span>
                                Virtual Rival is an electrifying inter-faculty
                                eSports competition hosted by the Society of
                                Computer Sciences, Sabaragamuwa University of
                                Sri Lanka.
                            </span>
                            <span>
                                This annual gaming showdown is more than just a
                                battle. It’s a celebration of teamwork,
                                strategy, and the competitive spirit of our
                                university. Whether you’re a casual challenger
                                or a competitive pro, Virtual Rival is your
                                chance to rise above, represent your faculty,
                                and make history.
                            </span>
                            <span>
                                Organized with professionalism and fairness,
                                Virtual Rival connects faculties, builds
                                community, and crowns the true champions of our
                                university.
                            </span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 min-[400px]:grid-cols-2 sm:col-span-3 lg:grid-cols-4 xl:col-span-2">
                        {eventHighlights.map(
                            ({ id, title, description, icon }) => (
                                <HighlightCard
                                    key={id}
                                    title={title}
                                    description={description}
                                    icon={icon}
                                />
                            )
                        )}
                    </div>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default AboutUsSection
