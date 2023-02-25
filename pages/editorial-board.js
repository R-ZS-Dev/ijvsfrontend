import Link from 'next/link'
import React from 'react'
import FooterOne from '../components/Footer'
import NavOne from '../components/NavBar'
import RightMenu from '../components/RightSide'
import { apiUrl } from "../baseurl"

const editorial_board = ({ total_vistor }) => {

  return (
    <>
    <div>
        < NavOne />
    </div>
    <div className='row p-4'>
        <div className='col-lg-9'>
            <h2 className="text-center">Editorial Board</h2>
            <hr className="hrbgline"></hr>
            <div className=''>
                <h4>Editor-in-Chief</h4>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Ahrar Khan:</b> Professor, Shandong Vocational Animal Science and Veterinary College, Weifang, China</span></Link>
                </div>
                <h4 className='pl-3 p-2'>Editor</h4>                
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>J. C. Okonkwo:</b> Associate Professor, Nnamdi Azikiwe University, Awka, Anambra, Nigeria</span></Link>
                </div>
                <h4 className='pl-3 p-2'>Members</h4>                
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Alireza Lotfi:</b> Associate Professor, Animal Physiology, Islamic Azad University, Iran</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Arcangelo Gentile:</b> Professor, Department of Veterinary Medical Science of the University of Bologna, Bologna, Italy</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Dražen Duricic:</b>  Professor, Faculty of Veterinary Medicine, University of Zagreb, Croatia</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Gil-Jae Cho:</b> Professor, College of Veterinary Medicine, Kyungpook National University, Republic of Korea</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Hakan Salci:</b> Associate Professor, Uludag University, Bursa, Turkey</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Hanem Fathy Khater:</b> Professor, Benha University, Egypt</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Hui Zhang:</b> Professor, College of Veterinary Medicine, South China Agricultural University, Guangzhou, China</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Jose Luis Martinez:</b> Professor, Universidad de Santiago de, Chile</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Khalid Mehmood:</b> Assistant Professor, Islamia University Bahawalpur, Pakistan</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Leonardo Leonardi:</b> Professor, University of Perugia, Italy</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Li Kun:</b> Associate Professor, College of Veterinary Medicine, Nanjing Agricultural University, Nanjing, China</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Melinda Brindley:</b> Professor, College of Veterinary Medicine, University of Georgia, USA</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Ming Yue:</b> Associate Professor, The University of Chicago, USA</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Mohamed Abdelsalam Abdalla:</b> Professor, Sudan University of Science & Technology, Khartoum North, Sudan</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Monica Butnariu:</b> Professor, Banat University of Agricultural Sciences & Veterinary Medicine, Timisoara, Romania</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Monika H. Seltenhammer:</b> Associate Professor, BOKU-University of Renewable Resources & Applied Life Sciences, Austria</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Muhammad Ijaz:</b> Associate Professor, University of Veterinary and Animal Sciences, Lahore, Pakistan</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Neelima Sukumar:</b> Associate Professor, Cornell University, Ithaca, NY, USA</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Nikolaos D. Soultos:</b> Professor, Aristotle University of Thessaloniki, Greece</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Nitesh Kumar:</b> Associate Professor, College of Veterinary Science & A.H., Kuthulia, Rewa (MP), India</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Ping Liu:</b> Professor, Jiangxi Agricultural University, Jiangxi Province, China</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Ranganath Mamidi:</b>Associate Professor, Case Western Reserve University, Cleveland, Ohio, USA</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Riaz Hussain:</b> Associate Professor, Faculty of Veterinary and Animal Sciences, Islamia University Bahawalpur, Pakistan</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Rinesh Kumar:</b> Professor, College of Veterinary science and Animal Husbandry, Rewa, M.P. India</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Satya Achanta:</b> Associate Professor, Yale University School of Medicine, Room SHM B323, New Haven, CT, USA</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Sushrut Arora:</b> Associate Professor, Baylor College of Medicine, Houston, TX 77030, USA</span></Link>
                </div>
                <div className='pl-3'>
                    <Link href='/'><span className='editorlink_color'><b>Tamas Nagy:</b> Professor, College of Veterinary Medicine, University of Georgia, USA</span></Link>
                </div>
            </div>            
        </div>
        <div className='col-lg-3'>
            < RightMenu />
        </div>
    </div>
    <div>
        < FooterOne site_vistor={total_vistor.vistors} />
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
    const vistor_get = await fetch(apiUrl() + "sitevisitor/viewVistor/");
    const total_vistor = await vistor_get.json();
        
    return { props: { total_vistor } }
}

export default editorial_board