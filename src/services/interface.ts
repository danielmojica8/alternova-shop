export type Product = {
	name: string;
	unit_price: number;
	stock: number;
	type: string;
};

export interface IServices {
	products: Array<Product>;
}
