import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
<<<<<<< HEAD:src/Edituser.js
import { APIuser } from './API';
import { userValidationSchema } from './Adduser';
import {useFormik} from "formik";
import Button from '@mui/material/Button';
export function Edituser() {
  const [ userlist,setuserlist]= useState(null);
  const { id } = useParams();
     useEffect(()=>{
  fetch(`${APIuser}/User/${id}`,
  {
    method:"GET",
  })
  //.then(data=>console.log(data))
  .then(data=>data.json())
  .then ((mvs)=>setuserlist(mvs));
},[])
  //console.log(id, teacherlist);
  //const teacher1 = teacherlist[id];
  //console.log(teacher1);
    return (
  <div className="add-teacher-form">
    {userlist ?<Edituserform  userlist={ userlist}/>:<h1>loading</h1>}
  </div>
  )
}
function Edituserform({ userlist}){
   const history = useHistory();
   const formik=useFormik({
    initialValues:{
     name:userlist.name,
     logo:userlist.logo,
     about:userlist.about,
    },
    validationSchema:userValidationSchema, 
     onSubmit:(editte)=>{
      edituser(editte);
      //console.log("onSubmit",newteacher);
  },
      });
      const edituser=(editte)=>{
        console.log("update",editte);
  fetch(`${APIuser}/User/${userlist.id}`,{
    method:"PUT",
    body:JSON.stringify(editte),
    headers:{
      "content-Type":"application/json",
    }})
  .then(()=> history.push('/User'));
      }
  return (<div className="add-teacher-form">
        <form onSubmit={formik.handleSubmit}>
     {/*<TextField fullWidth label="name" id="fullWidth" type="text"
      placeholder="Name"
    onChange={(event) => settname(event.target.value)} />*/}
    <TextField fullWidth label="name" id="name"name="name" 
    type="text" onBlur={formik.handleChange}
     onChange={formik.handleChange} 
    value={formik.values.name}
        />{formik.touched.name && formik.errors.name ?formik.errors.name :" "}
    <TextField fullWidth label="logo" id="logo" 
    name="logo" type="text" 
      onChange={formik.handleChange} 
      onBlur={formik.handleChange} value={formik.values.logo}/>
      {formik.touched.logo && formik.errors.logo?formik.errors.logo :" "}
    <TextField fullWidth label="about" id="about" name="about" type="text" 
      onChange={formik.handleChange} onBlur={formik.handleChange} />
      {formik.touched.about && formik.errors.about ?formik.errors.about :" "}

    <Button fullwidth type="submit" >SAVE</Button>
  
   </form>
</div>
)
}
=======
export function Editteacher({ teacherlist, setteacherlist }) {
  const { id } = useParams();
  const history = useHistory();
  console.log(id, teacherlist);
  const teacher1 = teacherlist[id];
  console.log(teacher1);
  const [tname, settname] = useState(teacher1.tname);
  const [tdegree, settdegree] = useState(teacher1.tdegree);
  const [texp, settexp] = useState(teacher1.texp);

  return <div className="add-teacher-form">
    <TextField fullWidth label="name" id="fullWidth" type="text"
      placeholder="Name"
      onChange={(event) => settname(event.target.value)} value={tname} />
    <TextField fullWidth label="degree" id="fullWidth" type="text" placeholder="poster"
      onChange={(event) => settdegree(event.target.value)} value={tdegree} />
    <TextField fullWidth label="exp" id="fullWidth" type="text" placeholder="rating"
      onChange={(event) => settexp(event.target.value)} value={texp} />

    <button onClick={() => {
      const newMovie = {
        tname: tname,
        tdegree: tdegree,
        texp: texp,
      };
      const updateteacher = [...teacherlist];
      updateteacher[id] = newMovie;
      setteacherlist(updateteacher);
      history.push('/Teacher');
    }}>save</button>
  </div>;
}
>>>>>>> a6a0e600fdc98aa977d680d849cdaa0d45937b9e:src/Editteacher.js
