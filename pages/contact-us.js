import Link from 'next/link'
import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'
import { apiUrl } from "../baseurl"

const contact_us = ({ total_vistor }) => {
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
                                <li><Link href={'https://en.sdmy.edu.cn/info/1007/1310.htm'}><span>Shandong Vocational Animal Science and Veterinary College, Weifang, Shandong, China</span></Link></li>
                                <li><Link href={'http://uaf.edu.pk/EmployeeDetail.aspx?userid=40'}><span>Ex-Dean, Faculty of Veterinary Science, University of Agricultue, Faisalabad, Pakistan</span></Link></li>
                            </ul>
                        </span>
                        <span className='mt-3'>
                            <h6 className='ml-2'><strong>Phone:</strong> +92 333 6517844</h6>
                        </span>
                        <span className='mt-3'>
                            <h6 className='ml-2'><strong>Email:</strong> <Link href={'mailto: editor@ijvets.com'}><span>editor@ijvets.com</span></Link></h6>
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
                                <div className='ml-2'><strong>Email:</strong> <Link href={'mailto: proprietor@uniquescientificpublishers.com'}><span>proprietor@uniquescientificpublishers.com</span></Link>, <Link href={'mailto: abdulhannan720@gmail.com'}><span>abdulhannan720@gmail.com</span></Link></div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <RightMenu />
                </div>
            </div>
            <div className='mt-5'>
                <FooterOne site_vistor={total_vistor.vistors} />
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const vistor_get = await fetch(apiUrl() + "sitevisitor/viewVistor/");
    const total_vistor = await vistor_get.json();
        
    return { props: { total_vistor } }
}

export default contact_us