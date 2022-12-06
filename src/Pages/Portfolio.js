import React, { useState, useEffect } from 'react'
import {useLocation ,Navigate} from 'react-router-dom'
import {collection ,query, getDocs,where, updateDoc, doc} from "firebase/firestore";
import { db } from '../Firebase';
import { Nav } from '../Components/Nav'
import { Footer } from '../Components/Footer'
import About from '../Components/Portfolio/About'
import Home from '../Components/Portfolio/Home'
import Work from '../Components/Portfolio/Work'
import Blogs from '../Components/Portfolio/Blogs'
function Portfolio() {
    const location = useLocation();
    const { id } = location.state || "";
    console.log(id);
    const RequireID = ({children}) => {
        return id ? (children) : <Navigate to = "/Alumni"/>
      }
    useEffect(() => {
      window.scrollTo(0 , document.body.scrollHeight);
      window.scrollTo({top:0 , behavior:"smooth"}); 
    }, [])
    
    const [res, setRes] = useState([]);
    const [Name,setName]=useState("");
    const [email,setemail]=useState("");
    const [Tenth,setTenth]=useState("");
    const [Twelth,setTwelth]=useState("");
    const [Graduate,setGraduate]=useState("");
    const [PostGraduate,setPostGraduate]=useState("");
    const [Doctorate,setDoctorate]=useState("");
    const [dept,setDept]=useState("");
    const [Profession,setProfession]=useState("");
    const [github, setgithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [Twitter, setTwitter] = useState("");
    const [projects, setProjects] = useState([]);
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
    const getUsers=async()=>{
        const data=await getDocs(query(collection(db,"Alumni"), where("uid","==",id)));
        setRes(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }
    getUsers();
    
    },[]);

    const getBlogs = async() => {
        const list = await getDocs(query(collection(db , "Blog"),where("uid","==",id)));
        setBlogs(list.docs.map( (doc) => ({id:doc.id , ...doc.data()}) ));
      }
    const getProjects = async() =>{
        const list = await getDocs(query(collection(db,"Projects"),where("uid","==",id)));
        setProjects(list.docs.map((doc) => ({id:doc.id , ...doc.data()})));
      }
      useEffect(() => {
          getBlogs();
          getProjects();
          console.log({blogs})
      },[])

    useEffect(() => {
        if(res.length >0)
        {
            setName(res[0].Name);
            setemail(res[0].email);
            setTenth(res[0].Tenth);
            setTwelth(res[0].Twelth);
            setGraduate(res[0].Graduate);
            setPostGraduate(res[0].PostGraduate);
            setDoctorate(res[0].Doctorate);
            setTwitter(res[0].Twitter);
            setLinkedin(res[0].LinkedIn);
            setgithub(res[0].Github);
            setProfession(res[0].Profession);
        }
    
    }, [res])
  
    
    return (
    <>
        <Nav />
        <RequireID>
        <Home Name={Name} Linkedin={linkedin} Github={github} Designation={Profession} email={email} Tenth={Tenth} Twelth={Twelth} Graduate={Graduate} PostGraduate={PostGraduate} Doctorate={Doctorate} Twitter={Twitter}/>
        {/* <About Name={Name} Bio={"I am "+Profession+" Enthusiast."}/> */}
        <Work data={projects}/>
        <Blogs data={blogs}/>
        </RequireID>
        <Footer />
    </>
  )
}

export default Portfolio