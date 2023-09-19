import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeaderTwo from "../component/layout/pageheader-2";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import CourseSideCetagory from "../component/sidebar/course-cetagory";
import CourseSideDetail from "../component/sidebar/course-detail";
import Respond from "../component/sidebar/respond";


const CourseSingle = () => {
    return (
        <Fragment>
            <Header />
            <PageHeaderTwo />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>Project Overview</h3>
                                            <p>Our AI and ML website project is a dynamic platform that harnesses artificial intelligence and machine learning to deliver personalized user experiences. Through cutting-edge algorithms, it offers tailored content recommendations, predictive analytics, and efficient data handling, making it a vital resource for AI and ML enthusiasts seeking the latest insights and knowledge in this rapidly evolving field.</p>
                                            <h4>What You'll Learn in This Project: </h4>
                                            <ul className="lab-ul">
                                                <li><i className="icofont-tick-mark"></i>Technical Skills</li>
                                                <li><i className="icofont-tick-mark"></i>Problem Solving</li>
                                                <li><i className="icofont-tick-mark"></i>Data Handling</li>
                                                <li><i className="icofont-tick-mark"></i>Model Building</li>
                                                <li><i className="icofont-tick-mark"></i>Domain Knowledge</li>
                                                <li><i className="icofont-tick-mark"></i>Collaboration</li>
                                                <li><i className="icofont-tick-mark"></i>Presentation Skills</li>
                                            </ul>
                                            {/* <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber  of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course</p> */}
                                            <p>AI/ML projects provide valuable learning experiences encompassing technical skills, problem-solving abilities, data handling, model development, evaluation, domain expertise, collaboration, ethical awareness, presentation aptitude, and a commitment to continuous learning. These projects equip individuals with the expertise to tackle real-world challenges, apply AI/ML algorithms effectively, and navigate ethical considerations while fostering effective communication and adaptability in this ever-evolving field.</p>
                                        </div>
                                    </div>
                                </div>
                                <Author />
                                <Comment />
                                <Respond />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-part">
                              {
                                //<CourseSideDetail />
                             }  
                                <CourseSideCetagory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default CourseSingle;