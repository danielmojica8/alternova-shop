import { Chip, Stack } from '@mui/material';
import { useMemo } from 'react';
import { Product } from '../../services/interface';
import useProductsStore from '../../stores/ProductsStore';

export function CategoryChips() {
	const { products, searchCategory, setSearchCategory } = useProductsStore();

	const categories = useMemo(() => {
		return products.reduce((acc: Array<string>, product: Product) => {
			if (acc.includes(product.type)) {
				return acc;
			} else {
				acc.push(product.type);
			}

			return acc;
		}, []);
	}, [products]);

	return (
		<Stack
			direction="row"
			spacing={1}
			justifyContent="center"
			marginBottom="1rem"
		>
			{categories.map((category: string) => (
				<Chip
					color={searchCategory === category ? 'secondary' : 'default'}
					label={category.toUpperCase()}
					onClick={() =>
						setSearchCategory(searchCategory === category ? null : category)
					}
					key={category}
				/>
			))}
		</Stack>
	);
}
