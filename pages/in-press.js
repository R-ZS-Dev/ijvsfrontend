import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'
import { useState } from "react";
import Axios from "axios";
import { apiUrl } from '../baseurl';

function in_press() {

    const [employeeList, setEmployeeList] = useState([]);
    Axios.get(apiUrl() + "inpress/view").then((response) => {
        setEmployeeList(response.data);
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
                                        <label htmlFor='' className='inpresstxtsiz'>{val.inp_co_authors_names}</label>
                                    </span>
                                    <span>
                                        <main>
                                            <input className="checkty m-1" type="checkbox" />
                                            <label htmlFor='toggle' className="btn btn-info labclsd m-1" onClick={() => expandView(key)}>Abstract</label>
                                            <button className='btn btn-info m-1'> <a className='text-white'
                                                href={"/./upload/" + val.inpress_pdf}
                                                target="_blank">PDF</a> </button>
                                            <div className='bg-light text-justify abstractView expand'>
                                                <span> {val.inpress_abstract}</span>
                                                <label htmlFor=''><strong>Keywords: </strong>{val.inpress_keywords}</label>
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

export default in_press