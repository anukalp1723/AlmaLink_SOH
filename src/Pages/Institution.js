import { useState , useEffect , Fragment } from "react";
import { db ,  storage} from "../Firebase";
import { addDoc, collection } from "firebase/firestore";
import {ref, uploadBytesResumable , getDownloadURL} from "firebase/storage";
import { Listbox , Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import {useTranslation} from "react-i18next";


const department_options = [
	{ name: '10th' },
	{ name: '12th' },
	{ name: 'Graduate' },
	{ name: 'Post Graduate' },
	{ name: 'Doctorate' },
	{ name: 'Others' },
  ]

export default function Institutions(){
	const {t,i18n} = useTranslation();

    const [Name,setName]=useState("");
    const [Department,setDepartment]=useState(department_options[0]);
    const [Year,setYear]=useState("");
	const [file, setfile] = useState([]);
	const [fileURL, setfileURL] = useState("");
	const [per, setPerc] = useState(null);
	
	  const register = async () => {
	
	    try {
            await addDoc(collection(db,"Institution"),{Name:Name , Department:Department , fileURL : fileURL , year: Year });
            alert("Added Information successfully");
        } catch (error) {
            alert(error);
        }

	}
	
	useEffect(() => {
	  const uploadFile =()=>{
		const name = new Date().getTime() + file.name
		const storageRef = ref(storage, `file/${name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
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
			  setfileURL(downloadURL);
			  console.log(fileURL);
			});
		  }
		);
		console.log(name);
	  }

	  file && uploadFile();
	}, [file])
	
	const handleSubmit = event => {
		event.preventDefault();
		 register();
	  };
    return (
        <>
         <div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full  lg:w-11/12 flex">
					<div
						className="w-full h-auto bg-[#001943] hidden lg:block lg:w-5/12  rounded-l-lg
						bg-[url('https://www.alumni.ox.ac.uk/sites/default/files/styles/listing_tile_text_displayed_file/public/alumni_group_network.png?itok=mdK0sHFb')] bg-contain bg-no-repeat bg-center "
					></div>
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">{t("Upload_Student_Data")}</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
						<label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										{t("Institute_Name")}
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline "
										id="firstName"
										type="text"
										placeholder="Enter Institute Name"
										onChange={(event)=>{setName(event.target.value)}}
										required/>
							<div className="mb-4 mt-4 md:flex md:justify-between">

							<div className="flex justify-center">
							<div className="mb-4 md:mr-2 md:mb-0">
								<label for="formFile" className="block mb-2 text-sm font-bold text-gray-700">{t("Upload_Excel_File")}</label>
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
								focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" onChange={(e)=>setfile(e.target.files[0])}/>
							</div>
							</div>

							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
								{t("Department")}
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
								</div>
							
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										{t("Year")}
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
										id="Year"
										type="text"
										placeholder="YYYY"
										onChange={(event)=>{setYear(event.target.value)}}
										required
									/>
								</div>
							</div>
						
				
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									type="submit"
								>
									{t("Upload_Details")}
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									{t("Forgot_Password")}?
								</a>
							</div>
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									{t("Already_have_an_account")}? {t("Login")}
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

// function App() {
//   const [fileUpload, setfileUpload] = useState(null);
//   const [fileUrls, setfileUrls] = useState([]);

//   const filesListRef = ref(storage, "files/");
//   const uploadFile = () => {
//     if (fileUpload == null) return;
//     const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
//     uploadBytes(fileRef, fileUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setfileUrls((prev) => [...prev, url]);
//       });
//     });
//   };

//   useEffect(() => {
//     listAll(filesListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setfileUrls((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="App">
//       <input
//         type="file"
//         onChange={(event) => {
//           setfileUpload(event.target.files[0]);
//         }}
//       />
//       <button onClick={uploadFile}> Upload file</button>
//       {fileUrls.map((url) => {
//         return <img src={url} />;
//       })}
//     </div>
//   );