import Link from 'next/link'
// import React from 'react'
import React, { useEffect, useState } from 'react'
import FooterOne from '../../../components/Footer'
import Htmltextright from '../../../components/htmltextright'
import NavOne from '../../../components/NavBar'
import Axios from "axios";
import { apiUrl } from "../../../baseurl";

const fulltext = () => {

    const [archive, setArchive] = useState({});
    useEffect(() => {
        Axios.get(apiUrl() + "archive/singlefull/" + 1).then((response) => {
            setArchive(response.data[0]);
        });
    }, []);
    setTimeout(() => {
        var currentView = parseInt(archive.views) + 1;
        Axios.get(apiUrl() + "archive/view/plus/" + archive.id + "/" + currentView).then((response) => {
        });
    }, 5000);
  return (
    <>
        <div>
            < NavOne />
        </div>
        <div className='row p-4'>
            <div className='col-lg-9'>
                <h1 className='h1fontsiz'>{archive.article_title}</h1>
                <h2 className='h2fontsiz'>{archive.all_authors}</h2>
                <h3 className='h3fontsiz'> 
                    <span className='shorttextdepts'></span>{archive.departments}.                     
                </h3>
                <span className='inpresstxtsiz'>
                    <b>Abstract</b>
                    <p className='inpresstxtsiz text-justify'>{archive.article_abstract}</p>
                </span>
                <span className='inpresstxtsiz'>
                <hr></hr>
                    <h6>Article Information</h6>
                    <p>Received Date: {archive.received_date2}</p>
                    <p>Revised Date: {archive.revised_date}</p>
                    <p>Accepted Date: {archive.accepted_date}</p>
                    <p>Available online {archive.available_online_date}</p>
                    <p><b>Authors Contribution </b>
                        {archive.contribution_authors_text}
                    </p>
                    <p><b>KeyWords </b>
                        {archive.article_keywords}
                    </p>
                    <p><b>DOI: </b>
                        <Link href={'archive.article_doi'}><a>{archive.article_doi}</a></Link>
                    </p> 
                    <p>*Corresponding author: {archive.corresponding_email}</p>
                    <p>Copyright 2012 IJVS</p>
                <hr></hr>
                </span>
                <span className='inpresstxtsiz'>
                    <div className='text-center'><b>INTRODUCTION</b></div>
                    <p className='text-justify'>
                        <span className="articlintofirstword"></span>
                        {archive.introduction}
                    </p>
                </span>                
                <div className='mt-2'>
                <span className='inpresstxtsiz'>
                    <div className='text-center'><b>MATERIALS AND METHODS</b></div>
                    <p className='text-justify'>
                       {archive.materials_and_methods}
                    </p>
                </span>
                </div>
                <span className='inpresstxtsiz'>
                    <div className='text-center'><b>RESULTS</b></div>
                    <p className='text-justify'>
                        {archive.results}
                    </p>
                </span>
                <span className='inpresstxtsiz'>
                    <div className='text-center'><b>DISCUSSION</b></div>
                    <p className='text-justify'>
                        {archive.discussion}
                    </p>
                </span>
                <span className='inpresstxtsiz'>
                    <b>CONCLUSIONS</b>
                    <p>
                        {archive.conclusions}
                    </p>
                </span>
                <span className='inpresstxtsiz'>
                    <b>Acknowledgements</b>
                    <p>
                        {archive.acknowledgements}
                    </p>
                </span>
                <span className='inpresstxtsiz'>
                    <b>Authors Contribution</b>
                    <p>
                        {archive.contribution_authors_text}
                    </p>
                </span>
                <span className='inpresstxtsiz'>
                    <b>Conflict of Interest</b>
                    <p>
                        {archive.conflict_of_interest}
                    </p>
                </span>
                <span className='inpresstxtsiz'>
                    <div className='text-center'><b>REFERENCES</b></div>                    
                    <div className='text-justify'>
                        {archive.reference}
                    </div>
                </span>
                <h1 className='h1fontsiz'>{archive.article_title}</h1>
            </div>
            <div className='col-lg-3'>
                < Htmltextright />
            </div>
        </div>
        <div>
            <FooterOne />
        </div>
    </>
  )
}

export default fulltext