import React from 'react'
import Header from './Header/Header'
import SliderOne from './Sliders/SliderOne'
import SliderTwo from './Sliders/SliderTwo'
import Choose from './Choose/Choose'
import Subscribe from './Subscribe/Subscribe'
import ReasonsCont from './Reasons/ReasonsCont'
import OfferCont from './Offer/OfferCont'

const MAIN_PAGE = () => {
   return (
      <>
         <Header />

         <SliderOne />
         <SliderTwo />

         <Choose />

         <OfferCont />

         <Subscribe />

         <ReasonsCont />
      </>
   )
}

export default MAIN_PAGE