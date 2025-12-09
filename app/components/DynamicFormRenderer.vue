<template>
  <div class="dynamic-form-renderer">
    <FormKit type="form" :actions="false">
      <FormKitSchema :schema="schema" />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { FormKit, FormKitSchema } from "@formkit/vue";
import type { FormSchema } from "~/types/schema";

defineProps<{
	schema: FormSchema;
}>();
</script>
