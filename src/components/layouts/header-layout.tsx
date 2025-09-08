'use client'
import React from 'react'

type HeaderLayoutProps = {
    children: React.ReactNode
}

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
    return (
        <div className="fixed z-50 mx-auto w-full max-w-full bg-[#1E0005] px-6 py-4 sm:px-12 lg:px-[160px]">
            <div className="absolute bottom-0 left-0 h-[24px] w-[100px] translate-y-[90%] bg-[#1E0005] [clip-path:polygon(25%_0,75%_0,80%_0,75%_100%,0_100%,0_0)] sm:w-[200px] lg:w-[400px]"></div>
            <div className="absolute right-0 bottom-0 h-[24px] w-[100px] translate-y-[90%] scale-x-[-1] bg-[#1E0005] [clip-path:polygon(25%_0,75%_0,80%_0%,75%_100%,0_100%,0_0)] sm:w-[200px] lg:w-[400px]"></div>
            {children}
        </div>
    )
}

export default HeaderLayout
