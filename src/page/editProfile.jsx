import { Component, Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
//import PageHeader from "../component/layout/pageheader";
import "./style.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { server } from "../App";
import { toast } from "react-toastify";
const title = "Edit Profile";
const btnText = "Submit";
const btnText2 = "Profile Photo (JPG,PNG)";

const Edit = () => {
    const [isLoading2,setIsLoading2]=useState(false)
  const [userData, setUserData] = useState({
    Pic: "",
    Name: "",
    UserName: "",
    Address: "",
    CollegeName: "",
    Bio: "",
  });
  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setUserData((old) => {
      return {
        ...userData,
        [name]: value,
      };
    });
  }
  const handlePic = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "educonnect");
    data.append("cloud_name", "basustudent");
    try {

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/basustudent/image/upload",
        data
      );
      const dat = res.data;
      setUserData((old) => {
        return {
          ...old,
          Pic: dat?.secure_url,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();
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

  useEffect(() => {
    if (profile) {
      setUserData({
        Pic: profile?.pic,
        Name: profile?.Name,
        UserName: profile?.UserName,
        Address: profile?.Address,
        CollegeName: profile?.CollegeName,
        Bio: profile?.Bio,
      });
    }
  }, [profile]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        setIsLoading2(true)
      const res = await axios.post(`${server}user/edit`, userData, {
        withCredentials: true,
      });
      if(res.status===200){
        setIsLoading2(false)
        toast(res?.data?.message,{type: 'success'})
        navigate('/team-single')
      }
      setIsLoading2(false)
    } catch (err) {
        console.log(err);
        setIsLoading2(false)
        toast('profile update failed',{type: 'error'})
    }
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <Fragment>
      <Header />
      {/* <PageHeader title={'Edit Profile Form'} curPage={'Edit Profile'} /> */}
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div style={{ marginTop: "50px" }} className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSubmit}>
              <input
                className="uploadInput"
                name="Pic"
                type="file"
                id="file"
                onChange={handlePic}
              />
              <label
                for="file"
                className="upploadLabel"
                style={{
                  borderColor: `${userData?.Pic !== "" ? "green" : "none"}`,
                }}
              >
                {userData?.Pic ? "Uploaded" : btnText2}
              </label>

              <div className="form-group">
                <input
                  type="text"
                  name="Name"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="UserName"
                  placeholder="User Name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="Address"
                  onChange={handleChange}
                  placeholder="Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="CollegeName"
                  placeholder="College Name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  rows={6}
                  name="Bio"
                  placeholder="Write your Bio here..."
                  onChange={handleChange}
                />
              </div>

              {/*                           <div className="form-group">
                                 <Form.Select aria-label="Select a catagory">
                                        <option>Choose Catagory</option>
                                        {catagories.map((catagory, index) => (
                                            <option key={index} value={catagory}>
                                            {catagory}
                                            </option>
                                        ))}
                                </Form.Select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="collegeName"
                                    placeholder="College Name"
                                    required
                                    style={{borderBottom: '1px solid orange'}}
                                />git 
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="clgEmail"
                                    placeholder="College Email Id"
                                    required
                                    style={{borderBottom: '1px solid orange'}}

                                />

                            </div>
                            <div className="form-group">
                                 <Form.Select aria-label="Select a state in India">
                                        <option>State</option>
                                        {statesOfIndia.map((state, index) => (
                                            <option key={index} value={state}>
                                            {state}
                                            </option>
                                        ))}
                                </Form.Select>
                            </div> */}

              {/* <div className="form-group text-center">
                                <button className="d-block lab-btn" style={{backgroundColor:'greenyellow', marginRight:'10px'}}><span>{btnText2}</span></button>
                            </div> */}

              <div className="course-enroll">
                <button type="submit" className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
              {/* <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to="/forgetpass">Forget Password?</Link>
                                </div>
                            </div> */}
            </form>
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

export default Edit;
