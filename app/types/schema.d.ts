export interface FormSchemaItem {
	$formkit: string;
	name?: string;
	label?: string;
	validation?: string;
	children?: FormSchemaItem[];
	[key: string]: any;
}

export type FormSchema = FormSchemaItem[];
