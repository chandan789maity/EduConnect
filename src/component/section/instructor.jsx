import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import heritage from "../../assets/images/instructor/heritage.png";
import kgp_iit from "../../assets/images/instructor/kgp_iit.svg";
import durgapur_nit from "../../assets/images/instructor/durgapur_nit.png";
import iem from "../../assets/images/instructor/iem.webp";
import { motion } from "framer-motion";

const subTitle = "Our top Project Creators";
const title = "Projects Uploaded by Visionary Educational Institutions";

const instructorList = [
  {
    imgUrl: heritage,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Heritage Institute of Technology, Kolkata",
    degi: "Master of Engineering Degree",
    courseCount: "08 projects",
    studentAnroll: "30 students",
  },
  {
    imgUrl: kgp_iit,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Indian Institute of Technology,KGP",
    degi: "Master of Engineering Degree",
    courseCount: "08 projects",
    studentAnroll: "30 students",
  },
  {
    imgUrl: durgapur_nit,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "National Institute of Technology, Durgapur",
    degi: "Master of Engineering Degree",
    courseCount: "08 projects",
    studentAnroll: "30 students",
  },
  {
    imgUrl: iem,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Institute of Engineering & Management, Kolkata",
    degi: "Master of Engineering Degree",
    courseCount: "08 projects",
    studentAnroll: "30 students",
  },
];

const Instructor = () => {
  return (
    <div className="instructor-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {instructorList.map((val, i) => (
              <div className="col" key={i}>
                <div className="instructor-item">
                  <div
                    className="instructor-inner"
                    style={{
                      height: "530px",
                    }}
                  >
                    <div className="instructor-thumb">
                      <img
                        src={`${val.imgUrl}`}
                        alt={`${val.imgAlt}`}
                        style={{ height: "260px" }}
                      />
                    </div>
                    <motion.div
                      initial={{
                        x: -100,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{ delay: 0.05 * i }}
                      viewport={{ once: true }}
                      className="instructor-content"
                    >
                      <Link to="/team-single">
                        <h4>{val.name}</h4>
                      </Link>
                      <p>{val.degi}</p>
                      <Rating />
                    </motion.div>
                  </div>
                  <div className="instructor-footer">
                    <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                      <li>
                        <i className="icofont-book-alt"></i> {val.courseCount}
                      </li>
                      <li>
                        <i className="icofont-users-alt-3"></i>{" "}
                        {val.studentAnroll}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center footer-btn">
            <p>
              Want to upload projects, grow and achieve more in life?
              <Link to="/team">Become a creator</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
