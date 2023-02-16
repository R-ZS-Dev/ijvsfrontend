import React, { useState } from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'
import Link from 'next/link'
import Axios from "axios";
import { apiUrl } from "../baseurl";

function submission({ email, password }) {
    function formHandle(e) {
        if (e.target.name == "email") {
            email = e.target.value;
        } else {
            password = e.target.value;
        }
    }
    function loginBtn() {
        const res = Axios.post(apiUrl() + "userLogin/login", {
            email: email,
            password: password
        }).then(r => {
            if (r.data.message) {
                localStorage.setItem('loginId', r.data.loginid);
                window.location = 'article-sub-form';
            } else {
                alert("Invalid login");
            }
        });
    }
    return (
        <>
            <div>
                <NavOne />
            </div>
            <div className='row p-4'>
                <div className='col-lg-9'>
                    <h2 className="text-center mt-0">Submission</h2>
                    <hr className="hrbgline"></hr>
                    <div className='bg-light p-2'>
                        <p className="inpresstxtsiz">
                            The manuscript should be prepared according to the format of International Journal of Veterinary Science
                            (IJVS). After receiving of you article, you will get acknowledgement reply from the editor.
                        </p>
                        <div className='inpresstxtsiz text-justify'>
                            <b>Review process: </b> Journal has double blind review policy. The journal’s management will
                            try to get the submitted manuscript reviewed as early as possible. Usually reviewers are
                            requested to complete the review as early as possible; however, delay in the review process
                            will not be on the part of IJVS management. If all processes from complete submission to
                            revision go smoothly, then 10-12 weeks are required to reach to a conclusion (Acceptance/Rejection).
                        </div>
                    </div>
                    <div>
                        <div className="container-scroller">
                            <div className="container-fluid page-body-wrapper full-page-wrapper">
                                <div className="content-wrapper d-flex align-items-center auth px-0">
                                    <div className="row w-100 mx-0">
                                        <div className="col-lg-6 mx-auto">
                                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                                <h6 className="font-weight-light">Sign in to continue.</h6>
                                                {/* <form className="pt-3" action='' method='POST'> */}
                                                <div className="form-group">
                                                    <input type="email" name="email" onChange={formHandle} className="form-control form-control-lg" placeholder="Enter Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name="password" onChange={formHandle} className="form-control form-control-lg" placeholder="Password" />
                                                </div>
                                                <div className="mt-3">
                                                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={loginBtn} >SIGN IN</button>
                                                </div>
                                                {/* <div className="my-2 d-flex justify-content-between align-items-center">
                                                    <span href="userforpass" className="auth-link text-black">Forgot password?</span>
                                                </div> */}
                                                <div className="text-center mt-4 font-weight-light">
                                                    Dont have an account? <span href="userregistration" className="text-primary">Create</span>
                                                </div>
                                                {/* </form> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='archbrder p-2 bg-light mt-3'>
                        <b>If user have any Query Contact us via Email</b>
                        <div className='archartic mt-1'>
                            <Link href={'mailto: editor@ijvets.com'}><span>editor@ijvets.com</span></Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    < RightMenu />
                </div>
            </div>
            <div className='mt-5'>
                <FooterOne />
            </div>
        </>
    )
}
export async function getServerSideProps() {
    const email = "";
    const password = "";
    return { props: { email, password } }
}
export default submission