<script setup>
const props = defineProps({
  type: { type: String, validate(v) { ['text', 'email', 'tel'].includes(v) }, default: 'text' },
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: [String, Number] }
})
defineEmits(['update:model-value'])
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="id" class="font-redhat font-bold text-xl">{{ label }}</label>
    <input :value="modelValue" :type="type" :name="id" :id="id"
      class="rounded-lg bg-pink-50 px-4 py-5 placeholder:text-build text-build" @input="emit('update:model-value')">
  </div>
</template>

<style scoped></style>
