import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Route, Link, Switch, useHistory } from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';


export function User({ name, logo, about, deleteuser, edituser, id ,_id}) {
  const history = useHistory();
  return (
    <div>
    <Card sx={{ maxWidth: 755, margin: '10%' }}>
        <h5>Profile</h5>
        <div className="headeruser" sx={{ margin: '30%' }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500], margin: '10%', gap: '10%' }}
              alt={name} src={logo}
              onClick={() => history.push('/User')} />} title={name}
            subheader={about} />
          <CardActions disableSpacing sx={{ leftMargin: '20%' }}>
            {deleteuser}
                        {edituser}
          </CardActions></div>
        <hr />
        <div>
        {/*  <Card sx={{ maxWidth: 655, margin: '10%', textAlign: 'center' }}>
            <Link path="/User/Post/:id"> Post</Link>
            <Switch>
              <Route to="/User/Post/:id"><Ourpost /> </Route>
            </Switch>
  </Card>*/}

        </div>
      </Card>
    </div>
  );
}
