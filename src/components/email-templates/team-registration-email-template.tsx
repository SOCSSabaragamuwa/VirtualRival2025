import React from 'react'

type Props = {
    game: string
    teamName: string
    memberCount: number
}

export default function TeamRegistrationEmailTemplate({
    game,
    teamName,
    memberCount,
}: Props) {
    return (
        <div
            style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 16,
                color: '#222',
            }}
        >
            <p style={{ marginTop: 0 }}>Dear Team {teamName},</p>

            <p>
                Thank you for registering your team for{' '}
                <strong>Virtual Rival: Definitive Edition 2025</strong>,
                happening on <strong>September 19, 2025</strong> at Sabaragamuwa
                University of Sri Lanka. We are thrilled to welcome your team to
                this exciting competition! 🎮
            </p>

            <p style={{ marginBottom: 6 }}>
                ✅ <strong>Game Registered:</strong> {game}
            </p>
            <p style={{ marginBottom: 6 }}>
                ✅ <strong>Team Name:</strong> {teamName}
            </p>
            <p style={{ marginBottom: 6 }}>
                ✅ <strong>Team Members:</strong> {memberCount}
            </p>

            <p>
                To complete your registration, please note that there is a
                registration fee of <strong>LKR 100 per participant</strong>,
                which must be paid when entering the event premises on the
                competition day. This applies to every team member, including
                reserves.
            </p>

            <p>
                We sincerely thank you for joining us and supporting Virtual
                Rival: Definitive Edition 2025. Get ready for an unforgettable
                day of gaming, teamwork, and competition!
            </p>

            <p>
                Along with this email, please review the official Rules &
                Regulations:
                <br />
                <a href="https://virtualrival.lk/pdfs/virtual-rival-rules.pdf">
                    Download Rules & Regulations (PDF)
                </a>
            </p>

            <p>
                If you have any questions, please contact us at{' '}
                <a href="mailto:contact@virtualrival.lk">
                    contact@virtualrival.lk
                </a>
                .
            </p>

            <p style={{ marginBottom: 0 }}>
                Best regards,
                <br />
                <strong>Organizing Committee</strong>
                <br />
                Society of Computer Sciences
                <br />
                Sabaragamuwa University of Sri Lanka
            </p>
        </div>
    )
}
