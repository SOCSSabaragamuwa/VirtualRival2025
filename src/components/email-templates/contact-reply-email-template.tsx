type ContactReplyEmailTemplateProps = {
    name: string
}

const ContactReplyEmailTemplate = ({
    name,
}: ContactReplyEmailTemplateProps) => {
    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px',
                color: '#333',
            }}
        >
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Hi {name},</p>

            <p>
                Thanks for contacting{' '}
                <span style={{ color: '#E60023', fontWeight: 'bold' }}>
                    Virtual Rival
                </span>
                . We’ve received your inquiry and will get back to you soon.
            </p>

            <p style={{ marginTop: '20px' }}>
                Best regards,
                <br />
                Organizing Committee
                <br />
                Society of Computer Sciences
                <br />
                Sabaragamuwa University of Sri Lanka
            </p>
        </div>
    )
}

export default ContactReplyEmailTemplate
