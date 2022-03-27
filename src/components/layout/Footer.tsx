import React from 'react'
import '../../css/Footer.css'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
   return (
      <footer>
         <section className='social'>
            <h1>Social media</h1>
            <div>
               <span> <AiFillFacebook /> </span>
               <span> <FaGithubSquare /> </span>
               <span> <AiFillLinkedin /> </span>
               <span> <AiFillInstagram /> </span>
               <span> <AiFillYoutube /> </span>
            </div>
         </section>

         <section className='lists'>
            <ul>
               <li className='first'>Links</li>
               <li>Lorem ipsum</li>
               <li>Lorem ipsum</li>
               <li>Lorem ipsum</li>
               <li>Lorem ipsum</li>
            </ul>

            <ul>
               <li className='first'>Our Policy</li>
               <li>Lorem ipsum</li>
               <li>Lorem ipsum</li>
               <li>Lorem ipsum</li>
               <li>Lorem ipsum</li>
            </ul>

            <ul>
               <li className='first'>Contact us</li>
               <li>Lorem ipsum</li>
               <li>Lorem ipsum</li>
               <li>Lorem ipsum</li>
               <li>Lorem ipsum</li>
            </ul>
         </section>

         <p>&copy; All rights reserved by owners &copy;</p>
      </footer>
   )
}

export default Footer