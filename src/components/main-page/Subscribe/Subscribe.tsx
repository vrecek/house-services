import React from 'react'
import '../../../css/Subscribe.css'
import Button from '../../REUSABLE/Button'

const Subscribe = () => {
   return (
      <section className='subscribe-section'>
         <h1>Subscribe to our newsletter</h1>
         <p className='p-text'>To be up on date and don't miss novelties</p>
         <input type='text' placeholder='Your mail address...' />
         <Button text='Accept' />
      </section>
   )
}

export default Subscribe