import Image from "next/image"
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { apiUrl } from "../baseurl";

const HeroSlider = () => {
    const [index, setIndex] = useState(0);
    const [homeList, setHomeList] = useState([1, 2, 3, 4]);
    // var homeList=[];
    const array = ["/images/uploadsite/slide1.jpg", "/images/uploadsite/slide2.jpg", "/images/uploadsite/slide3.jpg",
        "/images/uploadsite/slide4.jpg"]
    function loop(count) {
        if (count == array.length) {
            return count = 0;
        }
        if (count < 0) {
            return count = array.length - 1;
        }
        return count;
    }

    useEffect(() => {
        Axios.get(apiUrl() + "home/view").then((response) => {
            setHomeList(response.data);
        });
        const interval = setInterval(() => setIndex(count => loop(count + 1)), 4000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className='mt-0'>
                <div className=''>
                    <Image src={array[index]} height={"400px"} width={'1000px'} layout="" alt='dead Image' />
                </div>
            </div>
            <div className="homepagecont mt-2">
                <h2 className="text-center">Scope and Perspectives</h2>
                <hr className="hrbgline"></hr>
                <p className="pfirst bg-light p-2">
                    “International Journal of Veterinary Science” (IJVS) is an online international peer reviewed open
                    accessed journal which publishes original research papers. Its scope is broad and international,
                    covering a wide range of research areas including anatomy, biochemistry, biotechnology, clinical
                    medicine, and surgery, theriogenology, physiology, pharmacology, toxicology/toxicopathology (rats,
                    birds, fish, or animals), pathology, microbiology and immunology, parasitology, epidemiology, breeding
                    and genetic, feed and nutrition, wildlife, zoology, animal products and their processing. Original
                    research papers, review articles, extension articles, clinical articles and short communications on
                    the production and diseases of animals, including studies in comparative medicine are published in
                    this journal. Manuscripts digging out the possible molecular mechanism of the disease etiology/providing
                    pathogenesis of any toxicological event in natural or experimental conditions will be dealt on priority
                    in review/publication. Only those manuscripts are considered for publication whose contents have not been
                    published and are not being considered for publication in any other journal.
                </p>

                <div>
                    <h1 className="h3fontsiz text-center">Our Recent Articles</h1>
                    <hr className="hrbgline"></hr>
                    {homeList.map((val,i) => (
                        <div className="ourarticle p-1" key={i}>
                            <Link href={"/./upload/" + val.pdf_file} target="_blank"><a>
                                <strong className="text-dark">{val.article_title}</strong>
                                <div className="mt-0">
                                    <label className="text-dark">{val.all_authors}</label>
                                </div>
                                <label className="text-dark">{val.departments}</label>
                            </a></Link>
                            <label className="homdoi">DOI: <Link href={"/./upload/" + val.pdf_file} target="_blank"><a>{val.article_doi}</a></Link></label>
                            <hr className="mt-1"></hr>
                        </div>
                    ))}
                </div>

                <div className="openacc">
                    <div className="openacent p-2">
                        <Image src="/images/uploadsite/openaccess.png" height={'50px'} width={'150px'} alt="IJVS" />
                    </div>
                </div>

                <h2 className="text-center mt-2">Indexing</h2>
                <hr className="hrbgline"></hr>
                <div className="row mdivimgs">
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="https://www.scopus.com/sourceid/21100820608">
                            <Image src="/images/uploadsite/scopus.jpg" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/publons.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/cab.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/cabi.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/sjr.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/Google-Scholar.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/agri-res.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="http://creativecommons.org/licenses/by-nc/4.0/">
                            <Image src="/images/uploadsite/ccc.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/drji.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/ici.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/International.jpg" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/open-access.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/ez.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/Research-gate.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/sis.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/Ulrichs.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/jd.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/road.jpg" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/wc.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/base.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/lu.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                    <div className="col-3 mt-1 sizimg">
                        <Link className="sizimgn" href="/">
                            <Image src="/images/uploadsite/asi.png" height={'50px'} width={'150px'} alt="IJVS" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSlider
