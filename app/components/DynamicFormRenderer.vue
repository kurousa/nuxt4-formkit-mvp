<template>
  <div class="dynamic-form-renderer">
    <FormKit type="form" :actions="false" @submit="(data: any) => $emit('submit', data)">
      <FormKitSchema :schema="schema" />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { FormKit, FormKitSchema } from "@formkit/vue";
import type { FormSchema } from "~/types/schema";

const emit = defineEmits<(e: "submit", data: any) => void>();

defineProps<{
	schema: FormSchema;
}>();
</script>
