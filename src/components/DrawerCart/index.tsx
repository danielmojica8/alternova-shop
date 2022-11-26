import Drawer from '@mui/material/Drawer';
import { Stack, Typography } from '@mui/material';
import { Product } from '../../services/interface';
import { CardDrawerProduct } from '../CardDrawerProduct';
import { useDrawerCart } from './hook';
import { ButtonCreateOrder } from './styled';

export function DrawerCart() {
	const { productsInCart, handleOpen, open, total, generateJson } =
		useDrawerCart();

	return (
		<Drawer anchor="right" open={open} onClose={handleOpen}>
			<Stack spacing={2} padding={2} width={{ xs: '310px', md: '400px' }}>
				<Typography variant="h6" fontWeight="bold">
					Shopping Cart
				</Typography>
				{productsInCart.map((product: Product) => (
					<CardDrawerProduct key={product.id} {...product} />
				))}

				<ButtonCreateOrder
					justifyContent="space-between"
					direction="row"
					onClick={() => generateJson()}
				>
					<Typography fontWeight="bold" variant="body1">
						Create order
					</Typography>
					<Typography fontWeight="bold" variant="body1">
						Total: ${total}
					</Typography>
				</ButtonCreateOrder>
			</Stack>
		</Drawer>
	);
}
