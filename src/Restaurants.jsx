import React from 'react'
import Restaurant from './Restaurant' 

export default function Restaurants() {
	const restaurants = {"data":
		[
			{"id": 23, "name": "abishola-eats", "rating":"3.5", "image_url":"89dd5", "menu": [{"name":"stir-fry-pasta","price":"2100", "currency": "ngn"}]},
			{"id": 45, "name": "korede-spag", "rating":"3.5", "image_url":"0377dfd", "menu": [{"name":"vilage-rice","price":"1000", "currency": "ngn"}]}
		]
  }
  return (
    <div style={{ display:'flex'}}>
      {restaurants.data.map((restaurant) =>
        <Restaurant restaurant={restaurant} key={restaurant.id}/>
        )
      }
    </div>
  )
}
