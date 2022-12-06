import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import {useTranslation} from "react-i18next";

export const Nav = () => {
    const {t,i18n} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {dispatch} = useContext(AuthContext);
    const handleLogout = (e) => {
      dispatch({type:"LOGOUT"});
    }
    const handlechangeLng = (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem("lng",lng);
    }

    return (
      <div class="bg-gray-900">
        <div class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/Alumni"
                  aria-label="Alumni"
                  title="Alumni"
                  class="text-2xl font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                 {t("Alumni")}
                </a>
              </li>
              {/* <li>
                <a
                  href="/Alumni"
                  aria-label="Alumni"
                  title="Alumni"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  <Link to ="/Alumni">Alumni</Link>
                </a>
              </li> */}
              <li>
                <a
                  href="/Resources"
                  aria-label="Resources"
                  title="Resources"
                  class="text-2xl font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  {t("Resources")}
                </a>
              </li>
            </ul>
            <a
              href="/Dashboard"
              aria-label="HomePage"
              title="HomePage"
              class="inline-flex items-center"
            >
              <svg
                class="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span class="ml-2 text-2xl font-bold tracking-wide text-gray-100 uppercase">
                AlmaLink
              </span>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/Calendar"
                  aria-label="Calendar"
                  title="About us"
                  class="text-2xl font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  {t("Calendar")}
                </a>
              </li>
              <li>
                <button
                  className="text-2xl font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  onClick={handleLogout}
                 >
                  {t("Sign_out")}
                </button>
              </li>
              <li>
                <button className="text-gray-100 ml-32 box-border h-16 w-32 p-4 border-4" onClick={()=> handlechangeLng("en")}>English </button>
                <button className="text-gray-100 ml-2 box-border h-16 w-32 p-4 border-4"  onClick={()=> handlechangeLng("od")}> ଓଡ଼ିଆ</button>
              </li>
              {/* <li>
                <a
                  href="/"
                  aria-label="Sign up"
                  title="Sign up"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Sign up
                </a>
              </li> */}
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full z-20">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="HomePage"
                          title="HomePage"
                          class="inline-flex items-center"
                        >
                          <svg
                            class="w-8 text-deep-blue-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            {t("HomePage")}
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <a
                            href="/Alumni"
                            aria-label="Alumni"
                            title="Alumni"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
                          >
                            {t("Alumni")}
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Resources"
                            aria-label="Resources"
                            title="Resources"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
                          >
                            {t("Resources")}
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Calendar"
                            aria-label="Calendar"
                            title="Calendar"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
                          >
                            {t("Calendar")}
                          </a>
                        </li>
                        <li>
                          <button
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
                            onClick={handleLogout}
                          >
                            {t("Sign_out")}
                          </button>
                        </li>
                        <li>
                <button className="text-gray-700" onClick={()=> handlechangeLng("en")}>English / </button>
                <button className="text-gray-700" onClick={()=> handlechangeLng("od")}> ଓଡ଼ିଆ</button>
              </li>
                        {/* <li>
                          <a
                            href="/"
                            aria-label="Sign in"
                            title="Sign in"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-900"
                          >
                            Sign in
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-900 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };