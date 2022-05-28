import './App.css';
import { Link, Switch, Route} from "react-router-dom";
import { useState} from 'react';
import { Login } from './Login';
import { Data} from './Data';
import { Viewposter } from './Viewposter';
import { Editposter } from './Editposter';
import {Addposter } from './Addposter';
import { Adduser } from './Adduser';
import { Viewuser } from './Viewuser';
import {Ourpost } from './Viewuser';
import { Userdata } from './Userdata';
import { Edituser } from './Edituser';
import { Editposterbyuser } from './Editposterbyuser';
import { APIuser } from './API';
import { APIposter } from './API';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import { teacherdatalist } from './teacherdatalist';
//import { studentdetails } from './studentdetails';
function App() {
  const [ posterlist,setposterlist]= useState([]);
  const [ userlist,setuserlist]= useState([]);
  return (
    <div className="App">
         <ul>
  <Box sx={{ width:900}}>
      <Button className="menu"><Link to="/">Home  </Link></Button>
     <Button className="menu"> <Link to="/Adduser">AddUser  </Link></Button>
     <Button className="menu"><Link to="/addposter">Add Poster  </Link></Button>
     <Button className="menu"> <Link to="/User/:id">Profile </Link></Button>
                                                 </Box>
                                             </ul>
      <Switch>
       
        <Route path="/User/poster/:id"><Ourpost /></Route>
        <Route path="/User/edit/:id"><Edituser /></Route>
        <Route path="/User/:id"><Viewuser /></Route>
              <Route path="/Adduser"><Adduser/></Route>
  <Route path="/User"><Userdata/></Route>
  <Route path="/User/poster/edit/:id"><Editposterbyuser /></Route>
  
  <Route path="/edit/:id"><Editposter /></Route>
  <Route path="/:id">< Viewposter /></Route>
        <Route path="/"><Data/></Route>
        <Route path="/addposter"><Addposter/></Route>
        <Route path="/Login"><Login/></Route>
      </Switch>
      
    </div>
         
  );}

 export default App;

