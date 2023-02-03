import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import Axios from "axios";
import { apiUrl } from "../baseurl";
import React, { useEffect, useState } from 'react'

const Htmltextright = () => {

    const [archive, setArchive] = useState([]);
    useEffect(() => {
        Axios.get(apiUrl() + "rightsidefile/view" +1).then((response) => {
            setArchive(response.data);
        });
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-lg-12 w-100">
                    <div className="p-1 bg-light">
                        <div className="card">
                            <div className="card-header">Article Files</div>
                            <div className="card-body">
                                <div className="input-group">
                                    {/* {archive.map((i, v) => ( */}
                                    <ul className='ulcssdot'>
                                        {/* <li><Image src={'/images/uploadsite/abstracticon.png'} alt='Abstract Icon' height="20" width={"20"} /> */}
                                        {/* <Link href={'./archiveabstract/'+i.id}><a> Abstract</a></Link></li>                                         */}
                                        <li><Image src={'/images/uploadsite/pdficon.png'} alt='PDF Icon' height="20" width={"20"} />
                                        <Link href={'/'}><a> Full Text PDF</a></Link></li>
                                        <li><Image src={'/images/uploadsite/htmlicon.png'} alt='HTML Icon' height="20" width={"20"} />
                                        <Link href={'/'}><a> Full Text Html</a></Link></li>
                                        <li><Image src={'/images/uploadsite/epubicon.png'} alt='Epub Icon' height="20" width={"20"} />
                                        <Link href={'/'}><a> Full Text ePub</a></Link></li>
                                        <li><Image src={'/images/uploadsite/htmltexticon.png'} alt='HTML Text Icon' height="20" width={"20"} />
                                        <Link href={'/'}><a> Full Text FLIP File</a></Link></li>
                                    </ul>
                                    {/* ))} */}
                                </div>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <div className="card-header">Article Files</div>
                            <div className="card-body">
                                <div className="input-group">
                                    <ul className='ulcssdot'>
                                        <li><FaEye className="iconssizes text-success" /> Article Views: </li>                                        
                                        <li><FaFileDownload className="iconssizes text-success" /><Link href={'/'}><a> Article Downloads: </a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Htmltextright