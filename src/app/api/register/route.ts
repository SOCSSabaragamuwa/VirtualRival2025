import TeamRegistrationEmailTemplate from '@/components/email-templates/team-registration-email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { selectedGame, teamName, email, contactNumber, players } = body

        const parsedPlayers: string[] =
            typeof players === 'string'
                ? JSON.parse(players || '[]')
                : (players ?? [])

        if (!email) {
            return NextResponse.json(
                { error: 'email is required' },
                { status: 400 }
            )
        }

        const gameLabel =
            selectedGame === 'cod4'
                ? 'Call of Duty 4'
                : selectedGame === 'pubg'
                  ? 'PUBG Mobile'
                  : selectedGame

        await resend.emails.send({
            from: 'Virtual Rival <contact@virtualrival.lk>',
            to: [email],
            subject:
                'Registration Confirmed – Virtual Rival: Definitive Edition 2025',
            react: TeamRegistrationEmailTemplate({
                game: gameLabel,
                teamName,
                memberCount: parsedPlayers.length || 0,
            }),
        })

        const playersListHtml = parsedPlayers
            .map((p) => `<li>${p}</li>`)
            .join('')
        await resend.emails.send({
            from: 'Virtual Rival <contact@virtualrival.lk>',
            to: ['contact@virtualrival.lk'],
            subject: `New Team Registration – ${teamName}`,
            html: `
        <h2>New Team Registered</h2>
        <p><strong>Game:</strong> ${gameLabel}</p>
        <p><strong>Team Name:</strong> ${teamName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contactNumber}</p>
        <p><strong>Players:</strong></p>
        <ul>${playersListHtml}</ul>
      `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('register API error:', error)
        return NextResponse.json(
            { error: 'Failed to register team' },
            { status: 500 }
        )
    }
}
