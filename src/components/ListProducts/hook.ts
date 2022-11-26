import { useCallback, useMemo } from 'react';
import { Product } from '../../services/interface';
import useProductsStore from '../../stores/ProductsStore';

export const useListProducts = () => {
	const { products, searchText, searchCategory } = useProductsStore();

	const filteredProducts = useCallback(
		({ condition1, condition2 }: any) => {
			return products.filter((product: Product) => {
				const condition = condition1 && condition2 !== '';

				const type = product.type === condition1;
				const name = product.name
					.toLowerCase()
					.includes(condition2?.toLowerCase());

				return condition
					? name && type
					: condition2 !== ''
					? name
					: false || type;
			});
		},
		[products, searchCategory, searchText]
	);

	const productsRender =
		searchCategory || searchText != ''
			? filteredProducts({ condition1: searchCategory, condition2: searchText })
			: products;

	return {
		products: productsRender,
	};
};
