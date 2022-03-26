import React from 'react'
import { ReasonCard } from '../../../interfaces/reason_card'
import { BsChevronExpand } from 'react-icons/bs'

const Card = ({ icon, text, title }:ReasonCard) => {
   const expandDesc = (e:React.MouseEvent) => {
      const t = e.target as HTMLElement
      const p = t.parentElement!.children[3] as HTMLElement
      
      p.classList.toggle('expand')

      if(p.classList.contains('expand')) {
         p.style.height = 'auto'
         const w = p.clientHeight

         p.style.height = '0px'

         setTimeout(() => {
            p.style.height = `${ w }px`
            p.style.padding = '1.5em 0'
         }, 5);

         return
      }

      p.style.height = '0px'
   }

   return (
      <div>
         <span onClick={ expandDesc }> <BsChevronExpand /> </span> 

         { icon }
         <h5>{ title }</h5>
         <p>{ text }</p>
      </div>
   ) 
}

export default Card