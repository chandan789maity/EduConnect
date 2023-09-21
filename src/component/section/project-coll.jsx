
import img1 from '../../assets/images/course/music.jpg';
import img2 from '../../assets/images/course/bot.jpg';
import img3 from '../../assets/images/course/healthcare.jpg';
import img4 from '../../assets/images/course/DAM.png';
import img5 from '../../assets/images/course/iot.webp';
import img6 from '../../assets/images/course/ds.jpg';


import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";


const subTitle = "Archives";
const title = "Innovations by Students";




const courseList = [
    {

        imgUrl: img1,
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Recently added',
        reviewCount: '03 reviews',
        title: 'Chatbot Song Recommender System',
        totalLeson: '40+ Projects',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Aarav Patel',
        btnText: 'Read More',
    },
    {
        imgUrl: img2,
        imgAlt: 'robo',
        price: '$30',
        cate: 'Recently added',
        reviewCount: '03 reviews',
        title: 'Flame Thrower and Fire Extinguisher Robot',
        totalLeson: '30+ Projects',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Priya Sharma',
        btnText: 'Read More',
    },
    {
        imgUrl: img3,
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Recently added',
        reviewCount: '03 reviews',
        title: 'Patient Risk Identification',
        totalLeson: '20+ Projects',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Arjun Gupta',
        btnText: 'Read More',
    },
    {
        imgUrl: img4,
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Recently added',
        reviewCount: '03 reviews',
        title: 'Digital Asset Marketplace',
        totalLeson: '15+ Projects',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Anika Singh',
        btnText: 'Read More',
    },
    {
        imgUrl: img5,
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Recently added',
        reviewCount: '03 reviews',
        title: 'Smart Door Lock System – IoT Home Automation',
        totalLeson: '50+ Projects',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Rohan Mehta',
        btnText: 'Read More',
    },
    {
        imgUrl: img6,
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Recently added',
        reviewCount: '03 reviews',
        title: 'Project on Detection of Credit Card Fraud',
        totalLeson: '45+ Projects',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Nisha Desai',
        btnText: 'Read More',
    },
]

const Projects = () => {
    return (
        <div className="course-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                        {courseList.map((val, i) => (
                            <div className="col" key={i}>
                                <div  className="course-item">
                                    <div className="course-inner" style={{height:'420px'}}>
                                        <div className="course-thumb"style={{padding:'15px 20px'}} >
                                            <img style={{height:"200px"}} src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="course-content" style={{padding:'5px 20px'}}>
                                            {/* <div className="course-price">{val.price}</div> */}
                                            <div className="course-category">
                                                <div className="course-cate">
                                                    <a href="#">{val.cate}</a>
                                                </div>
                                                <div className="course-reiew">
                                                    <Rating />
                                                    <span className="ratting-count"> {val.reviewCount}</span>
                                                </div>
                                            </div>
                                            <Link to="/course-single"><h4>{val.title}</h4></Link>
                                            {/* <div className="course-details">
                                                <div className="couse-count"><i className="icofont-video-alt"></i> {val.totalLeson}</div>
                                                {/* <div className="couse-topic"><i className="icofont-signal"></i> {val.schdule}</div> }
                                            </div> */}
                                            <div className="course-footer">
                                                <div className="course-author">
                                                    <img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} />
                                                    <Link to="/team-single" className="ca-name">{val.authorName}</Link>
                                                </div>
                                                <div className="course-btn">
                                                    <Link to="/course-single" className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;