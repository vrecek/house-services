import React from 'react'
import '../../../css/OfferNav.css'
import { AiOutlineStar } from 'react-icons/ai'
import { FaCity } from 'react-icons/fa'
import { BsCurrencyDollar, BsSearch } from 'react-icons/bs'
import { GiBuyCard } from 'react-icons/gi'
import NavSelect from './NavSelect'
import { Product } from '../../../interfaces/offer_product'
import { useState, useEffect } from 'react'

const OfferNav = (props:{ productArray:Array<Product>, setProduct:React.Dispatch<React.SetStateAction<Product[]>> }) => {
   const [userLocation, setUserLocation] = useState<{ city: string, country: string }>()
   const [originalProds, setOriginalProds] = useState<Array<Product>>([...props.productArray])
   const p = [...props.productArray]
 
   useEffect(() => {

      const init = (() => {
         // SUCCESS
         window.navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${ latitude }&lon=${ longitude }`)
            const data = await res.json()

            setUserLocation({
               city: data.address.city || data.address.county,
               country: data.address.country
            })
         }, 
         
         // ERROR
         (err) => {
            if(err.code === 1) {
               setUserLocation({
                  city: '---',
                  country: '---'
               })
            }
         })      
      })()

   }, [])

   function shuffle(array:any) {
      let currentIndex = array.length, randomIndex;
    
      while (currentIndex != 0) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
   }

   // english only
   const filterLocation = (e:React.ChangeEvent) => {
      const t = e.target as HTMLInputElement

      if(t.value === '---') return

      const ind = Array.from(t.children).map((x:any) => x.value)

      switch( ind.indexOf(t.value) ) {
         case 0:
            props.setProduct(originalProds)
         break;

         case 1:
            const filterCity = originalProds.filter(x => x.details.location.city === userLocation?.city)
            props.setProduct(filterCity)
         break;

         case 2:
            const filterCountry = originalProds.filter(x => x.details.location.country === userLocation?.country)
            props.setProduct(filterCountry)
         break;

         default: return
      }
   }

   const filterType = (e:React.ChangeEvent) => {
      const t = e.target as HTMLInputElement

      if(t.value === 'All') {
         props.setProduct(originalProds)
         return
      }

      const val = t.value.split(' ')[1].toString()

      const filtered = originalProds.filter(x => x.details.type === val)
      props.setProduct(filtered)
   }

   const filterCost = (e:React.ChangeEvent) => {
      const t = e.target as HTMLInputElement

      if(t.value === 'All') {
         props.setProduct(shuffle(p))
         return

      }else if(t.value === 'Ascending') {
         p.sort((a, b) => {
            return a.price - b.price
         })

      }else if(t.value === 'Descending') {
         p.sort((a, b) => {
            return b.price - a.price
         })
      }

      props.setProduct(p)
   }

   const filterStars = (e:React.ChangeEvent) => {
      const t = e.target as HTMLInputElement

      if(t.value === 'All') {
         props.setProduct(shuffle(p))
         return

      }else if(t.value === 'Most voted') {
         p.sort((a, b) => {
            return b.stars - a.stars
         })

      }else if(t.value === 'Least voted') {
         p.sort((a, b) => {
            return a.stars - b.stars
         })
      }

      props.setProduct(p)
   }
   
   return (
      <nav className='offer-nav'>
         <section className='user-city'>
            <h6>
               Your city: 
               <span>
                  { 
                     userLocation?.city && userLocation.city !== '---' ? userLocation.city : 'UNKOWN' 
                  }
               </span> 
            </h6>

            <h6>
               Your country: 
               <span>
                  { 
                     userLocation?.country && userLocation?.country !== '---' ? userLocation.country : 'UNKOWN' 
                  }
               </span> 
            </h6>
         </section>

         <section className='wrap'>

            <section className='select'>

               <div className='wrap-two'>
                  {
                     userLocation && userLocation.city && userLocation.country && (
                        <NavSelect 
                           icon={ <FaCity /> } 
                           options={ ['All', userLocation.city, userLocation.country] } 
                           action={ filterLocation }
                        />
                     )
                  }

                  <NavSelect 
                     icon={ <GiBuyCard /> } 
                     options={ ['All', 'For rent', 'For sale'] } 
                     action={ filterType }
                  />
               </div>

               <div className='wrap-two'>
                  <NavSelect 
                     icon={ <BsCurrencyDollar /> } 
                     options={ ['All', 'Ascending', 'Descending'] } 
                     action={ filterCost }
                  />

                  <NavSelect 
                     icon={ <AiOutlineStar /> } 
                     options={ ['All', 'Most voted', 'Least voted'] } 
                     action={ filterStars }
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