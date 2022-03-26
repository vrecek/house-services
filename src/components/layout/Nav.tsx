import React from 'react'
import '../../css/Nav.css'
import logo from '../../images/logo.png'
import Nav_menu from './Nav_menu'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { FiUserPlus, FiUserCheck } from 'react-icons/fi'
import { useState } from 'react'

const Nav = () => {
   const [theme, setTheme] = useState('light')
   const [displayMenu, setDisplayMenu] = useState(false)
   enum switchTheme {
      light = 'dark',
      dark = 'light'
   }

   const changeMode = () => {
      const t:string = switchTheme[theme as switchTheme]

      document.body.className = t
      setTheme(t)
   }

   const showMenu = (e:React.MouseEvent<EventTarget>) => {
      const ev = e.target as HTMLElement
      const children:Array<HTMLElement> = Array.from(ev.children as HTMLCollectionOf<HTMLElement>)
      const switchVal:boolean = !displayMenu

      const top = switchVal ? [50, 50, 50] : [20, 50, 80]
      const rotate = switchVal ? [135, 135, 45] : [0, 0, 0]
      
      for(let i = 0; i < children.length; i++) {
         children[i].style.top = `${ top[i] }%`
         children[i].style.transform = `translateY(-50%) rotate(${ rotate[i] }deg)`
         children[i].classList.toggle('active')
      }

      setDisplayMenu(switchVal)
   }

   return (
      <nav className='layout-nav'>
         <figure>
            <img src={ logo } alt='logo' />
         </figure>

         <section className='layout-sect'>
            <ul>
               <li>Offer</li>
               <li>Prices</li>
               <li>Contact</li>
            </ul>

            <div className='icons'>
               <span data-text='Change theme' onClick={ changeMode }> 
                  { theme === 'light' ? <MdLightMode /> : <MdDarkMode /> }
               </span>
               <span data-text='Register'> <FiUserPlus /> </span>
               <span data-text='Sign in'> <FiUserCheck /> </span>
            </div>

            <div onClick={ showMenu } className='menu'>
               <span></span>
               <span></span>
               <span></span>
            </div>

            <Nav_menu clicked={ displayMenu } />
         </section>
      </nav>
   ) 
}

export default Nav