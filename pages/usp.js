import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'
import { apiUrl } from "../baseurl"

function usp({ total_vistor }) {
  return (
    <>
      <div>
        <NavOne />
      </div>
      <div className='row p-4'>
        <div className='col-lg-9'>
          <h2 className="text-center"><Image className='mt-1' src={"/images/uploadsite/uspicon.png"} height="30" width="30" alt='USP'></Image> Unique Scientific Publishers®</h2>
          <hr className="hrbgline"></hr>
          <div className='usplogopageupshead'>
            <h5 className='p-1'>Aims/Objectives:</h5>
          </div>
          <div className='usplogopageupstext'>
            <ol>
              <li>Promotion of science culture by conducting seminars/conferences/workshops</li>
              <li>Publication of scientific journals</li>
              <li>Publication of scientific books/magazines</li>
              <li>Editing and language improvement of scientific manuscripts, theses and reports</li>
              <li>Provision of scientific data analysis</li>
            </ol>
          </div>
          <div className='usplogopageupshead'>
            <h5 className='p-1'>PUBLICATIONS:</h5>
          </div>
          <div className='usplogopageupstext'>
            <ol>
              <b>JOURNALS</b>
              <li><Link href={'http://agrobiologicalrecords.com/'}><span>Agrobiological Records</span></Link></li>
              <span>ISSN: 2708-7190 (online); 2708-7182 (print)</span>
              <li><Link href={'http://ijvets.com/'}><span>International Journal of Veterinary Science</span></Link></li>
              <span>ISSN: 2305-4360 (online); 2304-3075 (print)</span>
              <li><Link href={'http://ijagbio.com/'}><span>International Journal of Agriculture and Biosciences</span></Link></li>
              <span>ISSN: 2306-3599 (online); 2305-6622 (print)</span>
            </ol>
          </div>
          <div className='usplogopageupshead'>
            <h5 className='p-1'>BOOKS</h5>
          </div>
          <div className='usplogopageupstext'>
            <ol>
              <b>JOURNALS</b>
              <li><Link href={'https://uniquescientificpublishers.com/veterinary-pathobiology-and-public-health/'}><span>Veterinary Pathobiology and Public Health</span></Link>(Published)</li>
              <span>ISBN: 978-969-2201-00-1</span>
              <li><Link href={'https://uniquescientificpublishers.com/animal-health-perspectives-volume-1/'}><span>Animal Health Perspectives</span></Link>(Published)</li>
              <span>ISBN: 978-969-2201-01-8</span>
              <li><Link href={'/'}><span>One Health Triad</span></Link>(Under process)</li>
              <span>ISBN: Applied</span>
            </ol>
          </div>
          <div className='usplogopageupshead'>
            <h5 className='p-1'>Contact us:</h5>
          </div>
          <div className='usplogopageupstext p-2'>
            <span>Unique Scientific Publishers, Faisalabad, Pakistan.</span>
            <p>Phone: +923336517844</p>
            <span><strong>Email: </strong> <Link href={'mailto: ahrar1122@yahoo.com'}><span>ahrar1122@yahoo.com</span></Link></span>
            <p><strong>Email: </strong> <Link href={'mailto: abdulhannan720@gmail.com'}><span>abdulhannan720@gmail.com</span></Link></p>
          </div>
        </div>
        <div className='col-lg-3'>
          <RightMenu />
        </div>
      </div>
      <div className='mt-3'>
        <FooterOne site_vistor={total_vistor.vistors} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const vistor_get = await fetch(apiUrl() + "sitevisitor/viewVistor/");
  const total_vistor = await vistor_get.json();
      
  return { props: { total_vistor } }
}

export default usp