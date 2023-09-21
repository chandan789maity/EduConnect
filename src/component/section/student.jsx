import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import { motion } from "framer-motion";

const subTitle = "Loved by 200,000+ students";
const title = "Students Community Feedback";

const studentList = [
  {
    imgUrl: "assets/images/feedback/student/01.jpg",
    imgAlt: "student rajibraj91 rajibraj",
    name: "Sneha Majumdar",
    degi: "Heritage institute of tchnology, HITK",
    desc: 'The phrase "Visionary Educational Institutions" sounds positive and inspiring. However, it might be beneficial to specify the types of institutions, such as colleges or universities, for clarity.',
  },
  {
    imgUrl: "assets/images/feedback/student/02.jpg",
    imgAlt: "student rajibraj91 rajibraj",
    name: "Rahul Poddar",
    degi: "Netaji Subhas Engineering Cllege",
    desc: 'Consider making the statement more specific by mentioning the actual institutions that have uploaded projects. For example, "Projects Uploaded by Leading Colleges and Universities" would provide more concrete information and credibility to potential users.',
  },
];

const Student = () => {
  return (
    <div className="student-feedbak-section padding-tb shape-img">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center row-cols-lg-2 row-cols-1">
            <div className="col">
              <div className="sf-left">
                <div className="sfl-thumb">
                  <img
                    src="assets/images/feedback/01.jpg"
                    alt="student feedback"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              {studentList.map((val, i) => (
                <div className="stu-feed-item" key={i}>
                  <div className="stu-feed-inner">
                    <div className="stu-feed-top">
                      <div className="sft-left">
                        <div className="sftl-thumb">
                          <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                        </div>
                        <div className="sftl-content">
                          <Link to="/team-single">
                            <h6>{val.name}</h6>
                          </Link>
                          <span>{val.degi}</span>
                        </div>
                      </div>
                      <div className="sft-right">
                        <Rating />
                      </div>
                    </div>
                    <div className="stu-feed-bottom">
                      <motion.p
                        initial={{
                         opacity:0,
                       
                        }}
                        whileInView={{
                            transition: { duration: 1.5 },
                          opacity: 1,
                        }}
                       
                        viewport={{ once: true }}
                      >
                        {val.desc}
                      </motion.p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
