import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import { useState } from "react";
import Axios from "axios";

const userregistration = () => {
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [ph_num, setph_num] = useState(0);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [user_address, setuser_address] = useState("");
    const [city_name, setcity_name] = useState("");
    const [country_name, setcountry_name] = useState("");

    const addUsersignin =() => {
        Axios.post("http://localhost:3002/createreguser", {
           first_name: first_name,
           last_name: last_name,
           ph_num: ph_num,
           email: email,
           password: password,
           user_address: user_address,
           city_name: city_name,
           country_name: country_name,
        }).then(() => {
            console.log("success");
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
                    <form action='' method='POST'>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor=''>First Name</label>
                                <input type="text" onChange={(event) => {setfirst_name(event.target.value);}} className="form-control" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor=''>Last Name</label>
                                <input type="text" onChange={(event) => {setlast_name(event.target.value);}} className="form-control" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor=''>Phone Number</label>
                                <input type="text" onChange={(event) => {setph_num(event.target.value);}} className="form-control" placeholder="Phone Number" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor=''>Email</label>
                                <input type="text" onChange={(event) => {setemail(event.target.value);}} className="form-control" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor=''>Password</label>
                                <input type="Password" onChange={(event) => {setpassword(event.target.value);}} className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor=''>Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor=''>Address</label>
                            <input type="text" onChange={(event) => {setuser_address(event.target.value);}} className="form-control" placeholder="1234 Main St" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor=''>City Name</label>
                                <input type="text" onChange={(event) => {setcity_name(event.target.value);}} className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor=''>Country Name</label>
                                <input type="text" onChange={(event) => {setcountry_name(event.target.value);}} className="form-control" placeholder="Country Name" />
                            </div>
                        </div>
                        <button onClick={addUsersignin} type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>
                <div className='col-lg-2'></div>
            </div>
            <div>
                <FooterOne />
            </div>
        </>
    )
}

export default userregistration