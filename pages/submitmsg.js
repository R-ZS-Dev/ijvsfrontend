import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'

const submitmsg = () => {
  return (
    <>
      <div>
        <NavOne />
      </div>
      
        <div className='py-5 mt-5 mb-5 m-5 text-center'>
          <h1>Your email is received. <span className='text-success'>IJVS Editor Chief</span> will respond to your 
          email as early as he could.</h1>
        </div>

      <div>
        <FooterOne />
      </div>
    </>
  )
}

export default submitmsg