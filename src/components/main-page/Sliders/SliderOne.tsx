import React from 'react'
import '../../../css/SliderOne.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import SliderOneText from './SliderOneText'
import { useRef, useEffect } from 'react'
import s1 from '../../../images/slider1.png'
import s2 from '../../../images/slider2.png'
import s3 from '../../../images/slider3.png'
import s4 from '../../../images/slider4.png'

const SliderOne = () => {
   const slider = useRef<HTMLDivElement>(null)

   let finished:boolean = true
   let transend:boolean = true

   let counter:number = 1

   const imageSlider = (e:React.MouseEvent, dir:string):void => {
      if(!finished) return
      finished = false
      transend = true

      const t = e.target as HTMLElement
      const div = t.parentElement!.children[1].children[0] as HTMLElement

      if(dir === 'left') --counter
      else if(dir === 'right') ++counter

      for( let x of Array.from( div.children as HTMLCollectionOf<HTMLElement> ) ) {
         if(x === div.children[counter]) {
            x.style.transform = 'scale(1)'
            continue
         }

         x.style.transform = 'scale(.4)'
      }

      div.style.transition = '.8s'
      div.style.transform = `translateX(-${ 100 * counter }%)`
   }

   const lastOrFirstTransition = (s:HTMLElement):void => {
      const ch = s.children[counter] as HTMLElement
      ch.style.transition = '0s'
      ch.style.transform = 'scale(1)'
      setTimeout(() => {
         ch.style.transition = '.8s'
      }, 50);
   }
  
   useEffect(() => {
      const s = slider.current!

      s.style.transform = `translateX(-100%)`

      s.addEventListener('transitionend', () => {
         if(!transend) return
         
         s.style.transition = '0s'

         if(counter >= s.children.length - 1) {
            counter = 1
            s.style.transform = 'translateX(-100%)'

            lastOrFirstTransition(s)
            
         }else if(counter === 0) {
            counter = s.children.length - 2
            s.style.transform = `translateX(-${ 100 * counter }%)`

            lastOrFirstTransition(s)
         }

         finished = true
         transend = false
      })
   }, [])

   return (
      <section className='slider-one'>

         <div>
            <h1>Lorem ipsmum dolor amet</h1>
            <p>lorem ispum dolro it amt coneqsutrlorem ispum dolro it amt coneqsutr</p>
         </div>

         <article>

            <section className='images'>
               <span onClick={ (e) => imageSlider(e, 'left') }> <AiOutlineArrowLeft /> </span>

               <figure>
                  <div ref={ slider }>
                     <img src={ s4 } />

                     <img src={ s1 } />
                     <img src={ s2 } />
                     <img src={ s3 } />
                     <img src={ s4 } />

                     <img src={ s1 } />
                  </div>
               </figure>
                  
               <span onClick={ (e) => imageSlider(e, 'right') }> <AiOutlineArrowRight /> </span>
            </section>

            <SliderOneText />

         </article>

      </section>
   )
}

export default SliderOne