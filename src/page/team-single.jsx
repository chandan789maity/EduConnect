import { Fragment } from "react";

import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Progress from "../component/sidebar/progress";
import Rating from "../component/sidebar/rating";
import profilePic from "./img/profilepic.jpg";
import projectPic from "./img/project.jpg";
import { ImLocation2 } from "react-icons/im";
import Button from "react-bootstrap/Button";

const name = "Emilee Logan";
const degi = "Master of Education Degree";
const desc =
  "Infrastruct ntrinsicl grow optimal talers rather than efectve nformaon Collabora optimize partnersh and frictionles deliverables";
const subTitle = "Personal Statement";
const infoDetails =
  "Enthusa expedte clent focused growth strateg wherea clent centered infrastruct ntrinsicl grow optimal talers rather than efectve nformaon Collabora optimize partnersh and frictionles deliverables infrastructs ntrinsicl grow optimal talers rather efectve";
const skillTitle = "Personal Language Skill";
const awardTitle = "Recognitions Award";

const memInfoLisst = [
  {
    leftText: "Adress",
    rightText: "Suite 02 and 07 Melbourne, Australia",
  },
  {
    leftText: "Email",
    rightText: "emileelogan@gamil.com",
  },
  {
    leftText: "Phone",
    rightText: "+021 548 736 982 ,01236985",
  },
  {
    leftText: "website",
    rightText: "www.admineduconnect.com",
  },
];

const memSocialList = [
  {
    iconName: "icofont-twitter",
    className: "twitter",
    siteLink: "#",
  },
  {
    iconName: "icofont-instagram",
    className: "instagram",
    siteLink: "#",
  },
  {
    iconName: "icofont-basketball",
    className: "basketball",
    siteLink: "#",
  },
  {
    iconName: "icofont-vimeo",
    className: "vimeo",
    siteLink: "#",
  },
  {
    iconName: "icofont-behance",
    className: "behance",
    siteLink: "#",
  },
];

const skillList = [
  {
    percentage: "80",
    text: "English",
  },
  {
    percentage: "70",
    text: "Hindi",
  },
  {
    percentage: "90",
    text: "Bangla",
  },
  {
    percentage: "50",
    text: "Arabic",
  },
];

const awardList = [
  {
    imgUrl: "assets/images/instructor/single/icon/01.png",
    imgAlt: "instructor",
    text: "Award 2018",
  },
  {
    imgUrl: "assets/images/instructor/single/icon/02.png",
    imgAlt: "instructor",
    text: "Award 2019",
  },
  {
    imgUrl: "assets/images/instructor/single/icon/03.png",
    imgAlt: "instructor",
    text: "Award 2020",
  },
  {
    imgUrl: "assets/images/instructor/single/icon/04.png",
    imgAlt: "instructor",
    text: "Award 2022",
  },
];

const TeamSingle = () => {
  return (
    <Fragment>
      <Header />
      {/* <PageHeader title={"Sir Emilee Logan"} curPage={"Emilee Logan"} /> */}
      <section className="instructor-single-section padding-tb section-bg">
        <div className="container">
          <div className="instructor-wrapper" style={{ marginTop: "100px" }}>
            <div className="left">
              <div className="image">
                <img
                  className="profilePic"
                  src={profilePic}
                  // style={{ borderRadius: "40%" }}
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                style={{
                  position: "relative",
                  width: "70%",
                  backgroundColor: "rgb(229, 144, 113)",
                  marginLeft: "14%",
                  marginTop: "-10%",
                  border: "none",
                }}
              >
                follow
              </Button>
              <div
                className="bio"
                style={{
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  fontSize: "20px",
                }}
              >
                Rahul Roy, a visionary MERN stack developer, crafts digital
                experiences that bridge innovation and functionality. With a
                passion for clean code and seamless user interfaces, he
                transforms ideas into dynamic web solutions. Rahul's dedication
                to perfection and adaptability fuels his pursuit of excellence
                in the ever-evolving tech landscape.
              </div>
            </div>
            <div className="right">
              <div className="text">
                <div className="headTitle">
                  <div className="name" style={{ fontWeight: "bold" }}>
                    Rahul Roy
                  </div>
                  <div className="location" style={{ marginLeft: "30px" }}>
                    <ImLocation2 /> Delhi
                  </div>
                </div>
                <div
                  className="designatiion"
                  style={{
                    marginTop: "10px",
                    color: "orange",
                    fontWeight: "bold",
                  }}
                >
                  Full Stack Developer
                </div>
                <div
                  className="followerFollowing"
                  style={{ marginTop: "15px", display: "flex" }}
                >
                  <div className="follower">Follower: 50+</div>
                  <div className="following" style={{ marginLeft: "45px" }}>
                    Following: 32{" "}
                  </div>
                </div>
                <div className="education" style={{ marginTop: "35px" }}>
                  <div
                    className="educationTitle"
                    style={{ fontWeight: "bolder", fontSize: "20px" }}
                  >
                    Education
                  </div>
                  <div className="collegeName" style={{ marginTop: "18px" }}>
                    <span style={{ fontWeight: "bold" }}>College:</span> IIT
                    Bombay
                  </div>
                  <div className="SchoolName" style={{ marginTop: "20px" }}>
                    <span style={{ fontWeight: "bold" }}>School:</span> Heritage
                    School
                  </div>
                  <div className="Qualification" style={{ marginTop: "20px" }}>
                    <span style={{ fontWeight: "bold" }}>Qualification:</span>
                    {"   B.tech"}
                  </div>
                  <div className="Specialisation" style={{ marginTop: "20px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Area of Specialisation:
                    </span>
                    {"     MERN STACK"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="instructor-single-bottom d-flex flex-wrap mt-4">
            UPload project: 2
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default TeamSingle;
