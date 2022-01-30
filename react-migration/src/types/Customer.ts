export type Customer = {
document: string;
name: string;
email: string;
cellphones: number [];
login: Login;
addresses : Address [];
documentType: DocumentType;
}

type Login = {
	user: string;
	password: string;
}
export type Address = {
	street: string;
	district: string;
	number: string;
	complement: string;
	city: number;
	cep: string;
}

/**
 * Type of document
 * @readonly
 * @enum {description: string}
 */
 export enum DocumentType {
	PF = "PF",
	PJ ="PJ"
}