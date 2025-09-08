import React from 'react'

type SectionHeaderProps = {
    title: string
    description: string
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
    return (
        <div className="flex flex-col items-center gap-4 text-center md:gap-8">
            <h2 className="text-3xl font-bold uppercase lg:text-4xl">
                {title}
            </h2>
            <p className="max-w-[900px] font-medium lg:text-xl">
                {description}
            </p>
        </div>
    )
}

export default SectionHeader
