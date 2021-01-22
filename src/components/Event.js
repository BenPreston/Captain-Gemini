import React from 'react'
import { useParams } from 'react-router'

export default function Event() {
    const { id } = useParams()

    return (
        <div>
            <h1>This is Event {id}</h1>
        </div>
    )
}
