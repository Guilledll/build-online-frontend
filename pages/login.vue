<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

definePageMeta({ middleware: 'guest' });

const { login: storeLogin, user, token } = useAuth();
const form = ref();

const schema = toTypedSchema(z.object({
  email: z.string({ required_error: "Email is required" }).email('Must be a valid email'),
  password: z.string().min(1, 'Password is required'),
}))

async function login(data) {
  const { error } = await storeLogin(data);

  if (error.value) {
    form.value.setErrors({ email: error.value.data.message });
    return;
  }

  return navigateTo('/contacts')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full gap-11 mt-60">
    <h3 class="font-redhat font-extrabold text-4xl">Welcome</h3>
    {{ user }} | {{ token }}
    <Form ref="form" :validation-schema="schema" @submit="login" class="flex flex-col gap-16 w-full max-w-lg">
      <div class="flex flex-col gap-3">

        <div class="flex flex-col gap-2">
          <label for="email" class="font-redhat font-bold">Email</label>
          <Field type="email" name="email" id="email" class="rounded-lg px-6 py-4 bg-pink-50" />
          <ErrorMessage name="email" class="text-sm text-red-500 font-semibold" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="email" class="font-redhat font-bold">Password</label>
          <Field type="password" name="password" id="password" class="rounded-lg px-6 py-4 bg-pink-50" />
          <ErrorMessage name="password" class="text-sm text-red-500 font-semibold" />
        </div>
      </div>

      <button type="submit"
        class="rounded-full font-sans font-medium bg-[#9378FF] text-white px-24 py-4 text-lg max-w-xs mx-auto hover:bg-violet-400">
        LOGIN
      </button>
    </Form>
  </div>
</template>

<style scoped></style>
