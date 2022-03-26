import React from 'react'
import '../../../css/Choose.css'
import Tile from './Tile'
import property from '../../../images/slider1.png'
import interior from '../../../images/rslider3.png'

const Choose = () => {
   return (
      <section className='choose-cont'>
         <Tile title='Properties' image={ property } text='' />
         <Tile title='Interiors' image={ interior } text='' />
      </section>
   )
}

export default Choose