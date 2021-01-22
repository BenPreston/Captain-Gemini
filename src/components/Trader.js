import React from 'react'
import { useParams } from 'react-router'

export default function Trader() {
    const { id } = useParams()

    return (
        <div>
            <h1>This is trader {id}</h1>
        </div>
    )
}
