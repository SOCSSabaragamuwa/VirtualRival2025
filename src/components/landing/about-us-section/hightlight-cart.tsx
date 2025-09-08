import Image from 'next/image'
import React from 'react'

type HighlightCardProps = {
    id: number
    title: string
    description: string
    icon: string
}

const HighlightCard = ({
    title,
    description,
    icon,
}: Omit<HighlightCardProps, 'id'>) => (
    <div className="flex flex-col gap-6">
        <Image src={icon} alt={title} width={50} height={50} />
        <div className="flex flex-col gap-2">
            <h3 className="font-bold uppercase">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
        </div>
    </div>
)

export default HighlightCard
