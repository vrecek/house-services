import React from 'react'
import { ButtonType } from '../../interfaces/button_interface'

const Button = ({ text, cname, additional, action }:ButtonType) => {
   return (
      <button onClick={ action } className={ cname }>
         <p>{ text }</p>
         <span>
            { additional }
         </span>
      </button>
   )
}

export default Button