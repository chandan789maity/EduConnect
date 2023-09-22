import { Fragment } from "react";

import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Progress from "../component/sidebar/progress";
import Rating from "../component/sidebar/rating";
import { useQuery } from "react-query";
import axios from "axios";
import { server } from "../App";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const name = "Emilee Logan";
const degi = "Master of Education Degree";
const desc =
  "Infrastruct ntrinsicl grow optimal talers rather than efectve nformaon Collabora optimize partnersh and frictionles deliverables";
const subTitle = "Bio";
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
  const navigate=useNavigate()
  const { data: profile, isLoading } = useQuery(["profile"], async () => {
    try {
      const res = await axios.get(`${server}auth/isauth`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        console.log(res.data.user);
        return res.data.user;
      }
      return {};
    } catch (err) {
      return {};
    }
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <Fragment>
      <Header />
      <PageHeader title={profile?.Name} curPage={""} />
      <section className="instructor-single-section padding-tb section-bg">
        <div className="container">
          <div className="instructor-wrapper">
            <div className="instructor-single-top">
              <div className="instructor-single-item d-flex flex-wrap justify-content-between">
                <div className="instructor-single-thumb">
                  <img
                    src={profile?.Pic}
                    alt="instructor"
                  />
                </div>
                <div className="instructor-single-content">
                  <div style={{
                    display:"flex"
                  }}>
                  <h4 className="title">{profile?.Name}</h4>
                    <span style={{marginLeft:".4rem",fontSize:"1.2rem",cursor:'pointer',color:"red"}} onClick={()=>{
                      navigate('/editProfile')
                    }}>
                      <AiFillEdit />edit
                    </span>
                  </div>

                  <p className="ins-dege">{profile?.CollegeName}</p>
                  <Rating />
                  <h6 className="subtitle">{subTitle}</h6>
                  <p className="ins-desc">{profile?.Bio}</p>
                  <ul className="lab-ul">
                   
                      <li
                        className="d-flex flex-wrap justify-content-start"
                      
                      >
                        <span className="list-name">{"Address"}</span>
                        <span className="list-attr">{profile?.Address}</span>
                      </li>
                      <li
                        className="d-flex flex-wrap justify-content-start"
                      
                      >
                        <span className="list-name">{"Email"}</span>
                        <span className="list-attr">{profile?.Email}</span>
                      </li>
                    
                    <li className="d-flex flex-wrap justify-content-start">
                      <span className="list-name">Follow Us</span>
                      <ul className="lab-ul list-attr d-flex flex-wrap justify-content-start">
                        {memSocialList.map((val, i) => (
                          <li key={i}>
                            <a className={val.className} href={val.siteLink}>
                              <i className={val.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="instructor-single-bottom d-flex flex-wrap mt-4">
              <div className="col-xl-6 pb-5 pb-xl-0 d-flex flex-wrap justify-content-lg-start justify-content-between">
                <h4 className="subtitle">{skillTitle}</h4>
                {skillList.map((val, i) => (
                  <div className="text-center skill-item" key={i}>
                    <div className="skill-thumb">
                      <Progress strokeWidth={8} percentage={val.percentage} />
                    </div>
                    <p>{val.text}</p>
                  </div>
                ))}
              </div>
              <div className="col-xl-6 d-flex flex-wrap justify-content-lg-start justify-content-between">
                <h4 className="subtitle">{awardTitle}</h4>
                {awardList.map((val, i) => (
                  <div className="skill-item text-center" key={i}>
                    <div className="skill-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <p>{val.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default TeamSingle;
