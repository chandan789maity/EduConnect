import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

const title = "Project  Details";
const btnText = "Submit";
const btnText2 = "Upload PDF";

const AddProject = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Project Submission Form'} curPage={'Add Project'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Project Title *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Project Desc *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Domain *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="College Name *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="College Email Id *"
                                />
                            </div>
                            <div className="form-group text-center">
                                <button className="d-block lab-btn" style={{backgroundColor:'greenyellow', marginRight:'10px'}}><span>{btnText2}</span></button>
                            </div>
                            <div className="course-enroll">
                               <Link to="/signup" className="d-block lab-btn"><span>{btnText}</span></Link>
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
}
  
  export default AddProject;
  