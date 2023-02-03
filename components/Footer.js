import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function FooterOne() {
    return (
        <>
            {/* <section id="footer"> */}
                <div className="footbgclr">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-3 col-md-3 mt-5">
                            <h5>About US</h5>
                            <ul className="list-unstyled quick-links ">
                                <li><Link href='/'><a className="text-light">Home</a></Link></li>
                                <li><Link href='./contact-us'><a className="text-light">Contact us</a></Link></li>                                
                                <li><Link href='./authors-guide'><a className="text-light">Authors Guide</a></Link></li> 
                                <li><Link href='./editorial-board'><a className="text-light">Editorial Board</a></Link></li>                               
                                <li><Link href='./usp'><a className="text-light">Unique Scientific Publishers</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 mt-5">
                            <h5>Important Links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><Link href='/archive'><a className="text-light">Archive</a></Link></li>                                
                                <li><Link href='/submission'><a className="text-light">Submission</a></Link></li>                                
                                <li><Link href='/in-press'><a className="text-light">In Press Articles</a></Link></li>                                
                                <li><Link href='/top-cited-articles'><a className="text-light">Top Cited Articles</a></Link></li>
                                <li><Link href='https://hjrs.hec.gov.pk/index.php?r=site%2Fresult&id=1001077#journal_result'><a className="text-light">HEC Recognized Journal(Y Category)</a></Link></li>                                
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 mt-5">
                            <h5>Relevant</h5>
                            <ul className="list-unstyled quick-links">                                
                                <li><Link href='http://uniquescientificpublishers.com/'><a className="text-light">USP</a></Link></li>
                                <li><Link href={'http://agrobiologicalrecords.com/'}><a className="text-light">ABR</a></Link></li>
                                <li><Link href={'http://ijagbio.com/'}><a className="text-light">IJAG</a></Link></li>
                                <li><Link href='/'><a className="text-light">Site Map</a></Link></li>
                                <li><Link href='./submission'><a className="text-light">User Login</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 mt-5">
                            <h5>Visitors</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a className="text-light">Number</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 "><hr></hr>
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><Link href={'https://www.facebook.com/ijvets'}><a><FaFacebook className="iconssizes" /></a></Link></li>
                                <li className="list-inline-item"><Link href={'https://twitter.com/ijvets'}><a><FaTwitter className="iconssizes" /></a></Link></li>
                                <li className="list-inline-item"><Link href={'/'}><a><FaInstagram className="iconssizes" /></a></Link></li>
                                <li className="list-inline-item"><Link href={'mailto: editor@ijvets.com'}><a><FaRegEnvelope className="iconssizes" /></a></Link></li>
                            </ul>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p className="">Copyright ©2022 All rights reserved |<Link href={'./'}><a className="text-light ml-2" target="_blank">ijvets.com</a></Link></p>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
            {/* </section> */}
        
        </>
    )
}
export default FooterOne