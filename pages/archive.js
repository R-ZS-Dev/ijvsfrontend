import Link from 'next/link'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'
import Axios from "axios";
import { apiUrl } from "../baseurl";

const archive = ({ archive, total_vistor }) => {
    return (
        <>
            <div>
                <NavOne />
            </div>
            <div className='row p-4'>
                <div className='col-lg-9'>
                    <h2 className="text-center">Archive</h2>
                    <hr className="hrbgline"></hr>
                    {archive.map((a, i) => (
                        <div className='p-2' key={i}>
                            <div className='text-center'><h3 className='h3fontsiz'>Year {a.year}</h3></div>
                            <div className='mt-2'>
                                <div className='row'>
                                    <div className='mntbg bg-primary text-white'><strong>January-March</strong></div>
                                    <div className='mntbg bg-primary text-white'><strong>April-June</strong></div>
                                    <div className='mntbg bg-primary text-white'><strong>July-September</strong></div>
                                    <div className='mntbg bg-primary text-white'><strong>October-December</strong></div>
                                    {a.volumes.map((v, ii) => (
                                        <div key={ii} className='mntbg'><strong><Link href={'archivevolumeview/' + v.id}><span>{v.volumeNo}</span></Link></strong></div>
                                    ))}

                                </div>
                                <hr></hr>
                                {/* <Link href={'archivevolumeview'}><span>Volume 12, No. 2, 2023 (In Progress)</span></Link>                         */}
                            </div>
                        </div>
                    ))}


                </div>
                <div className='col-lg-3'>
                    <RightMenu />
                </div>
            </div>
            <div>
                <FooterOne site_vistor={total_vistor.vistors} />
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const vistor_get = await fetch(apiUrl() + "sitevisitor/viewVistor/");
    const total_vistor = await vistor_get.json();
    const res = await fetch(apiUrl() + "yearVolume/view")
    const archive = await res.json();
    return { props: { archive, total_vistor } }
}

export default archive