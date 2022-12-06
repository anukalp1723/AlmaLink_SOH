import gradu from './gradua.jpg'
import {useTranslation} from "react-i18next";


export const Header = () => {
  const {t,i18n} = useTranslation();
    return (
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            // src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            src = {gradu}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-cyan-600">
              Connect
            </p> */}
            <h2 className=" mb-5 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {t("Connect_with_Alumni_")}
              <br className="hidden md:block" />
              {t("around")}{' '}
              <span className="inline-block text-blue-900">
                {t("the_state")}.
              </span>
            </h2>
            <p className="text-1.5xl pr-5 mb-5 text-base text-gray-700 md:text-lg">
              {t("Right_directions")}, {t("right_people")}{}, {t("right_time")}, {t("we_help_you_to_meet_Your_Alumnis")} {t("so_you_can_Get_Best_Of_the_Best")} 
            </p>
            <div className="flex items-center">
              <a
                href="/Alumni"
                className="text-2xl inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-900 hover:bg-deep-blue-accent-700 focus:shadow-outline focus:outline-none"
              >
                {t("Alumni")}
              </a>
              <a
                href="/BlogPage"
                aria-label=""
                className="text-2xl inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-blue-accent-700"
              >
                {t("Blogs")}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };