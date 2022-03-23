import React from 'react'
import '../../../css/Header.css'
import { BsSearch } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { mainInputHandle } from '../../../interfaces/main_header_input'
import Button from '../../REUSABLE/Button'

const Header = () => {
   const styleInput = ( { e, type }:mainInputHandle ) => {
      const t = e.target as HTMLInputElement
      const del = t.parentElement!.children[3] as HTMLElement
      const label = t.parentElement!.children[2] as HTMLElement
      
      if(type === 'focus' || t.value) {
         label.style.top = '0'
         label.style.transform = 'translate(-50%,0)'
         del.style.opacity = '1'

         return
      }

      label.style.top = '50%'
      label.style.transform = 'translate(-50%, -50%)'
      del.style.opacity = '0'
   }

   const delInput = (e:React.FormEvent) => {
      const t = e.target as HTMLElement
      const inp = t.parentElement!.children[1] as HTMLInputElement
      const lab = t.parentElement!.children[2] as HTMLElement
      const del = t.parentElement!.children[3] as HTMLElement

      inp.value = ''
      lab.style.top = '50%'
      lab.style.transform = 'translate(-50%, -50%)'
      del.style.opacity = '0'
   }

   return (
      <header className='main-header'>
         <h1>Lorem ipsum dolor sit amet conqesteaur dolore</h1>

         <section className='input-text'>
            <span className='ic-srch'> <BsSearch /> </span>

            <input 
               onBlur={ (e) => styleInput({ e, type: 'blur' }) } 
               onFocus={ (e) => styleInput({ e, type: 'focus' }) } 
               type='text' 
               spellCheck='false'  
            />

            <label>Lorem ipsum dolor...</label>
            <span onClick={ delInput } className='ic-del'> <FaTimes /> </span>
         </section>

         <section className='buttons'>
            <Button text='Lorems ipsum' />
            <Button text='Dolore sit' />
         </section>  

      </header>
   )
}

export default Header