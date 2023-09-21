import { Component, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";
import img1 from "../assets/images/course/AI ML.webp";
import img2 from "../assets/images/course/02.jpg";
import img3 from "../assets/images/course/healthcare.jpg";
import img4 from "../assets/images/course/Web3-Edu.jpg";
import img5 from "../assets/images/course/IOT-Edu.jpeg.jpg";
import img6 from "../assets/images/course/Data Science.jpg";
import axios from "axios";
import { server } from "../App";
import { useQuery } from "react-query";
import { useState } from "react";

const courseList = [
  {
    imgUrl: img1,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Recently added",
    reviewCount: "03 reviews",
    title: "Artificial Intelligence and Machine Learning (AIML)",
    totalLeson: "40+ Projects",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/01.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Aarav Patel",
    btnText: "Read More",
  },
  {
    imgUrl: img2,
    imgAlt: "robo",
    price: "$30",
    cate: "Recently added",
    reviewCount: "03 reviews",
    title: "Robotics",
    totalLeson: "30+ Projects",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/02.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Priya Sharma",
    btnText: "Read More",
  },
  {
    imgUrl: img3,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Recently added",
    reviewCount: "03 reviews",
    title: "Healthcare and Medical Device",
    totalLeson: "20+ Projects",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/03.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Arjun Gupta",
    btnText: "Read More",
  },
  {
    imgUrl: img4,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Recently added",
    reviewCount: "03 reviews",
    title: "BlockChain And Cryptocurrency",
    totalLeson: "15+ Projects",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/04.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Anika Singh",
    btnText: "Read More",
  },
  {
    imgUrl: img5,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Recently added",
    reviewCount: "03 reviews",
    title: "Internet of Things(IoT)",
    totalLeson: "50+ Projects",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/05.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Rohan Mehta",
    btnText: "Read More",
  },
  {
    imgUrl: img6,
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Recently added",
    reviewCount: "03 reviews",
    title: "Data Science and Analytics",
    totalLeson: "45+ Projects",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/06.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Nisha Desai",
    btnText: "Read More",
  },
];

const CoursePage = () => {
  const [category, setCategory] = useState("");
  const [projects, setProjects] = useState([]);

  async function getAllProjects() {
    try {
      const res = await axios.get(`${server}project`, {
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

  const { data, isLoading, refetch } = useQuery(["projects"], getAllProjects);

  useEffect(() => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    setProjects((old) => {
      let newArray=data?.filter((val)=>{
            return( category === "" || val.Category === category)
      })
      return newArray;
    });
  }, [category]);

  useEffect(() => {
    setProjects(data);
  }, [data]);

  console.log("projects", projects);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Project Domain page"} curPage={"Projects"} />
      <GroupSelect setCategory={setCategory} />
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-showing-part-left">
                  <p>Showing 1-6 of 10 results</p>
                </div>
                <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                  <span>Sort by :</span>
                  <div className="select-item">
                    <SkillSelect select={"all"} />
                    <div className="select-icon">
                      <i className="icofont-rounded-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
              {projects?.map((val, i) => (
                <div className="col" key={i}>
                  <div className="course-item">
                    <div className="course-inner" style={{ height: "550px" }}>
                      <div className="course-thumb">
                        <img
                          src={val?.CoverPic}
                          alt={`${val.Title}`}
                          style={{ height: "250px" }}
                        />
                      </div>
                      <div className="course-content">
                        {/* <div className="course-price">{val.price}</div> */}
                        <div className="course-category">
                          <div
                            className="course-cate"
                            style={{ marginBottom: ".5rem" }}
                          >
                            <a href="#">{val.Category}</a>
                          </div>
                          <div className="course-reiew">
                            <Rating />
                            <span className="ratting-count">
                              {" "}
                              {val.ReviewCount}
                            </span>
                          </div>
                        </div>
                        <Link to={`/project-single/${val._id}`}>
                          <h4>{val.Title}</h4>
                        </Link>
                        <p
                          style={{
                            fontSize: "1rem",
                          }}
                        >
                          {val?.Description?.substring(0, 35)}
                        </p>
                        <div className="course-footer">
                          <div className="course-author">
                            {val?.AuthorImage ? (
                              <img src={`${val.AuthorImage}`} alt={`image`} />
                            ) : null}

                            <Link to="/team-single" className="ca-name">
                              {val.AuthorName}
                            </Link>
                            <p
                              className="ca-name"
                              style={{ fontSize: ".7rem" }}
                            >
                              {val.CollegeName}
                            </p>
                          </div>
                          <div className="course-btn">
                            <Link
                              to={`/project-single/${val._id}`}
                              className="lab-btn-text"
                            >
                              {val.btnText}{" "}
                              <i className="icofont-external-link"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CoursePage;
