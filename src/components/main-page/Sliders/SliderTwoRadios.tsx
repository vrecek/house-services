import React from 'react'
import { useEffect } from 'react'
import { radioButtons } from '../../../interfaces/slider_two_radios'
import { useRef } from 'react'

const SliderTwoRadios = ({ reference, imagesNum }:radioButtons) => {
   const radiosCont = useRef<HTMLDivElement>(null)
   let interval:any = null
   let counter:number = 1

   useEffect(() => {
      const c = reference.current as HTMLElement
      
      c.style.transform = `translateX(-100%)`

      interval = setInterval(() => intervalFunc(c), 5000)

      c.addEventListener('transitionend', () => {
         const r = Array.from(radiosCont.current!.children)

         if(counter >= imagesNum + 1) {
            counter = 1
            c.style.transition = '0s'
            c.style.transform = `translateX(-100%)`
         }

         for(let i = 0; i < r.length; i++) {
            const counter2 = counter - 1 >= 0 ? counter - 1 : 0

            if(i === counter2) {
               r[i].className = 'active'
               continue
            }

            r[i].className = ''
         }
      })
   }, [])

   const intervalFunc = (cont:HTMLElement) => {
      if(!document.hasFocus()) return

      ++counter
      cont.style.transition = '1s'
      cont.style.transform = `translateX(-${ 100 * counter }%)`
   }

   const clickSlider = (num:number):void => {
      const c = reference.current as HTMLElement

      clearInterval(interval)
      interval = setInterval(() => intervalFunc(c), 5000)

      counter = num + 1
      c.style.transform = `translateX(-${ 100 * counter }%)`
   }

   return (
      <section ref={ radiosCont }>
         {
            [...Array(imagesNum)].map((x, i) => (
               <div className={ i === 0 ? 'active' : '' } key={ i } onClick={ () => clickSlider(i) }></div>
            ))
         }
      </section>
   )
}

export default SliderTwoRadios