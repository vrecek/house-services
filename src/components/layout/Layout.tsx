import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router } from 'react-router-dom'

const Layout = (props:any) => {
   return (
      <>
         <Router>
            <Nav />

            {
               props.children
            }

         </Router>
      </>
   )
}

export default Layout