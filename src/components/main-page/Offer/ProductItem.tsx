import React from 'react'
import { Product } from '../../../interfaces/offer_product'
import ProductDetailIcons from './ProductDetailIcons'
import Button from '../../REUSABLE/Button'
import { AiFillStar } from 'react-icons/ai'

const ProductItem = ({ size, text, name, stars, price, img, details }:Product) => {
   return (
      <article className={ size }>
         <figure>
            <img src={ img } alt='image' />
         </figure>

         <section>
            <h1>{ name }</h1>

            {
               size === 'big' && <p>{ text }</p>
            }

            <ProductDetailIcons 
               location={ details.location }
               type={ details.type }
               date={ details.date }
            />

            <Button text='Inspect' />

            <div className='stars'>
               {
                  [...Array(stars)].map(( x,i ) => (
                     <AiFillStar key={ i } />
                  ))
               }
            </div>

            <h4 className={ details.type }>{ price }$</h4>
         </section>
      </article>
   ) 
}

export default ProductItem