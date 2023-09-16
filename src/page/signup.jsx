import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";



const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";


let socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]


const SignupPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper"  style={{marginTop:"100px"}}>
                        <h3 className="title">{title}</h3>
                        <form className="account-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="User Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="form-group">
                                <button className="lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default SignupPage;