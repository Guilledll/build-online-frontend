<script setup>
defineProps({ modelValue: { type: String } });
defineEmits(['update:model-value']);
</script>

<template>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center">
      <label for="contact" class="sr-only">Contact</label>
      <div
        class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none"
          class="pointer-events-none absolute right-3 top-0 w-6 h-full text-gray-400 pr-2">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M14.4287 14.1604C15.5372 12.6689 16.2 10.777 16.2 8.71847C16.2 3.90339 12.5735 0 8.1 0C3.62649 0 0 3.90339 0 8.71847C0 13.5336 3.62649 17.4369 8.1 17.4369C10.0125 17.4369 11.7702 16.7235 13.1559 15.5304L16.4636 19.0907C16.8151 19.469 17.3849 19.469 17.7364 19.0907C18.0879 18.7123 18.0879 18.099 17.7364 17.7207L14.4287 14.1604ZM12.6372 13.4229C13.7288 12.2036 14.4 10.5454 14.4 8.71847C14.4 4.97341 11.5794 1.93744 8.1 1.93744C4.62061 1.93744 1.8 4.97341 1.8 8.71847C1.8 12.4635 4.62061 15.4995 8.1 15.4995C9.79735 15.4995 11.3379 14.777 12.4707 13.6022C12.4944 13.569 12.5204 13.5371 12.5486 13.5067C12.5768 13.4764 12.6064 13.4484 12.6372 13.4229Z"
            fill="#99879D" />
        </svg>
      </div>
    </div>
    <input type="text" name="contact" id="contact" @input="$emit('update:model-value', $event.target.value)"
      class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-800 shadow-sm">
  </div>
</template>

<style scoped></style>
