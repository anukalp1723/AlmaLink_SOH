import React from 'react';
import { Link } from "react-router-dom";
const Home = ({Name , Designation , email , Twitter , Linkedin , Tenth , Twelth , Graduate , PostGraduate , Doctorate , imageURL , Github , mailto, label }) => {

  return (
    <div name='home' className='w-full h-screen bg-white'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-900 text-3xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-blue-700'>
          {Name}
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-blue-900'>
          I'm a {Designation}.
        </h2>
        <h2 className='text-3xl sm:text-3xl font-bold text-grey-900 mt-14'>
          Institutions I have studied from 
        </h2>
        <h2 className='text-2xl sm:text-2xl font-bold text-brown-500 mt-5'>
          {Tenth}  
        </h2>
        <h2 className='text-2xl sm:text-2xl font-bold text-brown-500 mt-1'>
          {Twelth}  
        </h2>
        <h2 className='text-2xl sm:text-2xl font-bold text-brown-500 mt-1'>
          {Graduate}  
        </h2>
        <h2 className='text-2xl sm:text-2xl font-bold text-brown-500 mt-1'>
          {PostGraduate}  
        </h2>
        <h2 className='text-2xl sm:text-2xl font-bold text-brown-500 mt-1'>
          {Doctorate} 
        </h2>
        <div>
        <div className="flex mt-8">
                            { Linkedin && <a href={Linkedin} className="mx-2  text-blue-800  hover:text-blue-900 group-hover:text-white" aria-label="Reddit" >
                                <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                   <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                    </path>
                                </svg>
                            </a> }

                            {Twitter && <a href={Twitter} className="mx-2  text-blue-400  hover:text-blue-500 group-hover:text-white"
                                aria-label="Twitter">
                                <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                    </path>
                                </svg>
                            </a>}

                            {email && <a href={"mailto:" + {email}} className="mx-2  text-blue-400  hover:text-blue-500 group-hover:text-white"
                                aria-label="email">
                                <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            </a>}

                            {Github && <a href={Github} className="mx-2  text-gray-800  hover:text-black group-hover:text-white" aria-label="Github">
                                <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                    </path>
                                </svg>
                            </a>}
                        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;