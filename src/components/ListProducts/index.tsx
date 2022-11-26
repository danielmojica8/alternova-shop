import { Grid } from '@mui/material';
import { Product } from '../../services/interface';
import { CardProduct } from '../CardProduct';
import { NoResults } from '../NoResults';
import { useListProducts } from './hook';

export function ListProducts() {
	const { products } = useListProducts();

	return (
		<Grid container spacing={2}>
			{products.length > 0 ? (
				products.map((item: Product, index: number) => (
					<Grid key={`${item.name}_${index}`} item xs={12} sm={4} md={3}>
						<CardProduct {...item} />
					</Grid>
				))
			) : (
				<NoResults />
			)}
		</Grid>
	);
}
