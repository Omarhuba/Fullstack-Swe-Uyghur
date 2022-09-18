import React from 'react'
import { HomeCardItem } from './HomeCardItem'
import '../../Modules/card/HomeCard.scss'


export const HomeCard = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <HomeCardItem
              src='images/img-2.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Pictures'
              path='/album'
            />

            <HomeCardItem
              src='images/img-8.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='About'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <HomeCardItem
              src='images/img-4.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Products'
              path='/'
            />
            <HomeCardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Products'
              path='/football'
            />
            <HomeCardItem
              src='images/img-4.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Products'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
