import React from 'react'
import '../../../css/OfferNav.css'
import { AiOutlineFieldTime, AiOutlineStar } from 'react-icons/ai'
import { FaCity } from 'react-icons/fa'
import { BsCurrencyDollar, BsSearch } from 'react-icons/bs'
import NavSelect from './NavSelect'
import { useState, useEffect } from 'react'

const OfferNav = () => {
   const [city, setCity] = useState<string>('')
   const [country, setCountry] = useState<string>('')
   useEffect(() => {

      const init = (() => {
         // SUCCESS
         window.navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${ latitude }&lon=${ longitude }`)
            const data = await res.json()

            setCity(data.address.city)
            setCountry(data.address.country)
         }, 
         
         // ERROR
         (err) => {
            if(err.code === 1) {
               setCity('---')
               setCountry('---')
            }
         })      
      })()

   }, [])
   
   return (
      <nav className='offer-nav'>
         <section className='user-city'>
            <h6>Your city: <span>{ city !== '---' ? city : 'UNKOWN' }</span> </h6>
            <h6>Your country: <span>{ country !== '---' ? country : 'UNKOWN' }</span> </h6>
         </section>

         <section className='wrap'>

            <section className='select'>

               <div className='wrap-two'>
                  {
                     city && country && (
                        <NavSelect 
                           icon={ <FaCity /> } 
                           options={ ['All', city, country] } 
                           action={ () => {} }
                        />
                     )
                  }

                  <NavSelect 
                     icon={ <AiOutlineFieldTime /> } 
                     options={ ['All', 'Newest', 'Oldest'] } 
                     action={ () => {} }
                  />
               </div>

               <div className='wrap-two'>
                  <NavSelect 
                     icon={ <BsCurrencyDollar /> } 
                     options={ ['All', 'Ascending', 'Descending'] } 
                     action={ () => {} }
                  />

                  <NavSelect 
                     icon={ <AiOutlineStar /> } 
                     options={ ['All', 'Most voted', 'Least voted'] } 
                     action={ () => {} }
                  />
               </div>
            </section>

            <section className='search'>
               <BsSearch />
               <input spellCheck='false' type='text' />
            </section>

         </section>

      </nav>
   )
}

export default OfferNav