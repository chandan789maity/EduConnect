import React from "react";
import logo from "../assets/images/logo/logo.png";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import { PiStudentDuotone } from "react-icons/pi";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import axios from "axios";
import { useQuery } from "react-query";
import { server } from "../App";

const Admin = () => {
  const [auth, refetch, isLoading] = useContext(AuthContext);
  const { authenticated, user: college } = auth;
  const { data: projects, isLoading: isLoading2 } = useQuery(
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
  function getTimeDifference(timestamp) {
    const now = new Date().getTime();
    const time = new Date(timestamp).getTime();
    const diff = now - time;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
  
    if (weeks > 0) {
      return `${weeks}w`;
    } else if (days > 0) {
      return `${days}d`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else if (minutes > 0) {
      return `${minutes}m`;
    } else {
      return `${seconds}s`;
    }
  }
  
  
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
          <div className="flex flex-col justify-between h-full">
            <div className="flex-grow">
              <div className="px-4 py-6 text-center border-b">
                <div className="logo">
                  <div>
                    <img
                      src={logo}
                      alt="logo"
                      style={{
                        width: "200px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="flex items-center bg-orange-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                    >
                      <AiFillHome className="text-xl mr-4" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                    >
                      <PiStudentDuotone className="text-xl mr-4" />
                      Students
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
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
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </button>{" "}
              <span className="font-bold text-sm ml-2">Logout</span>
            </div>
          </div>
        </aside>
        <main className="ml-30 pt-16 max-h-screen overflow-auto">
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
                        <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                          <div className="font-bold text-xl leading-none">
                            Your daily plan
                          </div>
                          <div className="mt-2">5 of 8 completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  
                    <h2 className="text-2xl font-bold mb-4">
                      Recently added projects
                    </h2>
                    <div className="space-y-4">
                      {projects?.slice(0,5)?.map((project) => {
                        return (
                          <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                            <div className="flex justify-between">
                              <div className="text-gray-400 text-xs">
                                {project?.Category}
                              </div>
                              <div className="text-gray-400 text-xs">{getTimeDifference(project?.createdAt) !=='NaNs'  ? getTimeDifference(project?.createdAt) :''}</div>
                            </div>
                            <a
                              href="javascript:void(0)"
                              className="font-bold hover:text-yellow-800 hover:underline"
                            >
                              {project?.Title}
                            </a>
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
                             {project?.Description.substring(0,200)}
                            </div>
                            <div className="w-full flex justify-end ">
                            <LuExternalLink/>
                            
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
      </div>
    </>
  );
};

export default Admin;
