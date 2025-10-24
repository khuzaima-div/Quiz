import React from 'react'
import './OnlineStore.css'

function OnlineStore({ image, title, price }) {

  // title ko limit karne ka logic
  const limitedTitle = title.length > 50 ? title.slice(0, 50) + "..." : title;

  return (
    <div className='Card'>
      <img src={image} alt={title} />
      <h4 className="product-title">{limitedTitle}</h4>
      <h5 >{price}</h5>
    </div>
  )
}

export default OnlineStore