import React from 'react'
import Header from '@/components/common/header'
import HeroSection from './landing/hero-section'
import AboutUsSection from './landing/about-us-section'
import CountDownSection from './landing/count-down-section'
import GamesSection from './landing/games-section'
import RulesSection from './landing/rules-section'
import PriceSection from './landing/price-section'
import TrailerSection from './landing/trailer-section'
import CustomCursor from '@/components/animation/custom-cursor'
import Footer from '@/components/common/footer'
import ContactSection from './landing/contact-section'
import TeamRegistrationSection from './landing/team-registration-section'

const LandingPage = () => {
    return (
        <div className="lg:cursor-none">
            <div>
                <Header />
            </div>

            <main>
                <CustomCursor />
                <HeroSection />
                <AboutUsSection />
                <CountDownSection targetDate={'2025-09-19'} />
                <GamesSection />
                <RulesSection />
                <TrailerSection />
                <PriceSection />
                <TeamRegistrationSection />
                <ContactSection />
                <Footer />
            </main>
        </div>
    )
}

export default LandingPage
