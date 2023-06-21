import React from 'react'

export default function MatchCodeToImage({code, name}) {
    const path = `/public/restaurants-images/${code}.jpg`
  return (
    <img src={path} alt={name} />
  )
}
