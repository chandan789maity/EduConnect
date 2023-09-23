import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo/logo.png";
import { UserOutlined } from "@ant-design/icons";
import { AiFillHome, AiOutlinePlus, AiOutlineDownload } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import { PiStudentDuotone } from "react-icons/pi";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import axios from "axios";
import { useQuery } from "react-query";
import { server } from "../App";
import { toast } from "react-toastify";
import { Avatar, Modal } from "antd";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

async function approve(id) {
  try {
    const res = await axios.get(`${server}project/approve/${id}`, {
      withCredentials: true,
    });
    if (res.status === 200) {
      toast(res?.data?.Messege, { type: "success" });
    } else {
      toast("Approve failed", { type: "error" });
    }
  } catch (err) {
    console.log(err);
  }
}
async function reject(id) {
  try {
    const res = await axios.get(`${server}project/reject/${id}`, {
      withCredentials: true,
    });
    if (res.status === 200) {
      toast(res?.data?.Messege, { type: "success" });
    } else {
      toast("Reject failed", { type: "error" });
    }
  } catch (err) {
    console.log(err);
  }
}

const Projects = ({ projects, setPage, setProject }) => {
  return (
    <main className="ml-28 pt-16 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="text-3xl font-bold mb-10">{"Projects"}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-stretch">
                <div className="text-gray-400 text-xs">
                  Total no of projects : {projects?.length}
                </div>
                <div className="h-100 border-l mx-4" />
              </div>
            </div>
            <hr className="my-10" />
            <div className="grid grid-cols-12 gap-x-5">
              <div className="col-span-12">
                <h2 className="text-2xl font-bold mb-4">
                  Projects uploaded by your college
                </h2>
                <div className=" flex items-center">
                  {projects?.map((project) => {
                    return (
                      <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2 mx-2 my-2">
                        <div className="flex justify-between">
                          <div className="text-gray-400 text-xs">
                            {project?.Category}
                            <span
                              className={`-ml-1 block py-1 px-2 text-black font-bold mt-1 rounded-lg text-center w-16 ${
                                project.Status === "pending"
                                  ? "bg-orange-400"
                                  : "bg-green-400"
                              }`}
                            >
                              {project.Status}
                            </span>
                          </div>
                          <div className="text-gray-400 text-xs">
                            {project?.AuthorName}
                          </div>
                        </div>
                        <p
                          onClick={() => {
                            setPage("project");
                            setProject(project);
                          }}
                          className="font-bold hover:text-yellow-800 hover:underline"
                        >
                          {project?.Title}
                        </p>
                        <div className="text-sm text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            className="text-gray-800 inline align-middle mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                          {project?.Description.substring(0, 200)}
                        </div>
                        <div className="w-full flex justify-end ">
                          <LuExternalLink
                            onClick={() => {
                              setProject(project);
                              setPage("project");
                            }}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
const Students = ({ students }) => {
  return (
    <main className="ml-28 pt-16 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="text-3xl font-bold mb-10">{"Students"}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-stretch">
                <div className="text-gray-400 text-xs">
                  Total no of students : {students?.length}
                </div>
                <div className="h-100 border-l mx-4" />
              </div>
            </div>
            <hr className="my-10" />
            <div className="grid grid-cols-12 gap-x-5">
              <div className="col-span-12">
                <h2 className="text-2xl font-bold mb-4">
                  Students of your college
                </h2>
                <div className=" flex items-center">
                  {students?.map((student) => {
                    return (
                      <div className="p-4 bg-white border rounded-xl text-gray-800 mx-2 my-2 w-50">
                        {student?.Pic ? (
                          <Avatar size="large" src={student?.Pic} />
                        ) : (
                          <Avatar size="large" icon={<UserOutlined />} />
                        )}

                        <div className="flex justify-between">
                          <div className=" text-normal font-bold text-black mt-1">
                            {student?.Name}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {student?.Email}
                          </div>
                        </div>

                        <div className="text-sm text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            className="text-gray-800 inline align-middle mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                          {student?.Bio?.substring(0, 140)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Project = ({ project, projects, setProject, setPage, refetch }) => {
  const [openApproved, setOpenApproved] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  return (
    <main className="ml-28 pt-16 max-h-screen overflow-auto">
      <Modal
        open={openApproved}
        title="Confirmation !"
        onOk={async () => {
          await approve(project?._id);
          refetch();
          setPage("home");
        }}
        onCancel={() => setOpenApproved(false)}
      >
        <p>Click Ok to proceed</p>
      </Modal>
      <Modal
        open={openReject}
        title="Confirmation !"
        onOk={async () => {
          await reject(project?._id);
          refetch();
          setPage("home");
        }}
        onCancel={() => setOpenReject(false)}
      >
        <p>Click Ok to proceed</p>
      </Modal>
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <span
              className={`-ml-1 block py-1 px-2 text-black font-bold mt-1 rounded-lg text-center w-16 ${
                project.Status === "pending" ? "bg-orange-400" : "bg-green-400"
              }`}
            >
              {project.Status}
            </span>
            <h1 className="text-3xl font-bold mb-10">{project?.Title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-stretch">
                <div className="text-gray-400 text-xs">
                  {project?.Description}
                </div>
                <div className="h-100 border-l mx-4" />
              </div>
              <div className="flex items-center gap-x-2">
                <a
                  href={project?.DownloadLink}
                  download
                  className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                >
                  <AiOutlineDownload className="mr-2" /> Download
                </a>
              </div>
            </div>
            <hr className="my-10" />
            <div className="grid grid-cols-12 gap-x-5">
              <div className="col-span-8">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="grid grid-cols-12 gap-4 w-full">
                  <div className="col-span-12">
                    <div className="p-4 bg-green-100 rounded-xl">
                      <div
                        className=" text-sm  leading-none"
                        dangerouslySetInnerHTML={{ __html: project?.Info }}
                      ></div>
                      <div className="mt-5">
                        {project?.Status === "pending" ? (
                          <button
                            onClick={() => setOpenApproved(true)}
                            type="button"
                            className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                          >
                            Approve
                          </button>
                        ) : null}

                        <button
                          type="button"
                          onClick={() => setOpenReject(true)}
                          className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-red-400 text-white ml-3 text-sm font-semibold transition"
                        >
                          {project?.Status === "public" ? "Delete" : "Reject"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <h2 className="text-2xl font-bold mb-4">More like this</h2>
                <div className="space-y-4">
                  {projects
                    ?.slice(0, 3)
                    ?.filter((p) => p?._id !== project?._id)
                    ?.map((project) => {
                      return (
                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                          <div className="flex justify-between">
                            <div className="text-gray-400 text-xs">
                              {project?.Category}
                              <span
                                className={`-ml-1 block py-1 px-2 text-black font-bold mt-1 rounded-lg text-center w-16 ${
                                  project.Status === "pending"
                                    ? "bg-orange-400"
                                    : "bg-green-400"
                                }`}
                              >
                                {project.Status}
                              </span>
                            </div>
                            <div className="text-gray-400 text-xs">
                              {project?.AuthorName}
                            </div>
                          </div>
                          <p
                            onClick={() => {
                              setProject(project);
                            }}
                            className="font-bold hover:text-yellow-800 hover:underline"
                          >
                            {project?.Title}
                          </p>
                          <div className="text-sm text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              className="text-gray-800 inline align-middle mr-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                            {project?.Description.substring(0, 140)}
                          </div>
                          <div className="w-full flex justify-end ">
                            <LuExternalLink
                              onClick={() => {
                                setProject(project);
                              }}
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Admin = () => {
  const navigate = useNavigate();
  // const [auth, refetch, isLoading] = useContext(AuthContext);
  // const { authenticated, user: college } = auth;
  const [page, setPage] = useState("home");
  const [project, setProject] = useState(null);
  const [logoutModal, setLogoutModal] = useState(false);
  const id = JSON.parse(localStorage.getItem("user"))._id;
  const { data :college, isLoading,refetch } = useQuery(
    ["college", id],
    async () => {
      try {
        const res = await axios.get(`${server}auth/isauth/college`, {
          withCredentials: true,
        });
        if (res.status === 200) {
          return res.data.user;
        }
        return null;
      } catch (err) {
        console.log(err);
        return null;
      }
    },
    {
      enabled: id !== undefined,
    }
  );

  async function logout() {
    try {
      const res = await axios.get(`${server}auth/logout`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 204) {
        refetch();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }
  const {
    data: projects,
    isLoading: isLoading2,
    refetch: refetch2,
  } = useQuery(
    ["projects", college?.CollegeEmail],
    async () => {
      try {
        const res = await axios.get(
          `${server}project/college/${college.CollegeEmail}`,
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          return res?.data?.data;
        } else {
          return [];
        }
      } catch (err) {
        return [];
      }
    },
    {
      enabled: college?.CollegeEmail !== undefined,
    }
  );
  const { data: students, isLoading: isLoading3 } = useQuery(
    ["students", college?.CollegeEmail],
    async () => {
      try {
        const res = await axios.get(
          `${server}user/college/${college.CollegeEmail}`,
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          return res?.data?.data;
        } else {
          return [];
        }
      } catch (err) {
        return [];
      }
    },
    {
      enabled: college?.CollegeEmail !== undefined,
    }
  );

  if (isLoading || isLoading2 || isLoading3) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <header className="fixed right-0 top-0 left-60 bg-white py-3 px-4 h-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-lg">
                {college?.CollegeName.toUpperCase()}
              </div>
              <div>
                <button
                  type="button"
                  className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition"
                >
                  <span className="inline-flex items-center justify-center  text-gray-600  rounded transition ml-2">
                    <AiOutlinePlus className="text-lg mr-1" />
                  </span>
                  <span className="text-sm">Add Student</span>
                </button>
              </div>
            </div>
          </div>
        </header>
        <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
          <Modal
            style={{ top: 300 }}
            title="Confirm Logout"
            open={logoutModal}
            onOk={logout}
            onCancel={() => setLogoutModal(false)}
          >
            <p>Are you sure, you want to log out?</p>
          </Modal>
          <div className="flex flex-col justify-between h-full">
            <div className="flex-grow">
              <div className="px-4 py-6 text-center border-b">
                <div className="logo">
                  <div>
                    <img
                      src={logo}
                      alt="logo"
                      style={{
                        width: "140px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1">
                  <li
                    onClick={() => {
                      setProject(null);
                      setPage("home");
                    }}
                  >
                    <a
                      href="javascript:void(0)"
                      className={`flex items-center ${
                        page === "home" ? "bg-orange-200" : ""
                      } hover:bg-orange-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4`}
                    >
                      <AiFillHome className="text-xl mr-4" />
                      Home
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setPage("students");
                    }}
                  >
                    <a
                      href="javascript:void(0)"
                      className={`flex  ${
                        page === "students" ? "bg-orange-200" : ""
                      } hover:bg-orange-200 rounded-xl font-bold text-sm text-gray-900 py-3 px-4`}
                    >
                      <PiStudentDuotone className="text-xl mr-4" />
                      Students
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setPage("projects");
                    }}
                  >
                    <a
                      href="javascript:void(0)"
                      className={`flex  ${
                        page === "projects" ? "bg-orange-200" : null
                      }  hover:bg-orange-200 rounded-xl font-bold text-sm text-gray-900 py-3 px-4`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                      </svg>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                    >
                      <CiSettings className="text-xl mr-4" />
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <button
                type="button"
                onClick={() => {
                  setLogoutModal(true);
                }}
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
              >
                <MdLogout className="mr-2" /> Logout
              </button>{" "}
            </div>
          </div>
        </aside>
        {page === "home" ? (
          <main className="ml-28 pt-16 max-h-screen overflow-auto">
            <div className="px-6 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-8 mb-5">
                  <h1 className="text-3xl font-bold mb-10">
                    Manage Your Students and Their Projects by Clicking Manage
                  </h1>
                  <div className="flex items-center justify-between">
                    <div className="flex items-stretch">
                      <div className="text-gray-400 text-xs">
                        Students
                        <br />
                        connected
                      </div>
                      <div className="h-100 border-l mx-4" />
                      <div className="flex flex-nowrap -space-x-3">
                        {students?.map((student) => {
                          return (
                            <div className="h-9 w-9" key={student?._id}>
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={student?.Pic}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={() => setPage("students")}
                        type="button"
                        className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                      >
                        Manage
                      </button>
                    </div>
                  </div>
                  <hr className="my-10" />
                  <div className="grid grid-cols-2 gap-x-20">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Stats</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <div className="p-4 bg-green-100 rounded-xl">
                            <div className="font-bold text-xl text-gray-800 leading-none">
                              Good day, <br />
                              <p className="mt-1">{college?.CollegeName}</p>
                            </div>
                            <div className="mt-5">
                              <button
                                onClick={() => setPage("projects")}
                                type="button"
                                className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                              >
                                Start tracking
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                          <div className="font-bold text-2xl leading-none">
                            {students?.length}
                          </div>
                          <div className="mt-2">Students joined</div>
                        </div>
                        <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                          <div className="font-bold text-2xl leading-none">
                            {projects?.length}
                          </div>
                          <div className="mt-2">Uploaded projects</div>
                        </div>
                        <div className="col-span-2">
                          <div className="p-4 bg-orange-300 rounded-xl text-gray-800">
                            <div className=" font-bold text-2xl leading-none">
                              {
                                projects?.filter(
                                  (project) => project?.Status === "pending"
                                )?.length
                              }
                            </div>
                            <div className="mt-2 leading-none">
                              Pending projects
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        {projects || projects?.length > 0
                          ? "Recent uploaded projects"
                          : null}
                      </h2>
                      <div className="space-y-4">
                        {projects?.slice(0, 3)?.map((project) => {
                          return (
                            <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                              <div className="flex justify-between">
                                <div className="text-gray-400 text-xs">
                                  {project?.Category}
                                  <span
                                    className={`-ml-1 block py-1 px-2 text-black font-bold mt-1 rounded-lg text-center w-16 ${
                                      project.Status === "pending"
                                        ? "bg-orange-400"
                                        : "bg-green-400"
                                    }`}
                                  >
                                    {project.Status}
                                  </span>
                                </div>
                                <div className="text-gray-400 text-xs">
                                  {project?.AuthorName}
                                </div>
                              </div>
                              <p
                                onClick={() => {
                                  setPage("project");
                                  setProject(project);
                                }}
                                className="font-bold hover:text-yellow-800 hover:underline"
                              >
                                {project?.Title}
                              </p>
                              <div className="text-sm text-gray-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  className="text-gray-800 inline align-middle mr-1"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                                {project?.Description.substring(0, 200)}
                              </div>
                              <div className="w-full flex justify-end ">
                                <LuExternalLink
                                  onClick={() => {
                                    setProject(project);
                                    setPage("project");
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ) : null}
        {page === "project" ? (
          <Project
            project={project}
            projects={projects}
            setProject={setProject}
            setPage={setPage}
            refetch={refetch2}
          />
        ) : null}
        {page === "students" ? <Students students={students} /> : null}
        {page === "projects" ? (
          <Projects
            setProject={setProject}
            setPage={setPage}
            projects={projects}
          />
        ) : null}
      </div>
    </>
  );
};

export default Admin;
