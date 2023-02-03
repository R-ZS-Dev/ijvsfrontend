import React from 'react'
import FooterOne from '../components/Footer'
import Htmltextright from '../components/htmltextright'
import NavOne from '../components/NavBar'

const archivefigure = () => {
    return (
        <>
            <div>
                < NavOne />
            </div>
            <div className='row p-4'>
                <div className='col-lg-9'>
                    <h1 className='h1fontsiz'>Title</h1>
                    <h5>Authors</h5>
                    <h6>Departments</h6>
                    <p>*Corresponding author: </p>
                    <div>
                        <b>Figures</b>
                    </div>
                </div>
                <div className='col-lg-3'>
                    < Htmltextright />
                </div>
            </div>
            <div>
                < FooterOne />
            </div>
        </>
    )
}

export default archivefigure