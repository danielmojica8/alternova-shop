import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function ButtonCart() {
	return (
		<IconButton color="inherit" aria-label="add to shopping cart">
			<AddShoppingCartIcon />
		</IconButton>
	);
}
