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
            html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        })

        // confirmation email to user
        await resend.emails.send({
            from: 'Virtual Rival <contact@virtualrival.lk>',
            to: [email],
            subject: 'We received your inquiry 🎉',
            html: `
    <p>Hi ${name},</p>
    <p>Thanks for contacting <b>Virtual Rival</b>. We’ve received your inquiry and will get back to you soon.</p>
    <p>Best regards,<br/>Team Virtual Rival</p>
  `,
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
