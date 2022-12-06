import { useState , useEffect , Fragment, useContext } from "react";
import { db , auth , storage} from "../Firebase";
import { setDoc , doc } from "firebase/firestore";
import {ref, uploadBytesResumable , getDownloadURL} from "firebase/storage";
import { createUserWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
import { Listbox , Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import {useTranslation} from "react-i18next";

import {
  uploadBytes,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";

// const department_options = [
// 	{ name: 'AIML' },
// 	{ name: 'CSE' },
// 	{ name: 'ECE' },
// 	{ name: 'ISE' },
// 	{ name: 'EEE' },
// 	{ name: 'Others' },
//   ]

export default function SignUp(){
	const {t,i18n} = useTranslation();

    const [Name,setName]=useState("")
    // const [Department,setDepartment]=useState(department_options[0]);
    const [soc,setSoc]=useState("");
	const [LinkedIn , setLinkedIn] = useState("");
	const [Tenth , setTenth] = useState("");
	const [Twelth , setTwelth] = useState("");
	const [Graduate ,setGraduate] = useState("");
	const [PostGraduate , setPostGraduate] = useState("");
	const [Doctorate , setDoctorate] = useState("");
    const [Profession,setProfession]=useState("");
	const [Twitter,setTwitter]=useState("");
    const [regemail,setRegemail]=useState("");
    const [regpass,setRegpass]=useState("");
	const [image, setimage] = useState([]);
	const [imageURL, setImageURL] = useState("");
	const [per, setPerc] = useState(null);
    const {dispatch} = useContext(AuthContext);
	const navigate = useNavigate();
	
	  const register = async () => {
		try {
			await createUserWithEmailAndPassword(
			auth,
			regemail,
			regpass
		  ).then(credential=>{
			if(credential && credential.user)
			{
				const uid = credential.user.uid;
				setDoc(doc(db, "Alumni", credential.user.uid), {
					Name: Name 
					// , Department: Department['name']
					, Profession:Profession , Github:soc ,Tenth:Tenth , Twelth:Twelth , Graduate:Graduate , PostGraduate:PostGraduate , Doctorate:Doctorate ,Twitter:Twitter ,  LinkedIn:LinkedIn , email:regemail , uid:uid , imageURL:imageURL
				  }).then(()=>{
							const user = credential.user;
            				dispatch({type:"LOGIN", payload:user});
            				navigate("/Dashboard");
				  });
			}
		  }).catch(e => alert(e.message));

		} catch (error) {
		  console.log(error.message);
		}
	  };
	  useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser.user);
		});
		
	}, []);
	
	useEffect(() => {
	  const uploadFile =()=>{
		const name = new Date().getTime() + image.name
		const storageRef = ref(storage, `image/${name}`);
		const uploadTask = uploadBytesResumable(storageRef, image);
		uploadTask.on(
		  "state_changed",
		  (snapshot) => {
			const progress =
			  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log("Upload is " + progress + "% done");
			setPerc(progress);
			switch (snapshot.state) {
			  case "paused":
				console.log("Upload is paused");
				break;
			  case "running":
				console.log("Upload is running");
				break;
			  default:
				break;
			}
		  },
		  (error) => {
			console.log(error);
		  },
		  () => {
			getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
			  setImageURL(downloadURL);
			  console.log(imageURL);
			});
		  }
		);
		console.log(name);
	  }

	  image &&uploadFile();
	}, [image])
	
	const handleSubmit = event => {
		event.preventDefault();
		 register();
	  };
	  const handlechangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng",lng);
      }
    return (
        <>
         <div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full  lg:w-11/12 flex">
					<div
						className="w-full h-auto bg-[#001943] hidden lg:block lg:w-5/12  rounded-l-lg
						bg-[url('https://www.alumni.ox.ac.uk/sites/default/files/styles/listing_tile_text_displayed_image/public/alumni_group_network.png?itok=mdK0sHFb')] bg-contain bg-no-repeat bg-center "
					></div>
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
					<h2>
                    <h1 className='text-gray-700 font-bold'> Choose Your Language </h1>
                    <button className="text-gray-700 text-2xl" onClick={()=> handlechangeLng("en")}>English / </button>
                    <button className="text-gray-700 text-2xl" onClick={()=> handlechangeLng("od")}> ଓଡ଼ିଆ</button>
                    </h2>
						<h3 className="pt-4 text-2xl text-center">{t("Create_an_Account")}</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
						<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										{t("Name")}
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline "
										id="firstName"
										type="text"
										placeholder="Name"
										onChange={(event)=>{setName(event.target.value)}}
										required/>
							<div className="mb-4 mt-4 md:flex md:justify-between">

							<div className="flex justify-center">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label for="formFile" className="block mb-2 text-sm font-bold text-gray-700">{t("Upload_Photo")}</label>
								<input className="form-control
								block
								w-full
								px-3
								py-1.5
								text-base
								font-normal
								text-gray-700
								bg-white bg-clip-padding
								border border-solid border-gray-300
								rounded
								transition
								ease-in-out
								m-0
								focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" onChange={(e)=>setimage(e.target.files[0])}/>
							</div>
							</div>

							{/* <div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
								Department
							</label>
							<div>
      							<Listbox value={Department} onChange={setDepartment}>
        							<div className="relative mt-1">
          								<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
            								<span className="block truncate">{Department.name}</span>
            									<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              										<SelectorIcon
														className="h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
													</span>
												</Listbox.Button>
												<Transition
													as={Fragment}
													leave="transition ease-in duration-100"
													leaveFrom="opacity-100"
													leaveTo="opacity-0"
												>
													<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
													{department_options.map((deptmnt, deptmntIdx) => (
														<Listbox.Option
														key={deptmntIdx}
														className={({ active }) =>
															`relative cursor-default select-none py-2 pl-5  ${
															active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
															}`
														}
														value={deptmnt}	
														>
														{({ Department }) => (
															<>
															<span
																className={`block truncate ${
																Department ? 'font-medium' : 'font-normal'
																}`}
															>
																{deptmnt.name}
															</span>
															{Department ? (
																<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
																<CheckIcon className="h-5 w-5" aria-hidden="true" />
																</span>
															) : null}
															</>
														)}
												</Listbox.Option>
												))}
											</Listbox.Options>
											</Transition>
											</div>
										</Listbox>
									</div>
								</div> */}
								
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										{t("Profession")}
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
										id="Profession"
										type="text"
										placeholder="Profession"
										onChange={(event)=>{setProfession(event.target.value)}}
										required
									/>
								</div>
							</div>
						
							

							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									{t("Email")}
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
									onChange={(event)=>{setRegemail(event.target.value)}}
									required
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									{t("Highschool_name")}
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="Tenth"
									type="Tenth"
									placeholder="10th school name"
									onChange={(event)=>{setTenth(event.target.value)}}
								/>
							</div>

							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									{t("Twelthschool_name")}
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="Twelth"
									type="Twelth"
									placeholder="12th school name"
									onChange={(event)=>{setTwelth(event.target.value)}}
								/>
							</div>

							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									{t("Graduate_college_name")}
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="Graduate"
									type="Graduate"
									placeholder="graduate college name"
									onChange={(event)=>{setGraduate(event.target.value)}}
								/>
							</div>

							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									{t("Post_graduate_college_name")}
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="PostGraduate"
									type="PostGraduate"
									placeholder="Post-graduate college name"
									onChange={(event)=>{setPostGraduate(event.target.value)}}
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									{t("Doctorate_college_name")}
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="Doctorate"
									type="Doctorate"
									placeholder="Doctorate college name"
									onChange={(event)=>{setDoctorate(event.target.value)}}
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									{t("Twitter")}
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="Twitter"
									type="Twitter"
									placeholder="Twitter"
									onChange={(event)=>{setTwitter(event.target.value)}}
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									{t("LinkedIn")}
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="LinkedIn"
									type="LinkedIn"
									placeholder="LinkedIn"
									onChange={(event)=>{setLinkedIn(event.target.value)}}
								/>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
										{t("Password")}
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
										id="password"
										type="password"
										placeholder="********"
										onChange={(event)=>{setRegpass(event.target.value)}}
										required
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="c_password">
										{t("Confirm_Password")}
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="********"
										required
									/>
								</div>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									type="submit"
								>
									{t("Register_Account")}
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									{t("Forgot_Password")}
								</a>
							</div>
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									{t("Already_have_an_account")} ? {t("Login")}
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
        </>
    );
}

