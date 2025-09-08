import Link from "next/link"
import React from "react"

const NotFound = () => {
    return (
        <div>
            <h2>NotFound</h2>
            <p>Could not find the requested resource</p>
            <Link href={"/"}>Return to home</Link>
        </div>
    )
}

export default NotFound
