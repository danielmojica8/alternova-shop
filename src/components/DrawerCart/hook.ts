import { useCallback, useMemo } from 'react';
import { Product } from '../../services/interface';
import useCartStore from '../../stores/CartStore';
import useDialogJSONStore from '../../stores/DialogJSONStore';
import useDrawerStore from '../../stores/DrawerStore';

export const useDrawerCart = () => {
	const { open, handleOpen } = useDrawerStore();
	const { productsInCart: products } = useCartStore();
	const { setJson, setOpen } = useDialogJSONStore();

	const formatProducts = useMemo(() => {
		return products.reduce((acc: Array<Product>, current: Product) => {
			const index = acc.findIndex(
				(product: Product) => product.id === current.id
			);

			if (index >= 0) {
				acc[index] = { ...acc[index], quantity: acc[index]?.quantity + 1 };
			} else {
				acc.push(current);
			}

			return acc;
		}, []);
	}, [products]);

	const total = useMemo(() => {
		return products.reduce((acc, current) => {
			return acc + current.unit_price * current.quantity;
		}, 0);
	}, [products]);

	const generateJson = useCallback(() => {
		const newJson = {
			products: formatProducts.map((product: Product) => ({
				name: product.name,
				quantity: product.quantity,
				unit_price: product.unit_price,
				total_price: product.unit_price * product.quantity,
			})),
			order_price_total: total,
		};

		setJson(newJson);
		setOpen();
	}, [formatProducts, total]);

	return {
		open,
		productsInCart: formatProducts,
		generateJson,
		total,
		handleOpen,
	};
};
