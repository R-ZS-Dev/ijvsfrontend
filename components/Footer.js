import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function FooterOne({site_vistor}) {
    return (
        <>
            {/* <section id="footer"> */}
                <div className="footbgclr">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-3 col-md-3 mt-5">
                            <h5>About US</h5>
                            <ul className="list-unstyled quick-links ">
                                <li><Link href='/'><span className="text-light">Home</span></Link></li>
                                <li><Link href='./contact-us'><span className="text-light">Contact us</span></Link></li>                                
                                <li><Link href='./authors-guide'><span className="text-light">Authors Guide</span></Link></li> 
                                <li><Link href='./editorial-board'><span className="text-light">Editorial Board</span></Link></li>                               
                                <li><Link href='./usp'><span className="text-light">Unique Scientific Publishers</span></Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 mt-5">
                            <h5>Important Links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><Link href='/archive'><span className="text-light">Archive</span></Link></li>                                
                                <li><Link href='/submission'><span className="text-light">Submission</span></Link></li>                                
                                <li><Link href='/in-press'><span className="text-light">In Press Articles</span></Link></li>                                
                                <li><Link href='/top-cited-articles'><span className="text-light">Top Cited Articles</span></Link></li>
                                <li><Link href='https://hjrs.hec.gov.pk/index.php?r=site%2Fresult&id=1001077#journal_result'><span className="text-light">HEC Recognized Journal(Y Category)</span></Link></li>                                
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 mt-5">
                            <h5>Relevant</h5>
                            <ul className="list-unstyled quick-links">                                
                                <li><Link href='http://uniquescientificpublishers.com/'><span className="text-light">USP</span></Link></li>
                                <li><Link href={'http://agrobiologicalrecords.com/'}><span className="text-light">ABR</span></Link></li>
                                <li><Link href={'http://ijagbio.com/'}><span className="text-light">IJAG</span></Link></li>
                                <li><Link href='/'><span className="text-light">Site Map</span></Link></li>
                                <li><Link href='./submission'><span className="text-light">User Login</span></Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 mt-5">
                            <h5>Visitors</h5>
                            <ul className="list-unstyled quick-links">
                                <li><span className="text-light">{site_vistor ?? 0}</span></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 "><hr></hr>
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><Link href={'https://www.facebook.com/ijvets'}><span><FaFacebook className="iconssizes" /></span></Link></li>
                                <li className="list-inline-item"><Link href={'https://twitter.com/ijvets'}><span><FaTwitter className="iconssizes" /></span></Link></li>
                                <li className="list-inline-item"><Link href={'/'}><span><FaInstagram className="iconssizes" /></span></Link></li>
                                <li className="list-inline-item"><Link href={'mailto: editor@ijvets.com'}><span><FaRegEnvelope className="iconssizes" /></span></Link></li>
                            </ul>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p className="">Copyright ©2022 All rights reserved |<Link href={'./'}><span className="text-light ml-2" target="_blank">ijvets.com</span></Link></p>
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