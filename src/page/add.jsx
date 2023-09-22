import "react-quill/dist/quill.snow.css";
import { Component, Fragment, useState, lazy, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import "./style.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { server } from "../App";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
const QuillNoSSRWrapper = lazy(() => import("react-quill"));
const title = "Project  Details";
const btnText = "Submit";
const btnText2 = "Upload PDF";
const btnText3 = "Upload Cover";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const AddProject = () => {
  const navigate = useNavigate();
  const [CoverPic, setCoverPic] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [projectData, setProjectData] = useState({
    Title: "",
    Description: "",
    Category: "",
    CollegeName: "",
    CollegeEmail: "",
    State: "",
  });
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
    "West Bengal",
  ];
  const catagories = [
    "Software Develpment",
    "Artificial Intelligence(AI)",
    "Machine Learning(ML)",
    "Aerospace and Aeronautical Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineernig",
    "Biotechnology",
    "Chemistry",
    "Mathamatics",
    "Botany",
    "Zoology",
    "Physiology",
    "Psycology",
    "E-book",
    "Physics",
    "Environental Science",
    "Telecommunication",
    "Cybersecurity",
    "CryptoCurrency",
    "Others",
  ];

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setProjectData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a PDF file.");
      return;
    }
    if (!CoverPic) {
      alert("Please select a Cover image.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("data", JSON.stringify(projectData));
    formData.append("cover", JSON.stringify(CoverPic));
    formData.append("info", JSON.stringify(info));

    try {
      setIsLoading(true);
      const response = await axios.post(`${server}project/new`, formData, {
        withCredentials: true,
      });

      if (response.status === 201) {
        toast("Project uploaded successfully.", { type: "success" });
        setIsLoading(false);
        navigate("/uploaded");
      } else {
        setIsLoading(false);
        toast("Error uploading project.", { type: "error" });
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
      toast("Error uploading project.", { type: "error" });
    }
  };

  const handleCoverPic = async (e) => {
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
      setCoverPic(dat.secure_url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Fragment>
        <Header />
        <PageHeader title={"Project Submission Form"} curPage={"Add Project"} />
        <div className="login-section padding-tb section-bg">
          <div className="container">
            <div className="account-wrapper">
              <h3 className="title">{title}</h3>
              <form className="account-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="Title"
                    placeholder="Project Title"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    type="text"
                    name="Description"
                    placeholder="Project Desc"
                    rows="4"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <Form.Select
                    name="Category"
                    aria-label="Select a catagory"
                    onChange={handleChange}
                  >
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
                    name="CollegeName"
                    placeholder="College Name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="CollegeEmail"
                    placeholder="College Email Id"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <Form.Select
                    name="State"
                    onChange={handleChange}
                    aria-label="Select a state in India"
                  >
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

                <input
                  className="uploadInput"
                  type="file"
                  id="cover"
                  accept="image/*"
                  onChange={handleCoverPic}
                />
                <label htmlFor="cover" className="upploadLabel">
                  <BsUpload /> {CoverPic ? "Uploaded" : btnText3}
                </label>

                <input
                  className="uploadInput"
                  type="file"
                  id="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                <label for="file" className="upploadLabel">
                  <BsUpload /> {file ? "Uploaded" : btnText2}
                </label>
                <QuillNoSSRWrapper
                  placeholder="Write brief about your project..."
                  style={{
                    color: "#C3C3C3",
                    background: "#fff",
                    marginTop: "1rem",
                  }}
                  modules={modules}
                  theme="snow"
                  value={info}
                  onChange={setInfo}
                />
                <div
                  className="course-enroll"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <button
                    type="submit"
                    className="d-block lab-btn"
                    style={{ width: "100%" }}
                    disabled={isLoading}
                  >
                    <span>{isLoading ? "Uploading..." : btnText}</span>
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
    </Suspense>
  );
};

export default AddProject;
