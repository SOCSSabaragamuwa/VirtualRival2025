import React from 'react'

type LandingPageLayoutProps = {
    children: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
    return (
        <div className="mx-auto max-w-full px-6 py-12 sm:px-12 lg:px-[160px] lg:py-[80px]">
            {children}
        </div>
    )
}

export default LandingPageLayout
