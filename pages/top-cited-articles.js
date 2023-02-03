import Axios from 'axios'
import React, { useState } from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'
import { apiUrl } from '../baseurl'

const top_cited_articles = () => {

    const [toptenlist, settopten] = useState([]);
    Axios.get(apiUrl()+"topArtical/view").then((response) => {
        settopten(response.data);
    });
    function expandView(key) {
        var currentObj = document.getElementsByClassName('abstractView')[key];
        var check = currentObj.classList.contains('expand');
        if (check) {
            currentObj.classList.remove("expand");
        } else {
            currentObj.classList.add("expand");
        }
    }
    return (
        <>
            <div>
                < NavOne />
            </div>
            <div className='row p-4'>
                <div className='col-lg-9'>
                    <h2 className="text-center mt-0">Top Cited Articles</h2>
                    <hr className="hrbgline"></hr>
                    <div className='inpressarticle p-2'>
                        {toptenlist.map((val, key) => {
                            return(
                                <div key={key}>
                        <span>
                            <span className='topinpresshead'>{val.top_title}</span>
                            <div className='inpresstxtsiz mt-0'>{val.top_co_authors_names}
                                <div>{val.top_year_pages}</div>
                            </div>
                        </span>
                        <span>
                            <main>
                                <input className="checktyp m-1" type="checkbox" />
                                <label className="btn btn-info labclsd m-1" htmlFor="toggle" onClick={() => expandView(key) }>Abstract</label>
                            <button className='btn btn-info m-1'><a className='text-white' href={'/./upload/'+val.top_pdf} 
                            target={"_blank"} download="">PDF</a></button>
                            <span className='text-primary m-1'><b>Citations: {val.top_citations}</b></span>
                                <div className='bg-light text-justify expand abstractView' >
                                    <span> {val.top_abstract}</span>
                                    <p><b>Keywords: </b>{val.top_keywords}</p>
                                </div>
                            </main>                         
                        </span>
                        </div>
                            );
                        })}
                    </div>
                </div>
                <div className='col-lg-3'>
                    <RightMenu />
                </div>
            </div>
            <div className=''>
                < FooterOne />
            </div>
        </>
    )
}

export default top_cited_articles