import React from 'react'
import FooterLayout from '../layouts/footer-layout'
import Image from 'next/image'

const Footer = () => {
    return (
        <FooterLayout>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col justify-between gap-6 sm:flex-row">
                    <div className="flex flex-col gap-6">
                        <div className="min-h-[40px] sm:min-h-[80px]">
                            <Image
                                src="/images/footer-logo.svg"
                                alt="vr-logo"
                                width={120}
                                height={32}
                            />
                        </div>
                        <p className="text-justify sm:max-w-[600px] sm:text-left">
                            Virtual Rival is an electrifying inter-faculty
                            eSports competition hosted by the Society of
                            Computer Sciences, Sabaragamuwa University of Sri
                            Lanka.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-3"></div>
                    <div className="flex flex-col items-end gap-6">
                        <div className="min-h-[40px] sm:min-h-[80px]">
                            <Image
                                src="/images/footer-flag.svg"
                                alt="vr-logo"
                                width={120}
                                height={48}
                            />
                        </div>
                        <p className="text-justify sm:max-w-[600px] sm:text-right">
                            Virtual Rival is the ultimate clash of faculties,
                            bringing gamers together in a battle of skill and
                            pride. It’s more than competition — it’s teamwork,
                            strategy, and the spirit of our university.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="h-0.5 w-full rounded-full bg-white"></div>
                    <p className="text-center lg:text-2xl">
                        contact@virtualrival.lk
                    </p>
                    <div className="h-0.5 w-full rounded-full bg-white"></div>
                </div>
            </div>
        </FooterLayout>
    )
}

export default Footer
