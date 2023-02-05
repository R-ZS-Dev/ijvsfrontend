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
                <div className='col-lg-9'>
                {archive.map((val, i) => (
                    <div className='col-lg-9'>
                        <div className='text-center mt-3'>
                            <Image src={'/upload/'+val.fig_img}  height={'300px'} width={'500px'} alt="Figure"/>
                            <div>{val.fig_text}</div>
                        </div>
                    </div>
                ))}
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