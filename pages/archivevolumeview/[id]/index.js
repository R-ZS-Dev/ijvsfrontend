import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import FooterOne from '../../../components/Footer';
import NavOne from '../../../components/NavBar';
import RightMenu from '../../../components/RightSide';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Axios from "axios";
import { apiUrl } from "../../../baseurl";

const archivevolumeview = () => {
    const [archive, setArchive] = useState([{volumeNo: 'Volume 1', yearNo: '2023'}]);
    useEffect(() => {
        Axios.get(apiUrl() + "archive/view/" + 1).then((response) => {
            setArchive(response.data);
        });
    }, []);
    return (
        <>
            <div>
                <NavOne />
            </div>
            <div className='row p-3'>
                <div className='col-lg-9'>
                    <h2 className="text-center mt-0"><FaArrowLeft className="iconssizes mb-1" /> {archive[0].volumeNo}, {archive[0].yearNo} <FaArrowRight className="iconssizes mb-1" /></h2>
                    <hr className="hrbgline"></hr>
                    {archive.map((a, i) => (
                        <div className='inpressarticle p-2'>
                            <span className=''>
                                <span className='topinpresshead'>{a.article_title}</span>
                                <p className='inpresstxtsiz'>{a.all_authors}</p>
                            </span>
                            <span className=''>
                                <Link className='' href={'/archiveabstract/'+a.id}><a><button className='btn btn-info m-2'>Abstact</button></a></Link>
                                <Link className='' href={'/archivefulltext/'+a.id}><a><button className='btn btn-info m-2'>Full Text</button></a></Link>
                                <Link className='' href={"/./upload/ + a.pdf_file" +a.id}><a><button className='btn btn-info m-2'>PDF</button></a></Link>
                                <Link className='' href={'/archivefigure'+a.id}><a><button className='btn btn-info m-2'>Figures</button></a></Link>
                                <Link className='' href={"/./upload/ + a.epub_file" +a.id}><button className='btn btn-info m-2'>ePUB File</button></Link>
                                <Link className='' href={"/./upload/ + a.flip_file" +a.id}><button className='btn btn-info m-2'>Flip File</button></Link>
                            </span>
                        </div>
                    ))}
                </div>
                <div className='col-lg-3'>
                    < RightMenu />
                </div>
            </div>
            <div className=''>
                <FooterOne />
            </div>
        </>
    )
}

export default archivevolumeview
