import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'

const userforpass = () => {
    return (
        <>
            <div>
                <NavOne />
            </div>
            <div className='row p-5'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4'>
                    <form action='' method=''>
                        <div className="row">
                            <div className="col">
                                <span><b>Enter Email</b></span>
                                <input type="text" className="form-control" placeholder="Enter Email..." />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button className="btn btn-light">Cancel</button>
                        </div>
                    </form>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div>
                <FooterOne />
            </div>
        </>
    )
}

export default userforpass