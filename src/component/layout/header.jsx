import logo from '../../assets/images/logo/logo.png'
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import "./style.css";
import AuthContext from "../../context/authContext";
import { useQueryClient } from "react-query";
import axios from "axios";
import { server } from "../../App";
const phoneNumber = "+800-123-4567 6587";
const address = "Beverley, New York 224 USA";

let socialList = [
  {
    iconName: "icofont-facebook-messenger",
    siteLink: "#",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
  },
  {
    iconName: "icofont-vimeo",
    siteLink: "#",
  },
  {
    iconName: "icofont-skype",
    siteLink: "#",
  },
  {
    iconName: "icofont-rss-feed",
    siteLink: "#",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);
  const [auth, refetch] = useContext(AuthContext);
  const { authenticated, user } = auth;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  async function logout() {
    try {
      const res = await axios.get(`${server}auth/logout`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 204) {
        refetch()
    //    navigate('/login')
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <header
      className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}
    >
      <div
        className={`header-top ${socialToggle ? "open" : ""}`}
        style={{ visibility: "hidden" }}
      >
        <div className="container">
          <div className="header-top-area">
            <ul className="lab-ul left">
              <li>
                <i className="icofont-ui-call"></i> <span>{phoneNumber}</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> {address}
              </li>
            </ul>
            <ul className="lab-ul social-icons d-flex align-items-center">
              <li>
                <p>Find us on : </p>
              </li>
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.siteLink}>
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo"  style={{
                    width:"300px"
                }}/>
              </Link>
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li className="">
                    <NavLink to="/">Home</NavLink>
                    {/* role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0" */}
                    {/* <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/">Home One</NavLink></li>
                                            <li><NavLink to="/index-2">Home Two</NavLink></li>
                                            <li><NavLink to="/index-3">Home Three</NavLink></li>
                                            <li><NavLink to="/index-4">Home Four</NavLink></li>
                                            <li><NavLink to="/index-5">Home Five</NavLink></li>
                                            <li><NavLink to="/index-6">Home Six</NavLink></li>
                                            <li><NavLink to="/index-7">Home Seven</NavLink></li>
                                        </ul> */}
                  </li>
                  <li className="">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Projects
                    </a>
                    <ul className="lab-ul dropdown-menu">
                      <li>
                        <NavLink to="/course">Projects</NavLink>
                      </li>
                      <li>
                        <NavLink to="/course-single">Projects Details</NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Blog</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/blog">Blog Grid</NavLink></li>
                                            <li><NavLink to="/blog-2">Blog Style 2</NavLink></li>
                                            <li><NavLink to="/blog-3">Blog Style 3</NavLink></li>
                                            <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                                        </ul>
                                    </li> */}

                  <li className="">
                    {/* <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">About</a> */}
                    {/* <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li><NavLink to="/team">Team</NavLink></li>
                                            <li><NavLink to="/instructor">Instructor</NavLink></li>
                                            <li><NavLink to="/shop">Shop Page</NavLink></li>
                                            <li><NavLink to="/shop-single">Shop Details Page</NavLink></li>
                                            <li><NavLink to="/cart-page">Shop Cart Page</NavLink></li>
                                            <li><NavLink to="/search-page">Search Page</NavLink></li>
                                            <li><NavLink to="/search-none">Search None</NavLink></li>
                                            <li><NavLink to="/404">404</NavLink></li>
                                        </ul> */}

                  </li>
                  <li><NavLink to="/college">College</NavLink></li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              {authenticated ? (
                <>
                  <Link
                    to="/addproject"
                    className="addproject"
                    style={{ borderRadius: "8px", marginRight: "40px" }}
                  >
                    <i className=""></i> <span> + ADD PROJECT</span>{" "}
                  </Link>
                  <button className="logout-btn" onClick={logout}>
                    <MdLogout />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <Link
                    to="/login"
                    className="login"
                    style={{
                      borderRadius: "10px",
                      marginRight: "20px",
                      padding: "9px 9px",
                    }}
                  >
                    <i className="icofont-user"></i> <span>LOG IN</span>{" "}
                  </Link>
                  <Link
                    to="/signup"
                    className="signup"
                    style={{
                      borderRadius: "10px",
                      marginRight: "20px",
                      padding: "9px 9px",
                    }}
                  >
                    <i className="icofont-users"></i> <span>SIGN UP</span>{" "}
                  </Link>
                </>
              )}


              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
