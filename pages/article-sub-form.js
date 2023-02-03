import axios from 'axios'
import React, { useState } from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'

const articlesubform = () => {
    const [article_title, setarticle_title] = useState("");
    const [co_author_email, setco_author_email] = useState("");
    const [dept, setdept] = useState("");
    const [abstract , setabstract] = useState("");
    const [keywords, setkeywords] = useState("");

    const submit_article = () => {
        axios.post("http://localhost:3005/subarticle", {
            article_title: article_title,
            co_author_email: co_author_email,
            dept: dept,
            abstract: abstract,
            keywords: keywords,
        }).then(() => {
            console.log("Data entered");
        });
    };

    return (
        <>
            <link rel="shortcut icon" href="./images/uploadsite/logo400.png" />
            <div>
                < NavOne />
            </div>
            <div className="row p-4">
                <div className="col-lg-9">
                    <form className="forms-sample" action='' method='POST' encType='multipart/form-data'>
                        <div className="row">
                            <div className="col">
                                <span><b>Article Title</b></span>
                                <input type="text" onChange={(event) => {setarticle_title(event.target.value);}} required="" className="form-control" placeholder="Enter Article Title..." />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col">
                                <span><b>Corresponding Email</b></span>
                                <input type="email" onChange={(event) => {setco_author_email(event.target.value);}} required="" className="form-control" placeholder="Enter Article Authors..." />
                            </div>
                        </div>
                        <div className="form-group mt-1">
                            <span ><b>Department/Affiliation</b></span>
                            <textarea onChange={(event) => {setdept(event.target.value);}} className="form-control" required="" rows="3"></textarea>
                        </div>
                        <div className="form-group mt-1">
                            <span><b>Abstract</b></span>
                            <textarea className="form-control" onChange={(event) => {setabstract(event.target.value);}} required="" rows="5"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt-1">
                                <span><b>Keywords</b></span>
                                <input type="text" onChange={(event) => {setkeywords(event.target.value)}} className="form-control" required="" placeholder="Enter Keywords" />
                            </div>
                        </div>
                        <div className='row'>
                        <div className="form-group mt-1 col-6">
                            <span><b>Upload MS Word File</b></span>
                            <input type="file" name='ms_file' className="form-control-file" required="" />
                        </div>
                        <div className="form-group mt-1 col-6">
                            <span><b>Upload Potential Reviewer</b></span>
                            <input type="file" name='potential_reviewer' className="form-control-file" required="" />
                        </div>
                        </div>                       
                        <div>
                            <button onClick={submit_article} type="submit" className="btn btn-primary mr-2"><a href='submitmsg'>Submit</a></button>
                            <button className="btn btn-light">Cancel</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3">
                    < RightMenu />
                </div>
            </div>
            <div>
                < FooterOne />
            </div>
        </>
    )
}

export default articlesubform