import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import { useState } from "react";
import Axios from "axios";
import { apiUrl } from "../baseurl";

const userregistration = ({first_name,last_name,ph_num,email,password,confpassword, user_address, city_name, country_name, errorMsg}) => {
    function handleChangeValue(e){
        let curName=e.target.name;
        let curValue=e.target.value;
        if (curName == "first_name") {
            first_name=curValue;
        } else  if (curName == "last_name") {
            last_name=curValue;
        }else  if (curName == "ph_num") {
            ph_num=curValue;
        }else  if (curName == "email") {
            email=curValue;
        }else  if (curName == "password") {
            password=curValue;
        }else  if (curName == "confpassword") {
            confpassword=curValue;
        }else  if (curName == "user_address") {
            user_address=curValue;
        }else  if (curName == "city_name") {
            city_name=curValue;
        }else  if (curName == "country_name") {
            country_name=curValue;
        }
    }
    const addUsersignin = () => {
        if (confpassword != password) {
            alert("Both Password should be same");
            return false;
        }
        Axios.post(apiUrl() + "userLogin/create",
            {
                first_name: first_name,
                last_name: last_name,
                ph_num: ph_num,
                email: email,
                password: password,
                user_address: user_address,
                city_name: city_name,
                country_name: country_name,

            }).then(r => {
                if (r.data.message) {
                    window.location = 'submission';
                } else {
                    alert(r.data.result);
                }
            });
    };

    return (
        <>
            <div>
                < NavOne />
            </div>
            <div className='row p-5'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <p className='text-center'>{errorMsg}</p>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor=''>First Name</label>
                            <input type="text" name='first_name' onChange={handleChangeValue} className="form-control" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor=''>Last Name</label>
                            <input type="text" name='last_name' onChange={handleChangeValue} className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor=''>Phone Number</label>
                            <input type="text"name='ph_num' onChange={handleChangeValue} className="form-control" placeholder="Phone Number" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor=''>Email</label>
                            <input type="text" name='email' onChange={handleChangeValue} className="form-control" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor=''>Password</label>
                            <input type="Password" name='password' onChange={handleChangeValue} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor=''>Confirm Password</label>
                            <input type="password" name='confpassword' className="form-control" onChange={handleChangeValue} placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor=''>Address</label>
                        <input type="text" name='user_address' onChange={handleChangeValue} className="form-control" placeholder="1234 Main St" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor=''>City Name</label>
                            <input type="text" name='city_name' onChange={handleChangeValue} className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor=''>Country Name</label>
                            <input type="text" name='country_name' onChange={handleChangeValue} className="form-control" placeholder="Country Name" />
                        </div>
                    </div>
                    <button onClick={addUsersignin} className="btn btn-primary">Sign in</button>
                </div>
                <div className='col-lg-2'></div>
            </div>
            <div>
                <FooterOne />
            </div>
        </>
    )
}

export async function getServerSideProps() {

    return { props: {first_name:"",last_name:"",ph_num:"",email:"",password:"",confpassword:"", user_address:"", city_name:"", country_name:"", errorMsg:""} }
}
export default userregistration