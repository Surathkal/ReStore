import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Avatar,
} from '@mui/material'
import { bgcolor } from '@mui/system'
import { Product } from '../../app/models/product'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: 'bold', color: 'primary.main' },
        }}
      />

      <CardMedia
        sx={{ backgroundSize: 'contain', bgcolor: 'primary.light' }}
        component="img"
        height="140"
        image={product.pictureUrl}
        alt="green iguana"
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  )
}
