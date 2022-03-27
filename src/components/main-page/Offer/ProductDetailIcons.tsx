import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { GiBuyCard } from 'react-icons/gi'
import { ProductDetails } from '../../../interfaces/offer_product'

const ProductDetailIcons = ({ location, date, type }:ProductDetails) => {
   const hoverLocation = (e:React.MouseEvent, evtype:'hover' | 'out') => {
      const t = e.target as HTMLElement

      if(evtype === 'hover') {
         const div = document.createElement('div')
         const h1 = document.createElement('h6')
         const h2 = document.createElement('h6')

         h1.appendChild(document.createTextNode(`Country : ${ location.country }`))
         h2.appendChild(document.createTextNode(`City : ${ location.city }`))
         div.append(h1, h2)
         t.appendChild(div)

         return
      }

      t.children[1].remove()
   }

   const hoverTime = (e:React.MouseEvent, evtype:'hover' | 'out') => {
      const t = e.target as HTMLElement

      if(evtype === 'hover') {
         const div = document.createElement('div')
         const h1 = document.createElement('h6')

         h1.appendChild(document.createTextNode(`Built : ${ date }`))
         div.appendChild(h1)
         t.appendChild(div)

         return
      }

      t.children[1].remove()
   }

   const hoverType = (e:React.MouseEvent, evtype:'hover' | 'out') => {
      const t = e.target as HTMLElement

      if(evtype === 'hover') {
         const div = document.createElement('div')
         const h1 = document.createElement('h6')
         const h2 = document.createElement('h6')

         h1.className = 'centered'
         h1.appendChild(document.createTextNode(type))

         if(type === 'rent') h2.appendChild(document.createTextNode('Pay monthly'))
         else h2.appendChild(document.createTextNode('Pay full price'))

         div.appendChild(h1)
         div.appendChild(h2)
         t.appendChild(div)

         return
      }

      t.children[1].remove()
   }

   return (
      <div className='product-details-info'>
         <span 
            onMouseOut={ (e) => hoverLocation(e, 'out') } 
            onMouseEnter={ (e) => hoverLocation(e, 'hover') }> 
         <MdLocationOn /> 
         </span>

         <span
            onMouseOut={ (e) => hoverTime(e, 'out') } 
            onMouseEnter={ (e) => hoverTime(e, 'hover') }> 
         <BiTimeFive /> 
         </span>

         <span
            onMouseOut={ (e) => hoverType(e, 'out') } 
            onMouseEnter={ (e) => hoverType(e, 'hover') }> 
         <GiBuyCard /> 
         </span>
      </div>
   )
}

export default ProductDetailIcons