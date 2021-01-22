import React from 'react'
import { useParams } from 'react-router'

export default function Boat() {
    const { id } = useParams()

    return (
        <div>
            <h1>This is boat {id}</h1>
        </div>
    )
}
