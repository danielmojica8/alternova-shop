import { Box, Paper, Typography } from '@mui/material';
import { Product } from '../../services/interface';

export function CardDrawerProduct(props: Product) {
	const { name, quantity, unit_price } = props;

	return (
		<Paper elevation={3}>
			<Box style={{ display: 'flex', padding: '1rem', gap: '.5rem' }}>
				<Box>
					<img
						height={50}
						src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001.png?v=1650876856"
						alt={name}
					/>
				</Box>
				<Box>
					<Typography variant="body1">{name}</Typography>
					<Typography variant="body1">
						{quantity} Unit's - ${unit_price} c/u
					</Typography>
					<Typography variant="body1" color="secondary" fontWeight="bold">
						Total: ${unit_price * quantity}
					</Typography>
				</Box>
			</Box>
		</Paper>
	);
}
