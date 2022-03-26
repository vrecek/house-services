import React from 'react'
import { offerSelect } from '../../../interfaces/offer_select'

const NavSelect = ({ icon, options, action }:offerSelect) => {
   return (
      <div className='select-div'>
         { icon }

         <select>
            {
               options.map(( x:string, i:number ) => (
                  <option key={ i }>{ x }</option>
               ))
            }
         </select>
      </div>
   )
}

export default NavSelect