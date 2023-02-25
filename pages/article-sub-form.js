import React, { useState } from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'
import Axios from "axios";
import { apiUrl } from "../baseurl";

const articlesubform = ({ article_title, co_author_email, dept, abstract, keywords, errorMsg, pdfFile, docxFile, total_vistor }) => {
    function handleChangeValue(e){
        let curName=e.target.name;
        let curValue=e.target.value;
        if (curName == "article_title") {
            article_title=curValue;
        } else  if (curName == "co_author_email") {
            co_author_email=curValue;
        }else  if (curName == "dept") {
            dept=curValue;
        }else  if (curName == "abstract") {
            abstract=curValue;
        }else  if (curName == "keywords") {
            keywords=curValue;
        }
    }
    function pdfFileChange(e) {
        pdfFile = e.target.files[0];
    }

    function docxFileChange(e) {
        docxFile = e.target.files[0];
    }

    const submit_article = () => {
        if (localStorage.getItem('loginId') !== null) {
            if (article_title == "" || co_author_email == "" ||dept == "" || abstract == "" || keywords == "" || pdfFile == null || docxFile == null) {
               alert("All Field requrired");
                return false;
            }
            const pdfformData = new FormData();
            pdfformData.append('file_pdf', pdfFile);
            pdfformData.append('file_docx', docxFile);

            Axios.post(apiUrl() + "artical/file_upload", pdfformData, {
                headers: {
                    'Content-Type': 'application/form-data'
                }
            }).then(r => {
                const file_pdf = r.data.file_pdf;
                const file_docx = r.data.file_docx;
                Axios.post(apiUrl() + "artical/create",
                    {
                        article_title: article_title,
                        co_author_email: co_author_email,
                        dept: dept,
                        abstract: abstract,
                        keywords: keywords,
                        user_login_id: localStorage.getItem("loginId") ?? 0,
                        file_pdf: file_pdf,
                        file_docx: file_docx

                    }).then(r => {
                        if (r.data.message) {
                            localStorage.removeItem('loginId');
                            window.location = 'submitmsg';
                        } else {
                            alert(r.data.result);
                        }
                    });
            });


        } else {
           alert("Login Required");
        }

    };

    return (
        <>
            <link rel="shortcut icon" href="./images/uploadsite/logo400.png" />
            <div>
                < NavOne />
            </div>
            <div className="row p-4">
                <div className="col-lg-9">
                    <p className="text-center">{errorMsg}</p>
                    <h3 className='text-center'>Article Submission Form</h3>
                    <div className="row">
                        <div className="col">
                            <span><b>Article Title</b></span>
                            <input type="text" name="article_title" onChange={handleChangeValue} className="form-control" placeholder="Enter Article Title..." />
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col">
                            <span><b>Corresponding Email</b></span>
                            <input type="email" onChange={handleChangeValue} name="co_author_email" className="form-control" placeholder="Enter Article Authors..." />
                        </div>
                    </div>
                    <div className="form-group mt-1">
                        <span ><b>Department/Affiliation</b></span>
                        <textarea onChange={handleChangeValue} name="dept" className="form-control" rows="3"></textarea>
                    </div>
                    <div className="form-group mt-1">
                        <span><b>Abstract</b></span>
                        <textarea className="form-control" name="abstract" onChange={handleChangeValue} rows="5"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mt-1">
                            <span><b>Keywords</b></span>
                            <input type="text" name="keywords" onChange={handleChangeValue} className="form-control" placeholder="Enter Keywords" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group mt-1 col-6">
                            <span><b>Upload MS Word File</b></span>
                            <input type="file" name='ms_file' onChange={pdfFileChange} className="form-control-file" />
                        </div>
                        <div className="form-group mt-1 col-6">
                            <span><b>Upload Potential Reviewer</b></span>
                            <input type="file" name='potential_reviewer' onChange={docxFileChange} className="form-control-file" />
                        </div>
                    </div>
                    <div>
                        <button onClick={submit_article} type="submit" className="btn btn-primary mr-2">Submit</button>
                        <button className="btn btn-light">Cancel</button>
                    </div>
                </div>
                <div className="col-lg-3">
                    < RightMenu />
                </div>
            </div>
            <div>
                < FooterOne site_vistor={total_vistor.vistors} />
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const vistor_get = await fetch(apiUrl() + "sitevisitor/viewVistor/");
    const total_vistor = await vistor_get.json();
    return { props: { article_title: "", co_author_email: "", dept: "", abstract: "", keywords: "", pdfFile: null, docxFile: null, total_vistor, errorMsg: "" } }
}

export default articlesubform
