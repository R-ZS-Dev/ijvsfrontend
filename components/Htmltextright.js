import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import Axios from "axios";
import { apiUrl } from "../baseurl";
import React, { useEffect, useState } from 'react'

const Htmltextright = () => {

    const [archive, setArchive] = useState({});
    useEffect(() => {
        Axios.get(apiUrl() + "archive/single/" + 1).then((response) => {
            setArchive(response.data[0]);
        });
    }, []);

    function downloadFIle(){
        setArchive({...archive, downloads:archive.downloads+1});
        var currentDownload=parseInt(archive.downloads)+1;
        Axios.get(apiUrl() + "archive/download/plus/" + archive.id+"/"+currentDownload).then((response) => {
        }); 
    }

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
                                        <li><Image src={'/images/uploadsite/abstracticon.png'} alt='Abstract Icon' height="20" width={"20"} />
                                            <Link href={'/archiveabstract/' + archive.id}><a> Abstract</a></Link></li>
                                        <li><Image src={'/images/uploadsite/htmlicon.png'} alt='HTML Icon' height="20" width={"20"} />
                                            <Link href={'/archivefulltext/' + archive.id}><a> Full Text Html</a></Link></li>
                                        <li onClick={downloadFIle}><Image src={'/images/uploadsite/pdficon.png'} alt='PDF Icon' height="20" width={"20"} />
                                            <Link href={'/upload/' + archive.pdf_file}  >Full Text PDF</Link></li>
                                        <li onClick={downloadFIle}><Image src={'/images/uploadsite/epubicon.png'} alt='Epub Icon' height="20" width={"20"} />
                                            <Link href={'/upload/' + archive.epub_file} >Full Text ePub</Link></li>
                                        <li onClick={downloadFIle}><Image src={'/images/uploadsite/htmltexticon.png'} alt='HTML Text Icon' height="20" width={"20"} />
                                            <Link href={'/upload/' + archive.flip_file}>Full Text Flip File</Link></li>
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
                                        <li><FaEye className="iconssizes text-success" /> Article Views:    {archive.views}</li>
                                        <li><FaFileDownload className="iconssizes text-success" /> Article Downloads: {archive.downloads}</li>
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