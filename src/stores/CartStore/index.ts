import create from 'zustand';
import { Product } from '../../services/interface';

interface CartState {
	productsInCart: Array<Product>;
	addProducts: (product: Product) => void;
}

const useCartStore = create<CartState>((set) => ({
	productsInCart: [],
	addProducts: (product: Product) => {
		set((state) => ({
			productsInCart: [...state.productsInCart, product],
		}));
	},
}));

export default useCartStore;
