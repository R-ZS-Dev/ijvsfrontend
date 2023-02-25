import Link from 'next/link';
import FooterOne from '../../../components/Footer';
import NavOne from '../../../components/NavBar';
import RightMenu from '../../../components/RightSide';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Axios from "axios";
import { apiUrl, imgUrl } from "../../../baseurl";

const archivevolumeview = ({ archive, searchTxt }) => {
    function downloadFIle(index, id) {
        setArchive(archive.map((a, i) => (
            i === index ? { ...a, downloads: a.downloads + 1 } : a
        )));
        var currentDownload = parseInt(archive[index].downloads) + 1;
        Axios.get(apiUrl() + "archive/download/plus/" + id + "/" + currentDownload).then((response) => {
        });
    }
    return (
        <>
            <div>
                <NavOne />
            </div>
            <div className='row p-3'>
                <div className='col-lg-9'>
                    <h2 className="text-center mt-0"><FaArrowLeft className="iconssizes mb-1" />{ searchTxt } <FaArrowRight className="iconssizes mb-1" /></h2>
                    <hr className="hrbgline"></hr>
                    <div className='text-center text-danger'>
                        <h2>{archive.length == 0 ? 'Paper Not Found' : ''}</h2>
                    </div>
                    {archive.map((a, i) => (
                        <div key={i} className='inpressarticle p-2'>
                            <span className=''>
                                <span className='topinpresshead'>{a.article_title}</span>
                                <p className='inpresstxtsiz'>{a.all_authors}</p>
                            </span>
                            <span className=''>
                                <Link className='' href={'/archiveabstract/' + a.id}><span><button className='btn btn-info m-2'>Abstact</button></span></Link>
                                <Link className='' href={'/archivefulltext/' + a.id}><span><button className='btn btn-info m-2'>Full Text</button></span></Link>
                                <Link className='' href={imgUrl() + a.pdf_file}><span><button className='btn btn-info m-2' onClick={() => downloadFIle(i, a.id)}>PDF</button></span></Link>
                                <Link className='' href={'/archivefigure/' + a.id}><span><button className='btn btn-info m-2'>Figures</button></span></Link>
                                <Link className='' href={imgUrl() + a.epub_file}><button className='btn btn-info m-2' onClick={() => downloadFIle(i, a.id)}>ePUB File</button></Link>
                                <Link className='' href={imgUrl() + a.flip_file}><button className='btn btn-info m-2' onClick={() => downloadFIle(i, a.id)}>Flip File</button></Link>
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
export async function getServerSideProps(context) {
    const res = await fetch(apiUrl() + "archive/search/" + context.query["search"])
    const archive = await res.json();
    return { props: { archive, searchTxt: context.query["search"] } }
}
export default archivevolumeview