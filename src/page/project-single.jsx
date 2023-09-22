import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeaderTwo from "../component/layout/pageheader-2";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import CourseSideCetagory from "../component/sidebar/course-cetagory";
import CourseSideDetail from "../component/sidebar/course-detail";
import { BsDownload } from "react-icons/bs";
import Respond from "../component/sidebar/respond";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { server } from "../App";
import axios from "axios";
import Rating from "../component/sidebar/rating";

const CourseSingle = () => {
  const { id } = useParams();
  async function getProjectById() {
    try {
      const res = await axios.get(`${server}project/${id}`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        return res.data.data;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  const { data: project, isLoading } = useQuery(
    ["project", id],
    getProjectById,
    {
      enabled: id !== undefined,
    }
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <Header />
      <div className="pageheader-section style-2">
        <div className="container" style={{height:"480px"}}>
          <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
            <div className="col-lg-6 col-12">
              <div className="pageheader-thumb" style={{width:"100%"}}>
                <img src={project?.CoverPic} alt={project?.Title} className="w-100 flex justify-center items-center" />
                <a
                  href={project?.DownloadLink}
                  className="video-button popup flex justify-center items-center"
                >
                  <BsDownload style={{
                    position:'absolute',
                    top:"50%",
                    left:"50%",
                    transform:'translate(-50%, -50%)'}}/>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="pageheader-content">
                <div className="course-category" style={{display:"flex"}}>
                 <p className="course-cate">{project?.Category}</p>
                 <p className="course-offer">{project?.Status}</p>
                </div>
                <h2 className="phs-title">{project?.Title}</h2>
                <p className="phs-desc">{project?.Description}</p>
                <div className="phs-thumb">
                {
                  project?.AuthorImage ?  <img src={project?.AuthorImage} alt="rajibraj91" />:null
                }
                 
                  <span>{project?.AuthorName}</span>
                  <div className="course-reiew">
                  <Rating />
                  <span className="ratting-count">{project?.ReviewCount}</span>
                  </div>
                  </div>
                  <span style={{fontSize:".8rem"}}>{project?.CollegeName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-single-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-part">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-content"  dangerouslySetInnerHTML={{__html: project?.Info}}/>
                     
                   
                  </div>
                </div>
                <Author profile={{
                  name:project?.AuthorName,
                  image:project?.AuthorImage,
                  college:project?.CollegeName,
                  state:project?.State
                }}/>
                <Comment />
                <Respond />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-part">
                {
                  //<CourseSideDetail />
                }
                <CourseSideCetagory  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CourseSingle;
