import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useCartStore from '../../stores/CartStore';
import { ButtonCart } from '../ButtonCart';
import { SearchProducts } from '../Search';
import { ContainerLogo } from './styled';

export function AppBarHeader() {
	const { productsInCart } = useCartStore();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" elevation={3} color="inherit">
				<Toolbar>
					<ContainerLogo flexGrow={1}>
						<img src="public/alternova.png" height={20} />
					</ContainerLogo>
					<SearchProducts />
					{productsInCart.length > 0 && <ButtonCart />}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
