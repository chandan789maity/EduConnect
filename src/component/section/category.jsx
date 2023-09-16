import { Link } from "react-router-dom";
import img1 from "../../assets/images/category/icon/01.jpg";
import img2 from "../../assets/images/category/icon/02.png";
import img3 from "../../assets/images/category/icon/03.png";
import img5 from "../../assets/images/category/icon/05.png";
import img6 from "../../assets/images/category/icon/06.png";

const subTitle = "Popular Projects";
const title = "Popular Project Domains";
const btnText = "Browse All Domains";

const categoryList = [
  {
    imgUrl: img1,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Software Development",
    count: "24 Projects",
  },
  {
    imgUrl: img2,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Healthcare and Medical Devices",
    count: "14 Projects",
  },
  {
    imgUrl: img3,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Robotics",
    count: "27 Projects",
  },
  {
    imgUrl: "assets/images/category/icon/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Data Science And analysis",
    count: "20 Projects",
  },
  {
    imgUrl: img5,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Artificial Intelligence and Machine Learning",
    count: "23 Projects",
  },
  {
    imgUrl: img6,
    imgAlt: "category rajibraj91 rajibraj",
    title: "Blockchain and Cryptocurrency",
    count: "18 Projects",
  },
];

const Category = () => {
  return (
    <div className="category-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-2 justify-content-center row-cols-xl-6 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((val, i) => (
              <div className="col" key={i}>
                <div className="category-item text-center">
                  <div
                    className="category-inner"
                    style={{
                      height: "270px",
                    }}
                  >
                    <div className="category-thumb">
                      <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                    </div>
                    <div className="category-content">
                      <Link to="/course">
                        <h6>{val.title}</h6>
                      </Link>
                      <span>{val.count}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/course" className="lab-btn">
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
