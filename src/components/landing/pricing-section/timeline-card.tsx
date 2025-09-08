import Image, { StaticImageData } from 'next/image'

type TimelineCardProps = {
    title: string
    date: string
    iconSrc: string | StaticImageData
}

const TimelineCard = ({ title, date, iconSrc }: TimelineCardProps) => {
    return (
        <div className="group relative h-auto w-auto overflow-hidden rounded-lg bg-[#15151C] p-[20px]">
            {/* Gradient Border Animation */}
            <div className="from-primary-red/10 via-primary-red/50 to-primary-red/10 absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r bg-[length:200%_200%] bg-[position:top_right] transition-all duration-700 ease-in-out group-hover:bg-[position:bottom_left]"></div>

            {/* Inner background (to mask center, so only border shows) */}
            <div className="absolute inset-[1.5px] rounded-lg bg-[#15151C]"></div>

            {/* Content */}
            <div className="relative z-10">
                <Image src={iconSrc} alt={title} width={50} height={50} />
                <div className="mt-6 sm:mt-8 lg:mt-24">
                    <h3 className="mb-2 font-bold uppercase">{title}</h3>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default TimelineCard
