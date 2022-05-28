import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { useParams, useHistory } from "react-router-dom";
import{useEffect,useState} from 'react';
import { APIposter} from './API';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function Viewposter() {
  const { id } = useParams();
  const [ posterlist,setposterlist]= useState([]);
  const history = useHistory();
  //const posterlist = posterlist[id];

 
  const getposter=()=>{
    fetch(`${APIposter}/poster/${id}`,
    {
      method:"GET",
    })
  .then((data)=>(data.json()))
  .then((mvs)=>setposterlist(mvs));
  };
  useEffect(()=>getposter(),[]);

  return (
        <div>
      <Card sx={{ maxwidth: '45%', maxheight: '65%', margin: '5%', }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} alt={posterlist.name} src={posterlist.logo} onClick={() => history.push('/user')} />} title={posterlist.name} />
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={posterlist.image}
            alt={posterlist.name}  />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {posterlist.imagename}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {posterlist.aboutimage}
            </Typography>
            <div className='item'>
             {/* <IconButton className="Like-dislike" aria-label="like" color="primary" onClick={() => posterdelete(id)}>
                <DeleteIcon />
              </IconButton>
             <IconButton aria-label="add to favorites" color="primary"
              onClick={() =>history.push(`/Poster/edit/${id}`)}>  <EditIcon />
            </IconButton>
  */}
            </div>
                                  </CardContent>
            <Button onClick={() => history.goBack()}> back</Button>
        </CardActionArea>
      </Card>
    

    </div>
  );
}

/*<Editb1 posterlist={posterlist} setposterlist={setposterlist} index={id} />*/