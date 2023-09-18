import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import './style.css'
import Form from 'react-bootstrap/Form';




const title = "Project  Details";
const btnText = "Submit";
const btnText2 = "Upload PDF";

const AddProject = () => {

    const statesOfIndia = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
      ];

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
                                    placeholder="Project Title"
                                    required
                                    style={{borderBottom: '1px solid orange'}}
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    type="text"
                                    name="name"
                                    placeholder="Project Desc"
                                    rows="4"
                                    style={{borderBottom: '1px solid orange'}}
                                />
                            </div>
                            <div className="form-group">
                                    {/* <div style={{textAlign:'start'}}>Domain: </div> */}
                                    <div className="domain">
                                        <div style={{display:'flex'}}>
                                            <input type="radio" 
                                            id="Software" 
                                            name="domain" 
                                            value="Software" 
                                            required
                                            />
                                            <label for="Software">Software</label>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <input type="radio"
                                             id="Hardware" 
                                             name="domain" 
                                             value="Hardware" 
                                             required
                                             />
                                            <label for="Hardware">Hardware</label>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <input type="radio" 
                                            id="Hardware" 
                                            name="domain" 
                                            value="Software&Hardware" 
                                            required/>
                                            <label for="Hardware">Software&Hardware</label>
                                        </div>

                                    </div>
                                        
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="collegeName"
                                    placeholder="College Name"
                                    required
                                    style={{borderBottom: '1px solid orange'}}
                                />
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
                            </div>

                            
                            {/* <div className="form-group text-center">
                                <button className="d-block lab-btn" style={{backgroundColor:'greenyellow', marginRight:'10px'}}><span>{btnText2}</span></button>
                            </div> */}

                            <input className="uploadInput"  type="file" id="file"/>
                            <label for="file"  className="upploadLabel">{btnText2}</label>

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
  