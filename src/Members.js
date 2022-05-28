import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Members({ name, img, login1, signin1 }) {
  return (
    <div className='memberlogin'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {name}
          </Typography>

        </CardContent>
        <CardActions>
          <Button color="primary" size="small">{login1}</Button>
          <Button size="small">{signin1}</Button>
        </CardActions>
      </Card>
    </div>
  );
}
