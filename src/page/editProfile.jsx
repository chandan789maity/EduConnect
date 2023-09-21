import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
//import PageHeader from "../component/layout/pageheader";
import './style.css'
import Form from 'react-bootstrap/Form';

const title = "Edit Profile";
const btnText = "Submit";
const btnText2 = "Profile Photo (JPG)";

const Edit = () => {

    

    return (
        <Fragment>
            <Header />
            {/* <PageHeader title={'Edit Profile Form'} curPage={'Edit Profile'} /> */}
            <div  className="login-section padding-tb section-bg">
                <div className="container">
                    <div style={{marginTop:"50px"}} className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form">

                            <input className="uploadInput"  type="file" id="file"/>
                            <label for="file" style={{borderRadius:"999px"}} className="upploadLabel">{btnText2}</label>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="User Name"
                                    
                                    style={{borderBottom: '1px solid orange'}}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Location"
                                    
                                    style={{borderBottom: '1px solid orange'}}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Qualification"
                                    
                                    style={{borderBottom: '1px solid orange'}}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Area of specialisation"
                                    
                                    style={{borderBottom: '1px solid orange'}}
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
                               <Link to="/team-single" className="d-block lab-btn"><span>{btnText}</span></Link>
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
  
  export default Edit;