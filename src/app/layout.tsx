import type { Metadata, Viewport } from 'next'
import { Chakra_Petch } from 'next/font/google'
import './globals.css'
import Preloader from '@/components/common/preloader'
import { Toaster } from 'react-hot-toast'

const chakraPetch = Chakra_Petch({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Virtual Rival',
    description: 'Virtual rival definitive edition',
    icons: {
        icon: '/favicon.jpg',
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${chakraPetch.className}`}>
            <body>
                <Preloader />
                {children}
                <Toaster position="top-center" />
            </body>
        </html>
    )
}
