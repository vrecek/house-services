import React from 'react'
import '../../../css/ReasonsCont.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { BiBuildingHouse } from 'react-icons/bi'
import { BsPeople } from 'react-icons/bs'
import { MdRealEstateAgent, MdOutlineAttachMoney } from 'react-icons/md'
import Card from './Card'

const ReasonsCont = () => {
   return (
      <section className='reasons'>
         <h1> <AiOutlineQuestionCircle /> Why would you choose us ? <AiOutlineQuestionCircle /> </h1>

         <article>
            <Card 
               text='Maecenas pellentesque mi lorem. Pellentesque purus enim, egestas eget ornare eu, feugiat id arcu. Nulla a tristique sapien. Donec laoreet mattis dui at consectetur. In ligula lacus, tristique nec auctor id, porttitor eu quam. Maecenas dui nulla, pellentesque at velit non, semper efficitur quam.' 
               title='High quality services' 
               icon={ <BiBuildingHouse /> } 
            />

            <Card 
               text='Maecenas pellentesque mi lorem. Pellentesque purus enim, egestas eget ornare eu, feugiat id arcu. Nulla a tristique sapien. Donec laoreet mattis dui at consectetur. In ligula lacus, tristique nec auctor id, porttitor eu quam. Maecenas dui nulla, pellentesque at velit non, semper efficitur quam.' 
               title='Thousands satisfied clients'
               icon={ <BsPeople /> } 
            />

            <Card 
               text='Maecenas pellentesque mi lorem. Pellentesque purus enim, egestas eget ornare eu, feugiat id arcu. Nulla a tristique sapien. Donec laoreet mattis dui at consectetur. In ligula lacus, tristique nec auctor id, porttitor eu quam. Maecenas dui nulla, pellentesque at velit non, semper efficitur quam.' 
               title='Professional advisors' 
               icon={ <MdRealEstateAgent /> }
             />

            <Card 
               text='Maecenas pellentesque mi lorem. Pellentesque purus enim, egestas eget ornare eu, feugiat id arcu. Nulla a tristique sapien. Donec laoreet mattis dui at consectetur. In ligula lacus, tristique nec auctor id, porttitor eu quam. Maecenas dui nulla, pellentesque at velit non, semper efficitur quam.' 
               title='Refunds guaranteed' 
               icon={ <MdOutlineAttachMoney /> } 
            />
         </article>
         
      </section>
   )
}

export default ReasonsCont