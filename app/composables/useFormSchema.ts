import type { FormSchema } from "~/types/schema";

export const useFormSchema = () => {
	const schema = useState<FormSchema>("form-schema", () => []);

	const fetchSchema = async (_url: string) => {
		// Simulated fetch or actual implementation
		// const { data } = await useFetch(url)
		// schema.value = data.value
	};

	const setSchema = (newSchema: FormSchema) => {
		schema.value = newSchema;
	};

	return {
		schema,
		fetchSchema,
		setSchema,
	};
};
