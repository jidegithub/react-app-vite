import React from 'react'
import MatchCodeToImage from './MatchCodeToImage'

export default function Restaurant(props) {
    let restaurant = props.restaurant
  return (
    <div style={{ margin:'15px'}}>
        <p>{restaurant.name}</p>
        <p>{restaurant.rating}</p>
        <MatchCodeToImage code={restaurant.image_url} name={restaurant.name}/>
    </div>
  )
}
