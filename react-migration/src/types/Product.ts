export type Product = {
	id: number;
	name: string;
	price: number;
	description: string;
};

export type ProductPage = {
	content: Product[];
	last: boolean;
	totalPages: number;
	totalElements: number;
	size: number;
	number: number;
	first: boolean;
	numberOfElements: number;
	empty: boolean;
};
