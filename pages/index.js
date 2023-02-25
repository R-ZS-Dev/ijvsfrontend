import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { apiUrl } from "../baseurl"
import FooterOne from "../components/Footer"
import NavOne from "../components/NavBar"
import RightMenu from "../components/RightSide"
import Axios from "axios";

const Home = ({ homeList, total_vistor }) => {
  // const [curIndex, setCurIndex] = useState(0);
  // const [checkVistorReq, setcheckVistorReq] = useState(true);

  // const array = ["/images/uploadsite/slide1.jpg", "/images/uploadsite/slide2.jpg", "/images/uploadsite/slide3.jpg",
  //   "/images/uploadsite/slide4.jpg"];
  // setTimeout(() => {
  //   if (checkVistorReq) {
  //     Axios.get(apiUrl() + "sitevisitor/newVistor").then((response) => {
  //       console.log("yes");
  //       setcheckVistorReq(false);
  //     });
  //   }

  // }, 5000);
  const [index, setIndex] = useState(0);
  const array = ["/images/uploadsite/slide1.jpg", "/images/uploadsite/slide2.jpg", "/images/uploadsite/slide3.jpg",
      "/images/uploadsite/slide4.jpg", "/images/uploadsite/slide5.jpg", "/images/uploadsite/slide6.jpg", "/images/uploadsite/slide7.jpg"]
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
      const interval = setInterval(() => setIndex(count => loop(count + 1)), 4000);
      return () => clearInterval(interval)
  })
 
  return (
    <>
      <div>
        < NavOne />
      </div>
      <div className="row p-4">
        <div className="col-lg-9">
          <div className='mt-0'>
            <div className=''>
              <Image src={array[index]} height={"400"} width={'970'} alt='dead Image' />
              {/* <Image src={'/images/slider/slider_maker.gif'} height={"400"} width={'1000'} alt='dead Image' /> */}
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
              {homeList.map((val, i) => (
                <div className="mt-3" key={i}>
                  <div className="ourarticle p-1">
                    <Link href={"/./upload/" + val.pdf_file} target="_blank"><span>
                      <strong className="text-dark">{val.article_title}</strong>
                      <div className="mt-0">
                        <label className="text-dark">{val.all_authors}</label>
                      </div>
                      <label className="text-dark">{val.departments}</label>
                    </span></Link>
                    <label className="homdoi">DOI: <Link href={"/./upload/" + val.pdf_file} target="_blank"><span>{val.article_doi}</span></Link></label>
                    <hr className="mt-1"></hr>

                  </div>
                </div>
              ))}
            </div>

            <div className="openacc mt-3">
              <div className="openacent p-2">
                <Image src="/images/uploadsite/openaccess.png" height={'50'} width={'150'} alt="IJVS" />
              </div>
            </div>

            <h2 className="text-center mt-2">Indexing</h2>
            <hr className="hrbgline"></hr>
            <div className="row mdivimgs">
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="https://www.scopus.com/sourceid/21100820608">
                  <Image src="/images/uploadsite/scopus.jpg" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/publons.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/cab.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/cabi.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/sjr.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/Google-Scholar.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/agri-res.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="http://creativecommons.org/licenses/by-nc/4.0/">
                  <Image src="/images/uploadsite/ccc.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/drji.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/ici.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/International.jpg" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/open-access.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/ez.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/Research-gate.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/sis.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/Ulrichs.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/jd.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/road.jpg" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/wc.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/base.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/lu.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
              <div className="col-3 mt-1 sizimg">
                <Link className="sizimgn" href="/">
                  <Image src="/images/uploadsite/asi.png" height={'50'} width={'150'} alt="IJVS" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          < RightMenu />
        </div>
      </div>
      <div>
        <FooterOne site_vistor={total_vistor.vistors} />
      </div>
    </>
  )
}
export async function getServerSideProps() {
  const vistor_add = await fetch(apiUrl() + "sitevisitor/newVistor");
  const res = await fetch(apiUrl() + "home/view")
  const homeList = await res.json();

  const vistor_get = await fetch(apiUrl() + "sitevisitor/viewVistor/");
  const total_vistor = await vistor_get.json();
  return { props: { homeList, total_vistor } }
}
export default Home