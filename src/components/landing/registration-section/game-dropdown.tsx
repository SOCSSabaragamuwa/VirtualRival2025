'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type GameDropdownProps = {
    selected: string
    onSelect: (game: string) => void
}

const games = [
    { id: 'cod4', label: 'Call of Duty 4' },
    { id: 'pubg', label: 'PUBG Mobile' },
]

const GameDropdown = ({ selected, onSelect }: GameDropdownProps) => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const selectedGame = games.find((g) => g.id === selected)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div ref={dropdownRef} className="relative w-full">
            {/* Wrapper with gradient border */}
            <div
                className="group relative flex cursor-pointer items-center rounded-lg py-3 pr-6 pl-6 lg:py-5 lg:pl-8"
                onClick={() => setOpen((prev) => !prev)}
            >
                {/* Gradient Border */}
                <div className="from-primary-red/50 group-focus-within:from-primary-red/50 group-focus-within:to-primary-red/100 absolute inset-0 rounded-lg border border-none border-transparent bg-gradient-to-r to-transparent bg-[length:200%_200%] transition-all duration-700 ease-in-out"></div>

                <Image
                    src={'/icons/game-console-icon.svg'}
                    alt="game console icon"
                    width={28}
                    height={24}
                    className="absolute top-1/2 left-4 z-10 max-w-[18px] -translate-y-1/2 lg:max-w-[26px]"
                />

                <p className="relative z-10 w-full pl-6 text-white lg:text-lg">
                    {selectedGame ? selectedGame.label : 'Select the Game*'}
                </p>

                <Image
                    src={'/icons/nav-indicator.svg'}
                    alt="dropdown arrow"
                    width={18}
                    height={24}
                    className={`absolute top-1/2 right-4 z-10 max-w-[18px] -translate-y-1/2 transition-transform duration-300 lg:max-w-[24px] ${
                        open ? 'rotate-0' : 'rotate-180'
                    }`}
                />
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 z-[99] mt-2 w-full overflow-hidden rounded-lg bg-[#1E1E27] shadow-lg"
                    >
                        {games.map((game) => (
                            <li
                                key={game.id}
                                className="hover:bg-primary-red/20 flex cursor-pointer items-center gap-3 px-6 py-4 text-white"
                                onClick={() => {
                                    onSelect(game.id)
                                    setOpen(false)
                                }}
                            >
                                {game.label}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}

export default GameDropdown
