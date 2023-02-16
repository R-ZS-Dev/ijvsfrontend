import Image from "next/image"
import Link from "next/link"

const NavOne = () => {
    return (
        <>
            <div className="make_top_nav">
                <div className="row">
                    <div className="col-3">
                        <Link href={'/'}><span><Image className="p-1" src="/images/uploadsite/logo400.png" alt="IJVS Logo" height="85"
                            width={"85"} /></span></Link>
                    </div>
                    <div className="col-6">
                        <span className="fsty">
                            <b>
                                <span className="textclr">I</span>nternational
                                <span className="textclr"> J</span>ournal of
                                <span className="textclr"> V</span>eterinary <span className="textclr">S</span>cience
                                <p className="textclr1">e-ISSN: 2305-4360; p-ISSN: 2304-3075</p>
                            </b>
                        </span>
                    </div>
                    <div className="col-3 p-1">
                        <span>
                            <Image src="/images/uploadsite/2545.png" alt="Image 2545" height="85" width={"118"} />
                        </span>
                    </div>
                </div>
            </div>

            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title px-5">
                        <Link className='ijvsnavtitle px-4' href='/'><b>IJVS</b></Link>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <Link className="ml-2" href="/editorial-board">Editorial Board</Link>
                    <Link className="ml-2" href="/authors-guide">Authors Guide</Link>
                    <Link className="ml-2" href="/contact-us">Contact us</Link>
                    <Link className="ml-2" href="/usp">Unique Scientific Publishers</Link>
                    <strong className="text-light">Scopus Score: 1.7</strong>                  
                </div>
            </div>
        </>
    )
}
export default NavOne