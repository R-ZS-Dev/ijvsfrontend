import FooterOne from '../../../components/Footer'
import Htmltextright from '../../../components/htmltextright'
import NavOne from '../../../components/NavBar'
import { apiUrl, imgUrl } from "../../../baseurl";
import Image from "next/image"

const archivefigure = ({ archive }) => {
    return (
        <>
            <div>
                < NavOne />
            </div>
            <div className='row p-4'>
                <div className='col-lg-9'>
                    {archive.map((val, i) => (
                        <div key={i} className='col-lg-9'>
                            <div className='text-center mt-3'>
                                <Image src={imgUrl() + val.fig_img} height={'300px'} width={'500px'} alt="Figure" />
                                <div>{val.fig_text}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='col-lg-3'>
                    < Htmltextright archive={archive} />
                </div>
            </div>
            <div>
                < FooterOne />
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch(apiUrl() + "archive/figure/" + context.query["id"])
    const archive = await res.json();
    return { props: { archive } }
}

export default archivefigure