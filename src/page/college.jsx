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


const College = () => {
    return (
        <Fragment>
            <Header />
            <HeaderCollege />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div  className="col-lg-10">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            <h3>College Overview</h3>
                                            <p>Heritage Institute of Technology, Kolkata, West Bengal is an autonomous institute which is affiliated to MAKAUT, Kolkata. 
                                               It is accredited by NAAC and NBA and is AICTE approved. The institution mainly offers three programmes, B.Tech, M.Tech, and MCA.
                                               The institute has received the ‘Most Preferred Engineering Institute of 2020’
                                               award and was ranked at 201st position under Engineering category by the NIRF in 2022.
                                            </p>
                                           {/*  <h4>What You'll Learn in This Project: </h4>
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
                                            {/* <p>AI/ML projects provide valuable learning experiences encompassing technical skills, problem-solving abilities, data handling, model development, evaluation, domain expertise, collaboration, ethical awareness, presentation aptitude, and a commitment to continuous learning. These projects equip individuals with the expertise to tackle real-world challenges, apply AI/ML algorithms effectively, and navigate ethical considerations while fostering effective communication and adaptability in this ever-evolving field.</p> */}
                                        </div>
                                    </div>
                                </div>
                                <Projects />
                                {/* <div className="course-video">
                                    <div className="course-video-title">
                                        <h4>Course Content</h4>
                                    </div>
                                    <div className="course-video-content">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion01">
                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span>1.Introduction</span> <span>5lessons, 17:37</span> </button>
                                                </div>
                                                <div id="videolist1" className="accordion-collapse collapse show" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">1.1 Introduction to Artificial Intelligence and Machine Learning 02:30 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">1.2 Data Preprocessing and Exploration  08:33 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">1.3 Linear Regression and Gradient Descent 03:38 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">1.4 Logistic Regression and Classification 02:30 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">1.5 Model Evaluation and Metrics 03:48 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion02">
                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span>2.How to Create data model.</span> <span>5 lessons, 52:15</span> </button>
                                                </div>
                                                <div id="videolist2" className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">2.1 Overfitting and Regularization 06:20 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">2.2 Decision Trees and Random Forests 07:33 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">2.3 Support Vector Machines (SVM) 06:30 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">2.4 Unsupervised Learning: Clustering and Dimensionality Reduction 08:34 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">2.5 Neural Networks and Deep Learning Basics 10:30 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <Author />
                                <Comment />
                                <Respond />
                            </div>
                        </div>
                       {/*   <div className="col-lg-4">
                            <div className="sidebar-part">
                                <CourseSideDetail />
                                <CourseSideCetagory />
                            </div>
                        </div>  */}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default College;