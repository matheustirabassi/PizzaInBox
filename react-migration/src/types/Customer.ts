export type Customer = {
document: number;
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
	state: string;
	city: string;
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