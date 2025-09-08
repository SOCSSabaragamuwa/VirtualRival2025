'use client'
import React from 'react'

type FooterLayoutProps = {
    children: React.ReactNode
}

const FooterLayout = ({ children }: FooterLayoutProps) => {
    return (
        <footer>
            <div className="relative mx-auto w-full max-w-full bg-[#15151C] px-6 py-[80px] sm:px-12 lg:px-[160px]">
                <div className="absolute top-0 left-0 h-[24px] w-[100px] -translate-y-full scale-x-[-1] rotate-180 bg-[#15151C] [clip-path:polygon(25%_0,75%_0,80%_0%,75%_100%,0_100%,0_0)] sm:w-[200px] lg:w-[400px]"></div>
                <div className="absolute top-0 right-0 h-[24px] w-[100px] -translate-y-full rotate-180 bg-[#15151C] [clip-path:polygon(25%_0,75%_0,80%_0,75%_100%,0_100%,0_0)] sm:w-[200px] lg:w-[400px]"></div>
                {children}
            </div>
        </footer>
    )
}

export default FooterLayout
