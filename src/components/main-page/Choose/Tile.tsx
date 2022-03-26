import React from 'react'
import { ChooseTile } from '../../../interfaces/choose_tile'
import { AiOutlineQuestionCircle, AiOutlineHome, AiOutlineIdcard } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import Button from '../../REUSABLE/Button'

const Tile = ({ title, image, text }:ChooseTile) => {
   let hidden = true

   const showMenu = (e:React.MouseEvent) => {
      const t = e.target! as HTMLElement
      const section = t.parentElement as HTMLElement

      hidden = !hidden

      section.style.transform = `translateY(-50%) translateX(-${ hidden ? 100 : 0 }%)`
   }

   return (
      <article>
         <img src={ image } />
         <h1>{ title }</h1>
         <Button text='Jump into it' />

         <section className='inner'>
            <h2 onClick={ showMenu }>Details</h2>

            <h3>{ title }</h3>

            <p>Vestibulum efficitur, leo sed vulputate pellentesque, leo mi vulputate dolor, et laoreet diam augue non orci. Duis porta semper turpis quis condimentum. Pellentesque commodo at massa ut tristique. Aenean placerat ligula ut leo pulvinar elementum. Aliquam ex sem, facilisis eu accumsan a, interdum vel urna.</p>

            <section>
               <div>
                  <AiOutlineQuestionCircle />
                  <h4>Facilisis</h4>
               </div>

               <div>
                  <AiOutlineHome />
                  <h4>Dolore</h4>
               </div>

               <div>
                  <BiSupport />
                  <h4>Hendrerit</h4>
               </div>

               <div>
                  <AiOutlineIdcard />
                  <h4>Convallis</h4>
               </div>
            </section>
         </section>
      </article>
   )
}

export default Tile