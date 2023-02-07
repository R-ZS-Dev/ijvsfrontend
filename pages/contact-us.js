import Link from 'next/link'
import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'

const contact_us = () => {
    return (
        <>
            <div>
                <NavOne />
            </div>
            <div className='row p-4'>
                <div className='col-lg-9'>
                    <h2 className="text-center">Contact Us</h2>
                    <hr className="hrbgline"></hr>
                    <div className='hrmarginzerocnt p-2'>
                        <span className='editorlink_colorcnt'><h5 className=''>Prof. Dr. Ahrar Khan</h5></span>
                        <span className='text-secondary'>Editor</span>
                    </div>
                    <div className='hrmarginzcnt'>
                        <span>
                            <h6 className='ml-2'><strong>Affiliations:</strong></h6>
                            <ul>
                                <li><Link href={'https://en.sdmy.edu.cn/info/1007/1310.htm'}><a>Shandong Vocational Animal Science and Veterinary College, Weifang, Shandong, China</a></Link></li>
                                <li><Link href={'http://uaf.edu.pk/EmployeeDetail.aspx?userid=40'}><a>Ex-Dean, Faculty of Veterinary Science, University of Agricultue, Faisalabad, Pakistan</a></Link></li>
                            </ul>
                        </span>
                        <span className='mt-3'>
                            <h6 className='ml-2'><strong>Phone:</strong> +92 333 6517844</h6>
                        </span>
                        <span className='mt-3'>
                            <h6 className='ml-2'><strong>Email:</strong> <Link href={'mailto: editor@ijvets.com'}><a>editor@ijvets.com</a></Link></h6>
                            <div>
                                <label htmlFor='' className='ml-2'>Send us your query anytime!</label>
                            </div>
                        </span>
                        <span className='mt-5'>
                            <h6 className='ml-2'><strong>Postal/Street Address:</strong> Unique Scientific Publishers</h6>
                            <div className='mt-0'>
                                <label htmlFor='' className='ml-2'>House No. 1122, Street No. 11, Liaquat Abad No. 2, Faisalabad, Pakistan</label>
                            </div>
                            <label htmlFor='' className='ml-2'><b>Phone:</b> +923336054000</label>
                            <div>
                                <div className='ml-2'><strong>Email:</strong> <Link href={'mailto: proprietor@uniquescientificpublishers.com'}><a>proprietor@uniquescientificpublishers.com</a></Link>, <Link href={'mailto: abdulhannan720@gmail.com'}><a>abdulhannan720@gmail.com</a></Link></div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <RightMenu />
                </div>
            </div>
            <div className='mt-5'>
                <FooterOne />
            </div>
        </>
    )
}

export default contact_us