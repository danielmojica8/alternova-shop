import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../services/interface';

export function CardProduct(props: Product) {
	const { name, stock, type, unit_price } = props;

	return (
		<Card>
			<CardMedia
				component="img"
				height="300"
				image="https://itechcolombia.co/wp-content/uploads/2022/05/iphone-13-pro-max-green-select.png"
				alt={name}
			/>
			<CardContent sx={{ textAlign: 'center' }}>
				<Typography gutterBottom variant="body1" component="div">
					{name}
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'center' }}>
				<Button size="small">{stock}</Button>
				<Button size="small">Add to Cart</Button>
			</CardActions>
		</Card>
	);
}
