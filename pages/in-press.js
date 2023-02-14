import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'
import { apiUrl, imgUrl } from '../baseurl';

function in_press({ employeeList }) {
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
            <NavOne />
            <div className='row p-4'>
                <div className='col-lg-9'>
                    <h2 className="text-center mt-0">In Press Articles</h2>
                    <hr className="hrbgline"></hr>
                    <div className='inpressarticle p-2'>
                        {employeeList.map((val, key) => {
                            return (
                                <div className='b-1' key={key}>
                                    <span>
                                        <span className='topinpresshead'>{val.inpress_title}</span>
                                        <label className='inpresstxtsiz'>{val.inp_co_authors_names}</label>
                                    </span>
                                    <span>
                                        <main>
                                            <input className="checkty m-1" type="checkbox" />
                                            <label htmlFor='toggle' className="btn btn-info labclsd m-1" onClick={() => expandView(key)}>Abstract</label>
                                            <button className='btn btn-info m-1'> <span className='text-white'
                                                href={imgUrl() + val.inpress_pdf}
                                            >PDF</span> </button>
                                            <div className='bg-light text-justify abstractView expand'>
                                                <span> {val.inpress_abstract}</span>
                                                <label ><strong>Keywords: </strong>{val.inpress_keywords}</label>
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
            <FooterOne />
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(apiUrl() + "inpress/view")
    const employeeList = await res.json();
    return { props: { employeeList } }
}

export default in_press