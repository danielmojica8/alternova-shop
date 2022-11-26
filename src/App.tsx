import { Box, Container, Grid, Toolbar } from '@mui/material';
import { useState } from 'react';
import { AppBarHeader } from './components/AppBar';
import { CardProduct } from './components/CardProduct';
import { services } from './services';
import { Product } from './services/interface';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { PropsApp } from './interface';
import { ScrollTop } from './components/ScrollTop';
import { DrawerCart } from './components/DrawerCart';

function App(props: PropsApp) {
	const [products, setProducts] = useState(services.products);

	return (
		<>
			<AppBarHeader />
			<DrawerCart />
			<Toolbar
				id="back-to-top-anchor"
				sx={{
					visibility: 'hidden',
					height: 0,
					minHeight: { sx: 0, md: 0, lg: 0 },
				}}
			/>

			<Container>
				<Box sx={{ p: '1rem', maxWidth: '1600px', margin: '0 auto' }}>
					<Grid container spacing={2}>
						{products.map((item: Product, index: number) => (
							<Grid key={`${item.name}_${index}`} item xs={12} sm={4} md={3}>
								<CardProduct {...item} />
							</Grid>
						))}
					</Grid>
				</Box>

				<ScrollTop {...props}>
					<Fab size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</Container>
		</>
	);
}

export default App;
