import Typography from '@mui/material/Typography';
import { Product } from '../../services/interface';
import useCartStore from '../../stores/CartStore';
import useProductsStore from '../../stores/ProductsStore';
import { Box, Paper, Rating, Snackbar } from '@mui/material';
import { BoxContainer, ButtonStyled, ContainerImage } from './styled';
import { useState } from 'react';
import { QuantityDesired } from '../QuantityDesired';

export function CardProduct(props: Product) {
	const { name, stock, type, unit_price, id } = props;

	const [open, setOpen] = useState(false);
	const [quantity, setQuantity] = useState(0);

	const { addProducts } = useCartStore();
	const { decreaseStock } = useProductsStore();

	const handleAddProduct = () => {
		const product = { name, stock, type, unit_price, id, quantity };
		if (stock === 0) {
			setOpen(true);
			return;
		}

		addProducts(product);
		decreaseStock(product.id, quantity);
		setQuantity(0);
	};

	return (
		<Paper>
			<BoxContainer>
				<ContainerImage>
					<img
						alt={name}
						height={160}
						src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001.png?v=1650876856"
					/>
				</ContainerImage>
				<Box textAlign="center" marginTop="2rem">
					<Typography fontWeight="bold" variant="body1">
						{name}
					</Typography>
					<Typography variant="caption">Category: {type}</Typography>
				</Box>
				<Box>
					<Typography variant="caption">Stock: {stock}</Typography>
				</Box>
				<Box textAlign="center">
					<Rating name="read-only" size="small" value={3} readOnly />
					<Typography variant="body1">${unit_price}</Typography>
				</Box>
				<Box>
					<QuantityDesired
						stock={stock}
						setOpen={setOpen}
						quantity={quantity}
						setQuantity={setQuantity}
					/>
				</Box>
				<ButtonStyled
					fullWidth
					variant="contained"
					color="secondary"
					onClick={handleAddProduct}
					disabled={stock === 0 || quantity === 0}
				>
					Add to Cart
				</ButtonStyled>
			</BoxContainer>
			<Snackbar
				open={open}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				autoHideDuration={6000}
				onClose={() => setOpen(false)}
				message="Not enough products in stock"
			/>
		</Paper>
	);
}
