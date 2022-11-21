import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
  slug: string;
  name: string;
  description: string;
  image: string;
}

function ItemCard(props: Props): JSX.Element {
  const { name, description, image, slug } = props;

  return (
    <Card variant="outlined" sx={{ maxWidth: 345, height: '100%' }}>
      <CardActionArea
        to={`/product/${slug}`}
        component={Link}
        sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}
      >
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;
