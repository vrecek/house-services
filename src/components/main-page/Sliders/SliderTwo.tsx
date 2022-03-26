import React from 'react'
import '../../../css/SliderTwo.css'
import Button from '../../REUSABLE/Button'
import SliderTwoRadios from './SliderTwoRadios'
import { useRef } from 'react'
import s1 from '../../../images/rslider1.png'
import s2 from '../../../images/rslider2.png'
import s3 from '../../../images/rslider3.png'
import s4 from '../../../images/rslider4.png'

const SliderTwo = () => {
   const cont = useRef<HTMLDivElement>(null)

   return (
      <section className='slider-two'>
         <article>
            <h1>Design your own interior</h1>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh mauris, luctus non massa vitae, pharetra convallis sem. Proin posuere libero quis odio pellentesque congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eleifend sem nec nunc molestie fermentum</p>

            <Button text='Try it yourself' />
         </article>

         <figure>
            <SliderTwoRadios reference={ cont } imagesNum={ 4 } />

            <div ref={ cont }>
               <img src={ s4 } />

               <img src={ s1 } />
               <img src={ s2 } />
               <img src={ s3 } />
               <img src={ s4 } />

               <img src={ s1 } />
            </div>    
         </figure>
      </section>
   )
}

export default SliderTwo