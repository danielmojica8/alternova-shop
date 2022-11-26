export type Product = {
	id: number;
	name: string;
	unit_price: number;
	stock: number;
	type: string;
	quantity: number;
};

export interface IServices {
	products: Array<Product>;
}
