import "./style.css";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { server } from "../../App";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const subTitle = "Online education";
const title = (
  <h2 className="title">
    <span className="d-lg-block">Unleash</span> Innovation
    <span className="d-lg-block">in Education </span>
  </h2>
);
// const desc = "Free online courses from the world’s Leading experts. join 18+ million Learners today.";
const desc =
  "Your Gateway to a World of Student Projects and Collaborative Learning";

// EduConnect: Unleash Innovation in Education

const catagoryList = [
  {
    name: "AI ML",
    link: "#",
  },
  {
    name: "Robotics",
    link: "#",
  },
  {
    name: "Webdev",
    link: "#",
  },
  {
    name: "BioTech",
    link: "#",
  },
];

const shapeList = [
  {
    name: "16M Students Happy",
    link: "#",
    className: "ccl-shape shape-1",
  },
  {
    name: "130K+ Total Courses",
    link: "#",
    className: "ccl-shape shape-2",
  },
  {
    name: "89% Successful Students",
    link: "#",
    className: "ccl-shape shape-3",
  },
  {
    name: "23M+ Learners",
    link: "#",
    className: "ccl-shape shape-4",
  },
  {
    name: "36+ Languages",
    link: "#",
    className: "ccl-shape shape-5",
  },
];

const Banner = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
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

  const { data, isLoading } = useQuery(["projects"], getAllProjects);

  useEffect(() => {
    if (filter === "") {
      setProjects([]);
      return;
    }
    setProjects((old) => {
      let newArray = data?.filter((val) => {
        return (
          filter !== "" &&
          val?.Title?.toLowerCase()?.includes(filter?.toLowerCase())
        );
      });
      return newArray;
    });
  }, [filter]);

  return (
    <section className="banner-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-10">
              <div className="banner-content">
                <h6 className="subtitle text-uppercase fw-medium">
                  {subTitle}
                </h6>
                {title}
                <p className="desc">{desc}</p>
                <div style={{
                  borderRadius:'16px !important',
                  overflow:'hidden',
                  zIndex:'100000 !important'
                }}>
                  <form

                    action="/"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    style={{
                      zIndex:"1000"
                    }}
                  >
                    <div className="banner-icon">
                      <i className="icofont-search"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Keywords of your Projects"
                      onChange={(e) => setFilter(e.target.value)}
                    />
                    <button type="submit">
                      <AiOutlineSearch style={{ fontSize: "30px" }} />
                    </button>
                  </form>
                </div>

                <div
                  className="suggest"
                  style={{
                    display: `${filter === "" || projects?.length === 0 ? "none" : "block"
                      }`,
                  }}
                >
                  {projects?.map((project, i) => {
                    return (
                      <div
                        className="clg-card"
                        key={i}
                        onClick={() => {
                          navigate(`/project-single/${project?._id}`);
                        }}
                      >
                        <div className="clg-pic">
                          <img src={project?.CoverPic} alt="img" />
                        </div>
                        <div className="clg-info">
                          <p>{project?.Title}</p>
                          <p style={{ fontSize: ".7rem" }}>
                            {project?.Description?.substring(0, 100)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="banner-catagory d-flex flex-wrap">
                  <p>Most Popular : </p>
                  <ul className="lab-ul d-flex flex-wrap">
                    {catagoryList.map((val, i) => (
                      <li key={i}>
                        <a href={val.link}>{val.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6">
              <div className="banner-thumb">
                <img src="assets/images/banner/01.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes"></div>
      <div className="cbs-content-list d-none">
        <ul className="lab-ul">
          {shapeList.map((val, i) => (
            <li className={val.className} key={i}>
              <a href={val.link}>{val.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
