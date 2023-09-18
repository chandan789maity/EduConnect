
import Rating from "../sidebar/rating";
import img1 from '../../assets/images/course/111.jpg';
import img2 from "../../assets/images/pageheader/hitk.jpg";

const title = "Heritage Institute of Technology Kolkata (HIT-K)";
const desc = "An Autonomous Institution affiliated to MAKAUT";
const author = "Rajib Raj";
const reviewCount = "03 reviews";
const videoLink = "https://www.youtube-nocookie.com/embed/jP649ZHA8Tg";




const categoryList = [
    {
        link: '#',
        text: 'HITK',
        className: 'course-cate',
    },
    {
        link: '#',
        text: '30+ Projects',
        className: 'course-offer',
    },
]


const HeaderCollege = () => {
    return (
        <div className="pageheader-section style-2">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
                    <div className="col-lg-7 col-12">
                        <div className="pageheader-thumb">
                            <img src={img1} alt="rajibraj91" className="w-100" />
                            {/* <a href={videoLink} className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="pageheader-content">
                            <div className="course-category">
                                {categoryList.map((val, i) => (
                                    <a href={val.link} className={val.className} key={i}>{val.text}</a>
                                ))}
                            </div>
                            <h2 className="phs-title">{title}</h2>
                            <p className="phs-desc">{desc}</p>
                            <div className="phs-thumb">
                                <img src={img2} alt="rajibraj91" />
                               {/*  <span>{author}</span> */}
                                <div className="course-reiew">
                                    <Rating />
                                    {/* <span className="ratting-count">{reviewCount}</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeaderCollege;