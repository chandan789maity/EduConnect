import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";
import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogPageThree from "./page/blog-3";
import BlogSingle from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import ProjectSingle from "./page/project-single"
import ForgetPass from "./page/forgetpass";
import Home from "./page/home";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import SignUpAs from "./page/signUpAs";
import AddProject from "./page/add";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";
import College from "./page/college";
import Uploaded from "./page/uploaded";

import { AuthProvider } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export const server = "https://educonnect-server.onrender.com/api/v1/";  //Hosted server
// export const server = "http://localhost:4000/api/v1/";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="index-2" element={<HomeTwo />} />
		<Route path="index-3" element={<HomeThree />} />
		<Route path="index-4" element={<HomeFour />} />
		<Route path="index-5" element={<HomeFive />} />
		<Route path="index-6" element={<HomeSix />} />
		<Route path="index-7" element={<HomeSeven />} /> */}
            <Route path="course" element={<CoursePage />} />
            <Route path="project-single/:id" element={<ProjectSingle />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog-2" element={<BlogPageTwo />} />
            <Route path="blog-3" element={<BlogPageThree />} />
            <Route path="blog-single" element={<BlogSingle />} />
            <Route path="/uploaded" element={<Uploaded />} />
            {/* <Route path="about" element={<AboutPage />} /> */}
            <Route path="team" element={<TeamPage />} />
            <Route path="team-single" element={<TeamSingle />} />
            <Route path="instructor" element={<InstructorPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="shop-single" element={<ShopDetails />} />
            <Route path="cart-page" element={<CartPage />} />
            <Route path="search-page" element={<SearchPage />} />
            <Route path="search-none" element={<SearchNone />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="college" element={<College />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="signUpas" element={<SignUpAs />} />
            <Route path="addproject" element={<AddProject />} />
            <Route path="forgetpass" element={<ForgetPass />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
