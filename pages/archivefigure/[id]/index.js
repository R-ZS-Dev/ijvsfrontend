import React, { useEffect, useState } from 'react'
import FooterOne from '../../../components/Footer'
import Htmltextright from '../../../components/htmltextright'
import NavOne from '../../../components/NavBar'
import Axios from "axios";
import { apiUrl } from "../../../baseurl";
import Image from "next/image"

const archivefigure = () => {
    const [archive, setArchive] = useState([]);
    useEffect(() => {
        Axios.get(apiUrl() + "archive/figure/" + 1).then((response) => {
            setArchive(response.data);
        });
    }, []);
    return (
        <>
            <div>
                < NavOne />
            </div>
            <div className='row p-4'>
                {archive.map((val, i) => (
                    <div className='col-lg-9'>
                        <h1 className='h1fontsiz'>Title</h1>
                        <h5>Authors</h5>
                        <h6>Departments</h6>
                        <p>*Corresponding author: </p>
                        <div>
                            <Image src={'/upload/'+val.fig_img}  height={'50px'} width={'150px'} alt="Figure"/>
                        </div>
                    </div>
                ))}

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