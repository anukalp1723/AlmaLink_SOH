import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AlumniPage from './Pages/AlumniPage';
import Resources from './Pages/Resources';
import UpdateP from './Pages/Update';
import SignUp from './Pages/SignUp';
import Calendar from './Pages/Calendar';
import AddBlogPage from './Pages/AddBlogPage';
import AddProjectsPage from './Pages/AddProjectsPage';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Portfolio from './Pages/Portfolio';
import Institution from './Pages/Institution';
import Blogpage from './Pages/Blogpage'
import DisplayBlog from './Pages/DisplayBlog';
function App() {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to = "/"/>
  }
  return (
  <>
    <Routes>
    <Route exact path = "/" element = {<LoginPage/>} />
    <Route exact path = "/SignUp" element = {<SignUp/>} />

    <Route exact path = "/Dashboard" element = {<RequireAuth><Dashboard/></RequireAuth>} />
    <Route exact path = "/Portfolio" element = {<RequireAuth><Portfolio/></RequireAuth>} />
    <Route exact path = "/Alumni" element = {<RequireAuth><AlumniPage/></RequireAuth>} />
    <Route exact path = "/Resources" element = {<RequireAuth><Resources/></RequireAuth>} />
    <Route exact path ='/Update' element = {<RequireAuth><UpdateP/></RequireAuth>}/>
    <Route exact path ='/Calendar' element = {<RequireAuth><Calendar/></RequireAuth>}/>
    <Route exact path ='/AddBlogPage' element = {<RequireAuth><AddBlogPage/></RequireAuth>}/>
    <Route exact path ='/AddProject' element = {<RequireAuth><AddProjectsPage/></RequireAuth>}/>
    <Route exact path = '/Institution' element = {<RequireAuth><Institution/></RequireAuth>}/>
    <Route exact path = '/DisplayBlog' element = {<RequireAuth><DisplayBlog/></RequireAuth>}/>
    <Route exact path = '/Blogpage' element = {<RequireAuth><Blogpage/></RequireAuth>}/>
    
    </Routes>
  </>
  );
}

export default App;
