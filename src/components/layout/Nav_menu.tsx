import React from 'react'
import '../../css/Nav_menu.css'
import { display_menu } from '../../interfaces/nav_menu_display'
import { useRef, useEffect } from 'react'
import { FiUserPlus, FiUserCheck } from 'react-icons/fi'
import { AiOutlineHome, AiOutlineDollarCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdOutlineLocalOffer, MdOutlineContactSupport } from 'react-icons/md'

const Nav_menu = ( props:display_menu ) => {
  const menu = useRef<HTMLElement>(null)

  useEffect(() => {
    const m = menu.current!
    props.clicked ? m.style.transform = 'translateX(0)' : m.style.transform = 'translateX(100%)'
  })

  return (
    <section ref={ menu } className='nav-menu'>
      <ol>
        <li> <AiOutlineHome /> Homepage </li>
        <li> <FiUserCheck /> Sign in </li>
        <li> <FiUserPlus /> Register </li>
        <li className='line'></li>
        <li> <AiOutlineDollarCircle /> Prices </li>
        <li> <MdOutlineLocalOffer /> Offer </li>
        <li className='line'></li>
        <li> <AiOutlineQuestionCircle /> About </li>
        <li> <MdOutlineContactSupport /> Contact </li>
      </ol>
    </section>
  )
}

export default Nav_menu