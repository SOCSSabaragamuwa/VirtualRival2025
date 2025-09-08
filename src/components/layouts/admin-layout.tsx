import React from "react"

type AdminLayoutProps = {
    children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div>
            <p>Admin Layout</p>
            <div>{children}</div>
        </div>
    )
}

export default AdminLayout
