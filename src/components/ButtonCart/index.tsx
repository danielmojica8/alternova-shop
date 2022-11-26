import IconButton from '@mui/material/IconButton';
import { StyledBadge } from './styled';
import useDrawerStore from '../../stores/DrawerStore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCartStore from '../../stores/CartStore';

export function ButtonCart() {
	const { handleOpen } = useDrawerStore();
	const { productsInCart: products } = useCartStore();

	const total = products.reduce((acc, current) => acc + current.quantity, 0);

	return (
		<IconButton aria-label="cart" color="inherit" onClick={handleOpen}>
			<StyledBadge badgeContent={total} color="secondary">
				<ShoppingCartIcon />
			</StyledBadge>
		</IconButton>
	);
}
