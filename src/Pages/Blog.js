import { useState , useEffect , Fragment } from "react";
  import { db ,  storage} from "../Firebase";
  import { addDoc, collection } from "firebase/firestore";
  
  export default function Institutions(){
  
      const [Title,setTitle]=useState("");
      const [PenName,setPenName]=useState("");
      const [Desc , setDesc] = useState("");
    
      const register = async () => {
    
        try {
              await addDoc(collection(db,"Blog"),{Title:Title, Desc: Desc , PenName:PenName });
              alert("Added Information successfully");
          } catch (error) {
              alert(error);
          }
  
    }
    
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
              className="w-full  h-auto  hidden lg:block lg:w-5/12  rounded-l-lg
              bg-[url('https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80')] bg-contain bg-no-repeat bg-center "
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 font-bold text-4xl text-center">Write your Blog</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
              <label className="block mb-2 text-2xl font-bold text-gray-700" for="firstName">
                      Title
                    </label>
                    <input
                      className="w-full px-3 py-2 text-1.7xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-blue-500 focus:shadow-outline "
                      id="firstName"
                      type="text"
                      placeholder="Enter Title"
                      onChange={(event)=>{setTitle(event.target.value)}}
                      required/>

              
                <div className="mt-4 mb-4">
								<label className="block mb-2 text-2xl font-bold text-gray-700" for="email">
									Tell your story
								</label>
								<textarea
									className="w-full h-32 px-3 py-2 mb-3 text-2xl leading-tight text-gray-700 border rounded shadow box-border border-4 focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="Tenth"
									type="textarea"
									placeholder="Tell your story"
									onChange={(event)=>{setDesc(event.target.value)}}
								/>
							</div>

              <div className="mt-4 mb-4">
								<label className="block mb-2 text-2xl font-bold text-gray-700" for="email">
									Pen name
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-2xl leading-tight text-gray-700 border rounded shadow box-border border-4 focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
									id="PenName"
									type="textarea"
									placeholder="Write your Pen name"
									onChange={(event)=>{setPenName(event.target.value)}}
								/>
							</div>
          
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-blue-500 focus:shadow-outline"
                    type="submit"
                  >
                    Publish Blog
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                 
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