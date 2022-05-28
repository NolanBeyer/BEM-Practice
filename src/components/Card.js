import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='container'>
        <div className='card'>
          <img
            src='https://sportsmintmedia.com/wp-content/uploads/2021/07/Caesars-Entertainment-secure-naming-rights-of-the-Saints-iconic-Superdome.jpg'
            alt=''
            className='card__image'
          />
          <h2 className='card__title'>Saints Stadium</h2>
          <p className='card__description'>
            A drone shot looking from the top of the Caesars Superdome in New
            Orleans Louisiana.
          </p>
          <button className='card__button'>More info</button>
        </div>
      </div>
    </div>
  )
}

export default Card
