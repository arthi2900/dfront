import { useHistory} from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {useFormik} from "formik";
import { APIcomment } from './API';
import { APIposter} from './API';
import { useEffect} from 'react';
import * as yup from "yup";

export function Poster({ name,image,logo,imagename, editButton, id }) {

  const history = useHistory();
  return (
    <div >
       <Card sx={{ maxWidth: 280,margin:'2%'}}>
         <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} alt={name} src={logo} 
            onClick={() => history.push(`User/${id}`) }/>}
            title={name} /> </Card>
           <div>
        <Card>
          <CardMedia
            component="img"
            height="390"
            image={image}
            alt={name}
            onClick={() => history.push(`poster/${id}`)} />
            
            <Typography variant="h5" component="div">
            {imagename}
          </Typography>
          <hr/>
          <Like/>
          <Comment/>
        </Card>
      </div>
                
        </Card>
            </div>
  );
}

 function Like(){
  const [like, setLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  return (
    <div>
      <IconButton className="Like-dislike" aria-label="like" color="primary"
        onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      </div>
  );
}



function Comment(){
  const [commentlist,setcommentlist]=useState([]);
  const [poster,setposter]=useState([]);
const commentValidationSchema=yup.object({
    comment:yup.string().required("some comment for !!!")
      })
   const formik=useFormik({
    initialValues:{
      name:" ",logo:" ",imagename:"",comment:""
    },
      validationSchema:commentValidationSchema, 
   onSubmit:(addst)=>{
    newcomment(addst)
   },
});
  const history = useHistory();
  const newcomment =(addst)=>{
      fetch(`${APIcomment}/comment/`,{
    method:"POST",
    body:JSON.stringify(addst),
    headers:{
      "content-Type":"application/json"
    },
    }).then(()=> history.push('/poster'));}
     
    
   return (
        <div>
      <card>
      <form onSubmit={formik.handleSubmit}>
      <TextField fullWidth label="comment" id="comment" name="comment" type="text"
onChange={formik.handleChange} 
value={formik.values.comment}
    />{formik.touched.comment && formik.errors.comment ?formik.errors.comment :" "} 
  <Button type="submit">add comments</Button>
  </form>
  {commentlist.map(({name,logo,imagename,comment,id}, index) => (
          <Commentlist key={index}
            name={name} logo={logo}
             imagename={imagename}
            comment={comment}
                                     id={id} />
        ))}
<Commentlist/>
  
      </card>
<div>
  
                                                                                                                                                                                                   

</div>

    </div>
  );
}
function Commentlist({name,logo,imagename,comment}){
  const history=useHistory();
  const [commentlist,setcommentlist]=useState([]);
  useEffect(()=>{
    fetch(`${APIcomment}/comment/`,
    {
      method:"GET",
    })
    //.then(data=>console.log(data))
    .then(data=>data.json())
    .then ((mvs)=>setcommentlist(mvs));
  },[])
  return(
    <Card sx={{ maxWidth: 755, margin: '10%' }}>
       <div className="headeruser" sx={{ margin: '30%' }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500], margin: '10%', gap: '10%' }}
          alt={name} src={logo}
          onClick={() => history.push('/User')} />} title={name}
        subheader={comment} />
        </div>
        </Card>
  )
}