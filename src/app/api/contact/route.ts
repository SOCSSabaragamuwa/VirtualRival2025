import ContactEmailTemplate from '@/components/email-templates/contact-email-template'
import ContactReplyEmailTemplate from '@/components/email-templates/contact-reply-email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json()

        await resend.emails.send({
            from: 'Virtual Rival <contact@virtualrival.lk>',
            to: ['contact@virtualrival.lk'],
            subject: `New Inquiry from ${name}`,
            react: ContactEmailTemplate({ name, email, phone, message }),
        })

        // confirmation email to user
        await resend.emails.send({
            from: 'Virtual Rival <contact@virtualrival.lk>',
            to: [email],
            subject: 'We received your inquiry 🎮',
            react: ContactReplyEmailTemplate({ name }),
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        )
    }
}
