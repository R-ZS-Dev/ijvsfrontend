import Image from "next/image"
import Link from "next/link"

function RightMenu() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 w-100">
                    <div className="riht">
                        <div className="p-1"><Link href={'/submission'}><a className="btnn btn1"><button className="firtbtn">Online Submission</button></a></Link></div>
                        <div className="p-1"><Link href={'/in-press'}><a className="btnn btn1"><button className="firtbtn">In Press Articles</button></a></Link></div>
                        <div className="p-1"><Link href={'/archive'}><a className="btnn btn1"><button className="firtbtn">Archive</button></a></Link></div>
                        <div className="p-1"><Link href={'/top-cited-articles'}><a className="btnn btn1"><button className="firtbtn">Top Cited Articles</button></a></Link></div>

                        <div className="p-1 bg-light">
                            <div className="card">
                                <div className="card-header">Search</div>
                                <div className="card-body">
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                        <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="img_cls p-1 mt-2 bg-light">
                            <Link href='http://uniquescientificpublishers.com/'><a>
                                <Image src="/./images/uploadsite/usp.png" height={'170'} width={'170'} alt="" />
                                <hr></hr>
                                <p><b className="usp">FAISALABAD - PAKISTAN</b></p>
                            </a></Link>
                        </div>

                        <div className="img_cls p-1 mt-2 bg-light">
                            <Link href='https://hjrs.hec.gov.pk/index.php?r=site%2Fresult&id=1001077#journal_result'><a>
                            <Image src="/./images/uploadsite/HEC.jpg" height={'170'} width={'180'} alt="" />
                                <h5 className="hrecj">HEC Recognized Journal</h5>
                                <h5 className="ycat">(Y Category)</h5>
                            </a></Link>
                        </div>

                        <div className="img_cls p-1 mt-2 bg-light">
                            <Link href='https://www.scimagojr.com/journalsearch.php?q=21100820608&tip=sid&exact=no'><a>
                                <Image src="/./images/uploadsite/journal_img.png" height={'180'} width={'200'} alt="" />
                            </a></Link>
                        </div>

                        <div className="img_cls p-1 mt-2 bg-light">
                            <Link href='/'><a>
                                <Image src="/./images/uploadsite/graph.jpg" height={'150'} width={'200'} alt="" />
                            </a></Link>
                        </div>

                        <div className="img_cls p-1 mt-2 bg-light">
                            <Link href='https://www.scopus.com/sourceid/21100820608'><a>
                                <Image src="/./images/uploadsite/scopus.jpg" height={'70'} width={'180'} alt="" />
                            </a></Link>
                        </div>

                        <div className="img_cls p-1 mt-2 bg-light">
                            <Link href='https://www.doi.org/'><a>
                                <Image src="/./images/uploadsite/doi.png" height={'70'} width={'180'} alt="" />
                            </a></Link>
                        </div>

                        <div className="img_cls p-1 mt-2 bg-light">
                            <Link href='/'><a>
                                <Image src="/./images/uploadsite/oa.png" height={'70'} width={'180'} alt="" />
                            </a></Link>
                        </div>

                        <div className="img_cls p-1 mt-2 bg-light">
                            <Link href='http://creativecommons.org/licenses/by-nc/4.0/'><a>
                                <Image src="/./images/uploadsite/ccc.png" height={'70'} width={'180'} alt="" />
                            </a></Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default RightMenu