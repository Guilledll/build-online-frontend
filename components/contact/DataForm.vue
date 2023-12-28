<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const props = defineProps({ data: { type: Object, required: true } });
const emit = defineEmits(['save']);

const form = ref(props.data);
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const schema = toTypedSchema(z.object({
  name: z.string().min(2, "Name is required"),
  title: z.string().min(2, 'Title is Required'),
  picture: z.string().url(),
  address: z.string().min(5, 'Address is Required'),
  phone: z.string().regex(phoneRegex, "Invalid Phone number"),
  email: z.string().email('Must be a valid email'),
}))

</script>

<template>
  <Form @submit="(e) => $emit('save', e)" class="mb-5" ref="form" :initial-values="form" :validation-schema="schema">
    <div class="grid grid-cols-1 grid-flow-row gap-x-20 sm:grid-cols-2">
      <div class="grid grid-cols-1 gap-y-3">
        <div class="flex flex-col gap-2">
          <label for="name" class="font-redhat font-bold text-xl">Name</label>
          <Field type="text" name="name" id="name"
            class="rounded-lg px-6 py-4 bg-pink-50  placeholder:text-build text-build" />
          <ErrorMessage name="name" class="text-sm text-red-500 font-semibold" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="title" class="font-redhat font-bold text-xl">Title</label>
          <Field type="text" name="title" id="title"
            class="rounded-lg px-6 py-4 bg-pink-50  placeholder:text-build text-build" />
          <ErrorMessage name="title" class="text-sm text-red-500 font-semibold" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="picture" class="font-redhat font-bold text-xl">Profile Picture</label>
          <Field type="text" name="picture" id="picture"
            class="rounded-lg px-6 py-4 bg-pink-50  placeholder:text-build text-build" />
          <ErrorMessage name="picture" class="text-sm text-red-500 font-semibold" />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-y-3">
        <div class="flex flex-col gap-2">
          <label for="address" class="font-redhat font-bold text-xl">Address</label>
          <Field type="text" name="address" id="address"
            class="rounded-lg px-6 py-4 bg-pink-50  placeholder:text-build text-build" />
          <ErrorMessage name="address" class="text-sm text-red-500 font-semibold" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="phone" class="font-redhat font-bold text-xl">Phone</label>
          <Field type="text" name="phone" id="phone"
            class="rounded-lg px-6 py-4 bg-pink-50  placeholder:text-build text-build" />
          <ErrorMessage name="phone" class="text-sm text-red-500 font-semibold" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="email" class="font-redhat font-bold text-xl">Email</label>
          <Field type="text" name="email" id="email"
            class="rounded-lg px-6 py-4 bg-pink-50  placeholder:text-build text-build" />
          <ErrorMessage name="email" class="text-sm text-red-500 font-semibold" />
        </div>
      </div>
    </div>
    <div class="flex gap-4 sm:max-w-xs mx-auto mt-10">
      <ActionButton :to="`/contacts/${$route.params.id}`" class="flex justify-center w-full">
        CANCEL
      </ActionButton>
      <ActionButton type="submit" class="flex justify-center w-full">
        SAVE
      </ActionButton>
    </div>
  </Form>
</template>

<style scoped></style>
