// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: process.env.NODE_ENV === "development" },
	modules: ["@formkit/nuxt", "@nuxtjs/tailwindcss"],
	css: ["@formkit/themes/genesis"],
	formkit: {
		autoImport: true,
	},
});
