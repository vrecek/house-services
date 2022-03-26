import React from 'react'
import '../../../css/OfferCont.css'
import OfferNav from './OfferNav'
import OfferSmall from './OfferSmall'

const OfferCont = () => {
   // https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=LAT&lon=LON

   return (
      <section className='offer-cont'>
         <OfferNav />

         <OfferSmall />
      </section>
   ) 
}

export default OfferCont