import React from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import studentLogo from "../assets/images/logo/student.png";
import collegeLogo from "../assets/images/logo/university.png";

import "./style.css";

const title = "LOG IN AS";
// const btnText = "Get Started Now";

const LogInAs = () => {
  return (
    <Fragment>
      <Header />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper" style={{ marginTop: "100px" }}>
            <h3 className="title">{title}</h3>
            <form
              className="account-form"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                to="/login"
                state={{
                  type: "student",
                }}
              >
                <div className="form-group" style={{ marginRight: "60px" }}>
                  <img
                    className="studentImage"
                    src={studentLogo}
                    style={{
                      border: "1px solid orange",
                      borderRadius: "50%",
                      width: "140px",
                    }}
                  />
                  <div style={{ fontSize: "25px" }}>Student</div>
                </div>
              </Link>
              <Link
                to="/login"
                state={{
                  type: "college",
                }}
              >
                <div className="form-group" style={{ marginBottom: "30px" }}>
                  <img
                    className="collegeImage"
                    src={collegeLogo}
                    style={{
                      border: "1px solid orange",
                      borderRadius: "50%",
                      width: "140px",
                    }}
                  />
                  <div style={{ fontSize: "25px" }}>Colllege</div>
                </div>
              </Link>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                don't have an account?? <Link to="/signupas">Signup</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LogInAs;
