import PrimaryButton from '@/components/common/primary-button'
import SectionHeader from '@/components/common/section-header'
import LandingPageLayout from '@/components/layouts/landing-page-layout'
import React from 'react'

const RulesSection = () => {
    return (
        <section
            id="rules"
            className="bg-[url('/images/rules-bg.svg')] bg-size-[100%] bg-top bg-no-repeat py-12 sm:py-32"
        >
            <LandingPageLayout>
                <div className="flex flex-col items-center gap-8">
                    <SectionHeader
                        title="Play Fair. Play Hard."
                        description="Every rivalry is built on fair play. To keep the
                        competition exciting and equal for everyone, all players
                        must follow the official rules and guidelines. From team0.
                        eligibility to gameplay conduct, these regulations
                        ensure a smooth, professional, and enjoyable experience
                        for all faculties."
                    />

                    <PrimaryButton
                        text="game rules"
                        loadingText="downloading..."
                        downloadUrl="/pdfs/vr-game-rules.pdf"
                        iconSrc="/icons/rules-icon.svg"
                    />
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default RulesSection
