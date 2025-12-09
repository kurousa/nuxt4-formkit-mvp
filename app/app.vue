<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center py-10">
    <div class="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
      <h1 class="text-3xl font-extrabold text-gray-800 mb-2">Dynamic Form Demo</h1>
      <p class="text-gray-500 mb-8">Generated from JSON Schema using FormKit</p>

      <DynamicFormRenderer :schema="mockSchema" />

      <!-- Display Form State (Optional for demo) -->
       <div class="mt-8 pt-6 border-t border-gray-100">
        <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Schema Source</h3>
        <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{{ JSON.stringify(mockSchema, null, 2) }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormSchema } from "~/types/schema";

const mockSchema: FormSchema = [
	{
		$formkit: "group",
		children: [
			{
				$formkit: "text",
				name: "fullName",
				label: "Full Name",
				placeholder: "John Doe",
				validation: "required",
				help: "Please enter your full legal name.",
			},
			{
				$formkit: "email",
				name: "email",
				label: "Email Address",
				placeholder: "john@example.com",
				validation: "required|email",
				validationVisibility: "live",
			},
			{
				$formkit: "password",
				name: "password",
				label: "Password",
				validation: "required|length:8",
				placeholder: "Your secret password",
			},
			{
				$formkit: "select",
				name: "role",
				label: "Role",
				options: {
					developer: "Developer",
					designer: "Designer",
					manager: "Manager",
				},
				validation: "required",
				initial: "developer",
			},
			{
				$formkit: "checkbox",
				name: "terms",
				label: "I agree to the Terms and Conditions",
				validation: "accepted",
				validationMessages: {
					accepted: "You must agree to the terms to proceed.",
				},
			},
			{
				$formkit: "submit",
				label: "Register Account",
				prefixIcon: "submit",
			},
		],
	},
];
</script>
