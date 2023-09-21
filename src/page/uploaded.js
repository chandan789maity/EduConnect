import React, { Fragment } from "react";
import Header from "../component/layout/header";
import Footer from "../component/layout/footer";
import { TiTick } from "react-icons/ti";
const Uploaded = () => {
  return (
    <Fragment>
      <Header />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div
            className="account-wrapper uploaded"
            style={{
              marginTop: "6.2rem",
            }}
          >
            <h3
              className="title"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Project is under review{" "}
              <div
                style={{
                  display: "grid",
                  placeItems:"center",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  background: "#f16126",
                  marginLeft:".8rem"
                }}
              >
                <TiTick
                  style={{
                    color: "#fff",
                    fontSize: "1.6rem",
                  }}
                />
              </div>{" "}
            </h3>
            <p>Wait untill it is verified by your college</p>

            {/* <div className="account-bottom">
                            <span className="d-block cate pt-10"> Have any Account?  <Link to="/">Sign Up</Link></span>
                             <span className="or"><span>or</span></span>  }
                            <h5 className="subtitle">{socialTitle}</h5>
                             <ul className="lab-ul social-icons justify-content-center">
                                {socialList.map((val, i) => (
                                    <li key={i}>
                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Uploaded;
