import Link from 'next/link'
import FooterOne from '../../../components/Footer'
import Htmltextright from '../../../components/htmltextright'
import NavOne from '../../../components/NavBar'
import Axios from "axios";
import { apiUrl } from "../../../baseurl";

const fulltext = ({ archive, departments, reference, total_vistor }) => {
    // setTimeout(() => {
    //     var currentView = parseInt(archive.views) + 1;
    //     Axios.get(apiUrl() + "archive/view/plus/" + archive.id + "/" + currentView).then((response) => {
    //     });
    // }, 5000);

   
    return (
        <>
            <div>
                < NavOne />
            </div>
            <div className='row p-4'>
                <div className='col-lg-9'>
                    <div>
                        <Link href={'/archivefulltext/' + (archive.id - 1)}><button className='btn text-success'>← Previous</button></Link>
                        <Link href={'/archivefulltext/' + (archive.id + 1)}><button className='btn nxtbn text-success'>Next →</button></Link>
                    </div>
                    <h1 className='h1fontsiz'>{archive.article_title}</h1>
                    <h2 className='h2fontsiz'>{archive.all_authors}</h2>
                    <h3 className='h3fontsiz'>
                        <span className='shorttextdepts'></span>
                        {departments.map((val, i) => (
                            <div key={i}><sup>{++i}</sup>{val}</div>
                        ))}
                        {/* {archive.departments}.                      */}
                    </h3>
                    <span className='inpresstxtsiz'>
                        <b>Abstract</b>
                        <p className='inpresstxtsiz text-justify'>{archive.article_abstract}</p>
                    </span>
                    <span className='inpresstxtsiz'>
                        <hr></hr>
                        <h6>Article Information</h6>
                        <p>Received Date: {archive.received_date2}</p>
                        <p>Revised Date: {archive.revised_date2}</p>
                        <p>Accepted Date: {archive.accepted_date2}</p>
                        <p>Available online {archive.available_online_date2}</p>
                        <p><b>Authors Contribution </b>
                            {archive.contribution_authors_text}
                        </p>
                        <p><b>KeyWords </b>
                            {archive.article_keywords}
                        </p>
                        <p><b>DOI: </b>
                            <Link href={'archive.article_doi'}><span>{archive.article_doi}</span></Link>
                        </p>
                        <p>*Corresponding author: {archive.corresponding_email}</p>
                        <p>Copyright 2012 IJVS</p>
                        <hr></hr>
                    </span>
                    <span className='inpresstxtsiz'>
                        <div className='text-center'><b>INTRODUCTION</b></div>
                        <p className='text-justify'>
                            <span className="articlintofirstword"></span>
                            {archive.introduction}
                        </p>
                    </span>
                    <div className='mt-2'>
                        <span className='inpresstxtsiz'>
                            <div className='text-center'><b>MATERIALS AND METHODS</b></div>
                            <p className='text-justify'>
                                {archive.materials_and_methods}
                            </p>
                        </span>
                    </div>
                    <span className='inpresstxtsiz'>
                        <div className='text-center'><b>RESULTS</b></div>
                        <p className='text-justify'>
                            {archive.results}
                        </p>
                    </span>
                    <span className='inpresstxtsiz'>
                        <div className='text-center'><b>DISCUSSION</b></div>
                        <p className='text-justify'>
                            {archive.discussion}
                        </p>
                    </span>
                    <span className='inpresstxtsiz'>
                        <b>CONCLUSIONS</b>
                        <p>
                            {archive.conclusions}
                        </p>
                    </span>
                    <span className='inpresstxtsiz'>
                        <b>Acknowledgements</b>
                        <p>
                            {archive.acknowledgements}
                        </p>
                    </span>
                    <span className='inpresstxtsiz'>
                        <b>Authors Contribution</b>
                        <p>
                            {archive.contribution_authors_text}
                        </p>
                    </span>
                    <span className='inpresstxtsiz'>
                        <b>Conflict of Interest</b>
                        <p>
                            {archive.conflict_of_interest}
                        </p>
                    </span>
                    <span className='inpresstxtsiz'>
                        <div className='text-center'><b>REFERENCES</b></div>
                        <div className='text-justify'>
                            {reference.map((val, i) => (
                                <div key={i}>{val}</div>
                            ))}
                            {/* {archive.reference} */}
                        </div>
                    </span>
                    <h1 className='h1fontsiz'>{archive.article_title}</h1>
                </div>
                <div className='col-lg-3'>
                    < Htmltextright archive={archive} />
                </div>
            </div>
            <div>
                <FooterOne site_vistor={total_vistor.vistors} />
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(apiUrl() + "archive/singlefull/" + context.query["id"]);
    const archive = await res.json();
    const vistor_get = await fetch(apiUrl() + "sitevisitor/viewVistor/");
    const total_vistor = await vistor_get.json();
    var departments = [];
    var reference = [];
    if (archive != null) {
        departments = archive.departments.split("-");
        reference = archive.reference.split("---");
        var currentView = parseInt(archive.views) + 1;
        Axios.get(apiUrl() + "archive/view/plus/" + archive.id + "/" + currentView).then((response) => {
        });
    }
    return { props: { archive, departments, reference, total_vistor } }
}
export default fulltext