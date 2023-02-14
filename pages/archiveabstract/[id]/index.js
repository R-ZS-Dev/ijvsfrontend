import FooterOne from '../../../components/Footer'
import Htmltextright from '../../../components/htmltextright'
import NavOne from '../../../components/NavBar'
import Axios from "axios";
import { apiUrl } from "../../../baseurl";

const archive = ({ archive, departments }) => {
    setTimeout(() => {
        var currentView = parseInt(archive.views) + 1;
        Axios.get(apiUrl() + "archive/view/plus/" + archive.id + "/" + currentView).then((response) => {
        });
    }, 5000);
    return (
        <>
            <div>
                < NavOne />
            </div>
            <div className='row p-4'>
                <div className='col-lg-9'>
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
                < FooterOne />
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch(apiUrl() + "archive/single/" + context.query["id"])
    const archive = await res.json();
    var departments = [];
    if (archive != null) {
        departments = archive.departments.split("-");
    }
    return { props: { archive, departments } }
}
export default archive