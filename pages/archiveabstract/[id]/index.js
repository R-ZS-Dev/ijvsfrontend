import React, { useEffect, useState } from 'react'
import FooterOne from '../../../components/Footer'
import Htmltextright from '../../../components/htmltextright'
import NavOne from '../../../components/NavBar'
import Axios from "axios";
import { apiUrl } from "../../../baseurl";

const archiveabstract = () => {
    const [archive, setArchive] = useState({});
    useEffect(() => {
        Axios.get(apiUrl() + "archive/single/" + 1).then((response) => {
            setArchive(response.data[0]);
        });
        console.log(archive);
    }, []);
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
                        <span className='shorttextdepts'></span>{archive.departments}
                       
                    </h3>
                    <span className='inpresstxtsiz'>
                        <h4>Abstract</h4>
                        <p className='inpresstxtsiz text-justify'>{archive.article_abstract}</p>
                    </span>
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

export default archiveabstract