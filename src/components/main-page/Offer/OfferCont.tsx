import React from 'react'
import '../../../css/OfferCont.css'
import '../../../css/ProductBig.css'
import '../../../css/ProductSmall.css'
import OfferNav from './OfferNav'
import ProductItem from './ProductItem'
import image from '../../../images/slider1.png'
import products from './products.json'
import { Product } from '../../../interfaces/offer_product'
import PageSelect from './PageSelect'
import { useState } from 'react'

const OfferCont = () => {
   const [prods, setProds] = useState<Array<Product>>(products) 

   const returnProducts = (x:Product) => {
      const { date, type } = x.details
      const { city, country } = x.details.location

      return (
         <ProductItem 
               size={ x.size }
               name={ x.name }
               text={ x.text }
               stars={ x.stars }
               price={ x.price }
               img={ image }
               details={ 
                  {
                     date,
                     type,
                     location: {
                        city,
                        country
                     }
                  }
               }
         />
      )
   }

   return (
      <section className='offer-cont'>
         <OfferNav productArray={ prods } setProduct={ setProds } />

         <section className='products'>
            {
               prods.map((x:any, i:number) => (
                  <React.Fragment key={ i }>{ returnProducts(x) }</React.Fragment>
               ))
            }
         </section>
         
         <PageSelect />
      </section>
   ) 
}

export default OfferCont