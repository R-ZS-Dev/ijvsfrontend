import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'

const confirmforgetpas = () => {
    return (
        <>
            <div>
                < NavOne />
            </div>
            <div className='row p-5'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6'>
                    <form action='' method='POST'>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <strong htmlFor=''>Enter New Password</strong>
                                <input type="Password" className="form-control" required="" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-6">
                                <strong htmlFor=''>Confirm Password</strong>
                                <input type="password" className="form-control" required="" placeholder="Confirm Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Confirm Password</button>
                        </div>
                    </form>
                </div>
                <div className='col-lg-3'></div>
            </div>
            <div>
                < FooterOne />
            </div>
        </>
    )
}

export default confirmforgetpas