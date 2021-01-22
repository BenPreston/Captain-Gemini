import React from 'react'
import { useParams } from 'react-router'

export default function BoatRoute () {
  const { id } = useParams()

  return (
        <div>
            <h1>BoatRoute {id}</h1>
        </div>
  )
}
