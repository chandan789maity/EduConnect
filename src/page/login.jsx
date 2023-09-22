import { Component, Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import { Spin } from "antd";
import axios from "axios";
import { server } from "../App";
import { toast } from "react-toastify";
const title = "Login";
const btnText = "Submit Now";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = location?.state;
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
      toast("Please fill out your details", { type: "warning" });
      return;
    }
    try {
      setIsLoading(true);
      const res = await axios.post(`${server}auth/login`, {
        ...userData,
        Type:type,
      }, {
        withCredentials: true,
      });
      // console.log(res);
      if (res.status === 202) {
        if (type === "college") {
          toast(`Welcome ${res?.data?.user?.CollegeName}`, { type: "success" });
          setIsLoading(false);
          navigate("/admin");
        } else {
          toast(`Welcome ${res?.data?.user?.Name}`, { type: "success" });
          setIsLoading(false);
          navigate("/");
        }
      }
    } catch (err) {
      toast(err.response.data.Messege, { type: "error" });
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
                  placeholder={`${type ==='student'?"User Name":"College Email"}`}
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
                  {isLoading ? (
                    <span>
                      <Spin /> Logging in...
                    </span>
                  ) : (
                    <span>Login</span>
                  )}
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/signUpas">Sign Up</Link>
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