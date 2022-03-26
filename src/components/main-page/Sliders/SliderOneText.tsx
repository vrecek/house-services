import React from 'react'
import Button from '../../REUSABLE/Button'
import { BiMap } from 'react-icons/bi'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { FaCity } from 'react-icons/fa'

const SliderOneText = () => {
   return (
      <section className='text'>
         <h2>Get yourself a new property</h2>
         <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh mauris, luctus non massa vitae, pharetra convallis sem. Proin posuere libero quis odio pellentesque congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eleifend</p>

         <Button text='See details' />

         <section>
            <div>
               <BiMap />
               <h3>44 countries</h3>
            </div>

            <div>
               <FaCity />
               <h3>Around 500 cities</h3>
            </div>

            <div>
               <BsFillHouseDoorFill />
               <h3>4k different houses</h3>
            </div>
         </section>

      </section>
   ) 
}

export default SliderOneText