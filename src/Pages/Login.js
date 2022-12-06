import { useState, useContext } from 'react';
import {auth} from '../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import {useTranslation} from "react-i18next";
export default function LoginPage(){
    const {t,i18n} = useTranslation();
    const handlechangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng",lng);
      }
  
    
    // Email 
    const [email, setemail] = useState("");
    // Password
    const [pass, setPass] = useState("");
    // Navigate
    const navigate = useNavigate()
    // Dispatch
    const {dispatch} = useContext(AuthContext);

    // Handling Login
    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email , pass).
        then((userCredential) => {
          // User is now Signed in
            const user = userCredential.user;
            dispatch({type:"LOGIN", payload:user});
            navigate("/Dashboard");
        })
    }
    return(
      <>       
        
<div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url(https://www.alumni.ox.ac.uk/sites/default/files/styles/listing_tile_text_displayed_image/public/alumni_group_network.png?itok=mdK0sHFb)] bg-white">
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>   
                        <h2 className="text-6xl font-bold text-white shadow-black">{t("AlmaLink")}</h2>
                        
                        <p className="text-2xl max-w-xl mt-3 text-gray-300 shadow-black">{t("Place_to_know_and_interact_with_Alumni")}</p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                <h2>
                <h1 className='text-gray-700 font-bold'> Choose Your Language </h1>
                <button className="text-gray-700 text-2xl" onClick={()=> handlechangeLng("en")}>English / </button>
                <button className="text-gray-700 text-2xl" onClick={()=> handlechangeLng("od")}> ଓଡ଼ିଆ</button>
                </h2>
                        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">{t("AlmaLink")}</h2>
                        
                        <p className="mt-3 text-gray-500 dark:text-gray-300">{t("Sign_in_to_access_your_account")}</p>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={handleLogin}>
                            <div>
                                <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">{t("Email_Address")}</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 required" 
                                onChange={(e) => setemail(e.target.value)}/>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label for="password" className="text-sm text-gray-600 dark:text-gray-200">{t("Password")}</label>
                                    <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">{t("Forgot_password")}</a>
                                </div>

                                <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 required" 
                                onChange={(e) => setPass(e.target.value)}/>
                            </div>

                            <div className="mt-6">
                                <button
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    type="submit"
                                    >
                                    {t("Sign_in")}
                                </button>
                            </div>

                        </form>

                        <p className="mt-6 text-sm text-center text-gray-400">{t("Do_not_have_an_account_yet")} <a href="/SignUp" className="text-blue-500 focus:outline-none focus:underline hover:underline">{t("Sign_up")}</a>.</p>
                        <button
                                    className="mt-4 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    type="submit"
                                    ><a href="/Institution" className="text-white-500 focus:outline-none focus:underline hover:underline">
                                    {t("Institute_data_upload")}</a>
                                </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    )
}