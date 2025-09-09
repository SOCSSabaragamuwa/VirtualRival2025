'use client'

import GradientInput from '@/components/common/gradient-input'
import PrimaryButton from '@/components/common/primary-button'
import SectionHeader from '@/components/common/section-header'
import GameDropdown from '@/components/landing/registration-section/game-dropdown'
import LandingPageLayout from '@/components/layouts/landing-page-layout'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const TeamRegistrationSection = () => {
    const [selectedGame, setSelectedGame] = useState<string>('')
    const [playerCount, setPlayerCount] = useState<number>(0)
    const [teamName, setTeamName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [players, setPlayers] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const registrationEnd = new Date('2025-09-16T23:59:00')
    const [isOpen, setIsOpen] = useState(new Date() < registrationEnd)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsOpen(new Date() < registrationEnd)
        }, 1000)
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!isOpen) return null

    const handleGameSelect = (game: string) => {
        setSelectedGame(game)

        if (game === 'cod4') setPlayerCount(5)
        else if (game === 'pubg') setPlayerCount(4)
        else setPlayerCount(0)

        setPlayers(Array(playerCount).fill(''))
    }

    const handlePlayerChange = (index: number, value: string) => {
        const updated = [...players]
        updated[index] = value
        setPlayers(updated)
    }

    const validateForm = () => {
        if (!selectedGame) {
            toast.error('Please select a game.')
            return false
        }
        if (!teamName.trim()) {
            toast.error('Team name is required.')
            return false
        }
        if (!email.trim()) {
            toast.error('Email is required.')
            return false
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Invalid email address.')
            return false
        }
        if (!contactNumber.trim()) {
            toast.error('Contact number is required.')
            return false
        }
        if (playerCount > 0) {
            for (let i = 0; i < playerCount; i++) {
                if (!players[i] || !players[i].trim()) {
                    toast.error(`Player ${i + 1} name is required.`)
                    return false
                }
            }
        }
        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return
        setLoading(true)

        try {
            const params = new URLSearchParams({
                selectedGame,
                teamName,
                email,
                contactNumber,
                players: JSON.stringify(players),
            })

            const res = await fetch(
                `https://script.google.com/macros/s/AKfycbyL11F5kQikrGW0UVw2ZCVVcCdfyDNuiUksxCoQd-SWLXyATXe-aBNqsZb1TQweesoz3g/exec?${params.toString()}`
            )

            const result = await res.json()

            if (result.success) {
                toast.success('Team registered successfully!')
                setSelectedGame('')
                setPlayerCount(0)
                setTeamName('')
                setEmail('')
                setContactNumber('')
                setPlayers([])
            } else {
                toast.error(result.message || 'Something went wrong')
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Failed to register team')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section
            id="register"
            className="relative bg-[url('/images/countdown-bg.svg')] bg-cover bg-no-repeat"
        >
            <div className="absolute inset-0 -z-10 bg-[url('/images/registration-bg.svg')] bg-size-[100%] bg-top bg-no-repeat py-12 sm:py-32 lg:bg-bottom"></div>

            <LandingPageLayout>
                <div className="flex flex-col items-center gap-12">
                    <SectionHeader
                        title="Enter the arena"
                        description="Gather your squad, choose your game, and represent your faculty in the ultimate rivalry. This is your chance to play with pride and fight for glory."
                    />

                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full max-w-[900px] flex-col gap-6"
                    >
                        {/* Game Selection */}
                        <div className="flex flex-col gap-2">
                            <GameDropdown
                                selected={selectedGame}
                                onSelect={handleGameSelect}
                            />
                        </div>

                        {/* Team Details */}
                        <div className="flex w-full flex-col gap-4">
                            <p className="text-xl font-semibold tracking-widest uppercase">
                                Team&apos;s details
                            </p>
                            <GradientInput
                                placeholder="Enter Team Name*"
                                iconSrc={'/icons/user-group-icon.svg'}
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                            <GradientInput
                                placeholder="Email Address*"
                                iconSrc={'/icons/envelope-icon.svg'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <GradientInput
                                placeholder="Contact Number*"
                                iconSrc={'/icons/phone-icon.svg'}
                                value={contactNumber}
                                onChange={(e) =>
                                    setContactNumber(e.target.value)
                                }
                            />
                        </div>

                        {/* Players Details */}
                        {playerCount > 0 && (
                            <div className="flex w-full flex-col gap-4">
                                <p className="text-xl font-semibold tracking-widest uppercase">
                                    Players&apos; details
                                </p>
                                {Array.from({ length: playerCount }).map(
                                    (_, i) => (
                                        <GradientInput
                                            key={i}
                                            placeholder={`Enter Player ${String(
                                                i + 1
                                            ).padStart(2, '0')}*`}
                                            iconSrc={'/icons/user-icon.svg'}
                                            value={players[i] || ''}
                                            onChange={(e) =>
                                                handlePlayerChange(
                                                    i,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    )
                                )}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="mt-6">
                            <PrimaryButton
                                text="register & rival"
                                loadingText="registering..."
                                iconSrc={'/icons/fire-icon.svg'}
                                type="submit"
                                loading={loading}
                            />
                        </div>
                    </form>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default TeamRegistrationSection
