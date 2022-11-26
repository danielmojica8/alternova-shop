import create from 'zustand';
import { services } from '../../services';
import { Product } from '../../services/interface';

interface ProductsState {
	products: Array<Product>;
	searchText: string;
	searchCategory: string | null;
	setSearchCategory: (category: string | null) => void;
	setSearchText: (text: string) => void;
	decreaseStock: (id: number, quantity: number) => void;
}

const useProductsStore = create<ProductsState>((set) => ({
	products: services.products.map((product: Product, index: number) => ({
		...product,
		id: index,
	})),

	searchText: '',
	searchCategory: null,

	setSearchCategory: (category) => {
		set(() => ({ searchCategory: category }));
	},

	setSearchText: (text) => {
		set(() => ({ searchText: text }));
	},

	decreaseStock: (id, quantity) => {
		set((state) => {
			const newState = state.products.map((product: Product) => {
				return product.id === id
					? { ...product, stock: product.stock - quantity }
					: product;
			});

			return { products: newState };
		});
	},
}));

export default useProductsStore;
