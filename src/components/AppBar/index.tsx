import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ButtonCart } from '../ButtonCart';
import { ButtonMenu } from '../ButtonMenu';
import { SearchProducts } from '../Search';

export function AppBarHeader() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar sx={{ maxWidth: '1600px' }}>
					<ButtonMenu />
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'initial' } }}
					>
						Alternova Shop
					</Typography>
					<SearchProducts />
					<ButtonCart />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
