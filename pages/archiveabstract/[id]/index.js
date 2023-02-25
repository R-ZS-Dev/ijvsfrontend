import FooterOne from '../../../components/Footer'
import Htmltextright from '../../../components/htmltextright'
import NavOne from '../../../components/NavBar'
import Axios from "axios";
import { apiUrl } from "../../../baseurl";
import Link from 'next/link';

const archive = ({ archive, departments, total_vistor }) => {
    if (archive == null) {
        window.location = '/archive'
    }
    // console.log(archive.id);
    // setTimeout(() => {
    //     var currentView = parseInt(archive.views) + 1;
    //     Axios.get(apiUrl() + "archive/view/plus/" + archive.id + "/" + currentView).then((response) => {
    //     });
    // }, 5000);
    // 
    // function nextprefun(val) {
    //     window.location='/archiveabstract/'+val
    // }
    // 
    return (
        <>
            {archive != null ?
                <din>
                    <div>
                        < NavOne />
                    </div>
                    <div className='row p-4'>
                        <div className='col-lg-9'>
                            {/* {nextprebtn.map((a))} */}
                            <div>
                                <Link href={'/archiveabstract/' + (archive.id - 1)}><button className='btn text-success'>← Previous</button></Link>
                                <Link href={'/archiveabstract/' + (archive.id + 1)}><button className='btn nxtbn text-success'>Next →</button></Link>
                            </div>
                            <h1 className='h1fontsiz'>{archive.article_title}</h1>
                            <h2 className='h2fontsiz'>{archive.all_authors}</h2>
                            <h3 className='h3fontsiz'>
                                <span className='shorttextdepts'></span>
                                {departments.map((val, i) => (
                                    <div key={i}><sup>{++i}</sup>{val}</div>
                                ))}

                            </h3>
                            <span className='inpresstxtsiz'>
                                <h4>Abstract</h4>
                                <p className='inpresstxtsiz text-justify'>{archive.article_abstract}</p>
                            </span>
                        </div>
                        <div className='col-lg-3'>
                            < Htmltextright archive={archive} />
                        </div>
                    </div>
                    <div>
                        < FooterOne site_vistor={total_vistor.vistors} />
                    </div>
                </din>
                : ''}
        </>
    )
}
export async function getServerSideProps(context) {
    const vistor_get = await fetch(apiUrl() + "sitevisitor/viewVistor/");
    const total_vistor = await vistor_get.json();
    var getid = context.query["id"];
    var archive = null;
    try {
        const res = await fetch(apiUrl() + "archive/single/" + getid);
        archive = await res.json();

        var currentView = parseInt(archive.views) + 1;
        Axios.get(apiUrl() + "archive/view/plus/" + archive.id + "/" + currentView).then((response) => {
        });
    } catch {
        archive = null;
    }

    var departments = [];
    if (archive != null) {
        departments = archive.departments.split("-");
    }
    return { props: { archive, departments, total_vistor } }
}
export default archive