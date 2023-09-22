import React from 'react'

import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import HeaderCollege from "../component/layout/headercollege";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import CourseSideCetagory from "../component/sidebar/course-cetagory";
import CourseSideDetail from "../component/sidebar/course-detail";
import Respond from "../component/sidebar/respond";
import Projects from "../component/section/project-coll"; 
import { Card } from 'antd';
import BasudevImage from './img/teamMember/BasuDev.jpg'
import ChandanImage from './img/teamMember/Chandan.jpg'
import SaswataImage from './img/teamMember/Saswata.jpg'
import SarbojitImage from './img/teamMember/Sarbojit.jpg'
import SejalImage from './img/teamMember/Sejal.jpg'
import SouvikImage from './img/teamMember/Souvik.jpg'
import { flexbox } from '@mui/system';


const { Meta } = Card;
const aboutList = [
    {
        imgUrl: BasudevImage,
        imgAlt: 'about icon rajibraj91 rajibraj',
        name: 'Basudev Ghosh',
        desc: 'Full Stack Developer',
    },

    {
        imgUrl: ChandanImage,
        imgAlt: 'about icon rajibraj91 rajibraj',
        name: 'Chandan Maity',
        desc: 'Backend Developer',
    },

    {
        imgUrl: SaswataImage,
        imgAlt: 'about icon rajibraj91 rajibraj',
        name: 'Saswata Maitra',
        desc: 'Frontend Developer',
    },

    {
        imgUrl: SarbojitImage,
        imgAlt: 'about icon rajibraj91 rajibraj',
        name: 'Sarbojit Saha',
        desc: 'Frontend Developer',
    },

    {
        imgUrl: SejalImage,
        imgAlt: 'about icon rajibraj91 rajibraj',
        name: 'Sejal Sinha',
        desc: 'Frontend Developer',
    },

    {
        imgUrl: SouvikImage,
        imgAlt: 'about icon rajibraj91 rajibraj',
        name: 'Souvik Ghosh',
        desc: 'Backend Developer',
    }

]


const AboutUs = () => {
  return (
    <Fragment>
            <Header />
            <div className="blog-section padding-tb section-bg">
                <div className="container" style={{marginTop:'200px', display:'flex', flexFlow:'wrap'}}>
                                    {aboutList.map((val, i) => (
                                        <Card hoverable style={{width:'260px', height:'500px', marginLeft:'100px', marginTop:'100px'}} cover={<img alt="example" src={val.imgUrl} style={{height:'350px'}}/>} >
                                            <Meta title={val.name} description={val.desc} />
                                        </Card>
                                     ))}
                </div>
            </div>
            
            <Footer />
        </Fragment>
  )
}

export default AboutUs
