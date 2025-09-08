'use client'
import React, { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string
    loadingText?: string
    href?: string
    downloadUrl?: string
    iconSrc?: string | StaticImageData
    size?: 'small' | 'base' | 'large'
    isGlow?: boolean
    loading?: boolean
    onClick?: () => void
}

const PrimaryButton = ({
    text,
    loadingText,
    href,
    downloadUrl,
    iconSrc,
    size = 'base',
    isGlow,
    loading = false,
    onClick,
    ...props
}: PrimaryButtonProps) => {
    const content = (
        <>
            {loading ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
                iconSrc && (
                    <Image
                        src={iconSrc}
                        alt="icon"
                        width={42}
                        height={18}
                        className={cn(
                            size === 'base' && 'max-w-[18px] lg:max-w-[24px]',
                            size === 'large' && 'max-w-[24px] sm:max-w-[42px]'
                        )}
                    />
                )
            )}
            {loading ? loadingText : text}
        </>
    )

    const handleDownload = async () => {
        if (!downloadUrl) return
        try {
            const response = await fetch(downloadUrl)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = downloadUrl.split('/').pop() || 'file.pdf'
            document.body.appendChild(link)
            link.click()
            link.remove()
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error('Download failed:', error)
        }
    }

    // Define polygon clip paths for different sizes
    const clipPaths: Record<string, string> = {
        small: 'polygon(15px 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 15px 100%, 0 50%)',
        base: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)',
        large: 'polygon(25px 0, calc(100% - 25px) 0, 100% 50%, calc(100% - 25px) 100%, 25px 100%, 0 50%)',
    }
    const classes = cn(
        'relative flex w-fit items-center gap-3 px-6 font-semibold tracking-widest uppercase text-white',
        size === 'small' && 'py-2 text-sm',
        size === 'base' && 'py-3 text-sm sm:text-lg',
        size === 'large' && 'py-4 text-lg sm:text-2xl',
        isGlow && 'shadow-[0_0_25px_5px_rgba(209,2,37,0.9)]',
        loading && 'cursor-not-allowed opacity-70'
    )

    if (href) {
        return (
            <a
                href={href}
                onClick={loading ? () => {} : onClick}
                className={classes}
                style={{
                    backgroundColor: '#D10225',
                    clipPath: clipPaths[size],
                }}
            >
                {content}
            </a>
        )
    }

    return (
        <button
            onClick={
                loading ? undefined : downloadUrl ? handleDownload : onClick
            }
            disabled={loading}
            {...props}
            className={classes}
            style={{
                backgroundColor: '#D10225',
                clipPath: clipPaths[size],
            }}
        >
            {content}
        </button>
    )
}

export default PrimaryButton
