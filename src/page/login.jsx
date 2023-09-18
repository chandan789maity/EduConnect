import { Component, Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import axios from "axios";
import { server } from "../App";
const title = "Login";
const btnText = "Submit Now";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    UserName: "",
    Password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUserData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }

  async function handleLogin(e) {
    e.preventDefault();
    let { UserName, Password } = userData;
    if (!UserName || !Password) {
      alert("Please fill out your details");
      return;
    }
    try {
      setIsLoading(true);
      const res = await axios.post(`${server}auth/login`, userData, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 202) {
        alert("Welcome ", res.data.user.UserName);
        setIsLoading(false);
        navigate("/");
      }
    } catch (err) {
      alert(err.response.data.Messege);
      setIsLoading(false);
    }
  }
  return (
    <Fragment>
      <Header />

      <div className="login-section padding-tb section-bg ">
        <div className="container">
          <div className="account-wrapper" style={{ marginTop: "50px" }}>
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  name="UserName"
                  placeholder="User Name *"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="Password"
                  placeholder="Password *"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group text-center">
                <button className="d-block lab-btn" type="submit">
                  <span>{isLoading ? "Signing in..." : btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
