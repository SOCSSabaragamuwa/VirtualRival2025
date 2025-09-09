'use client'

import React, { useEffect, useState } from 'react'
import HeaderLayout from '../layouts/header-layout'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import PrimaryButton from './primary-button'

type NavItemsType = {
    label: string
    href: string
}

const navItems: NavItemsType[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about-us' },
    { label: 'Games', href: '#games' },
    { label: 'Rules', href: '#rules' },
    { label: 'Contact', href: '#contact' },
]

const Header = () => {
    const [active, setActive] = useState('Home')
    const [isScrolling, setIsScrolling] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const sections = navItems
            .map((item) =>
                item.href !== '#' ? document.querySelector(item.href) : null
            )
            .filter(Boolean) as HTMLElement[]

        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrolling) return

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id')
                        const match = navItems.find(
                            (item) => item.href === `#${id}`
                        )
                        if (match) {
                            setActive(match.label)
                        }
                    }
                })
            },
            {
                threshold: 0.5,
            }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [isScrolling])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleScrollTo = (href: string, label: string) => {
        const target = document.querySelector(href) as HTMLElement
        if (target) {
            setIsScrolling(true)
            setActive(label)

            const headerOffset = 56
            const elementPosition =
                target.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })

            setTimeout(() => setIsScrolling(false), 700)
        }
        setIsMenuOpen(false)
    }

    return (
        <HeaderLayout>
            <div className="flex w-full items-center justify-between">
                <Image
                    src="/logo/vr-logo.svg"
                    alt="vr-logo"
                    width={90}
                    height={32}
                />

                {/* Desktop Nav */}
                <nav className="relative hidden items-center space-x-8 text-xs font-medium uppercase lg:flex">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() =>
                                handleScrollTo(item.href, item.label)
                            }
                            className="relative px-2 py-2 text-sm font-bold tracking-widest text-white uppercase transition-colors"
                        >
                            <span
                                className={`transition-colors ${
                                    active === item.label
                                        ? 'text-primary-red'
                                        : 'text-white'
                                }`}
                            >
                                {item.label}
                            </span>

                            {active === item.label && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="absolute top-[80%] left-1/2 -translate-x-1/2"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                    style={{ width: 30, height: 32 }}
                                >
                                    <Image
                                        src="/icons/nav-indicator.svg"
                                        alt="nav-indicator"
                                        width={120}
                                        height={32}
                                    />
                                </motion.div>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <PrimaryButton
                        text="register now"
                        size="small"
                        onClick={() => handleScrollTo('#register', 'Register')}
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="bg-primary-red rounded-md p-2 text-white lg:hidden"
                >
                    {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 bg-black/90 text-white backdrop-blur-md"
                        >
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-6 right-6 text-white"
                            >
                                <FiX size={28} />
                            </button>

                            {navItems.map((item) => (
                                <motion.button
                                    key={item.href}
                                    onClick={() =>
                                        handleScrollTo(item.href, item.label)
                                    }
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-2xl font-thin tracking-widest uppercase"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <PrimaryButton
                                text="register now"
                                size="base"
                                onClick={() =>
                                    handleScrollTo('#register', 'Register')
                                }
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </HeaderLayout>
    )
}

export default Header
