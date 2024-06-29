<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-6">Register Page</h1>
      <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input v-model="username" id="username" type="text" placeholder="Username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input v-model="password" id="password" type="password" placeholder="Password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="flex items-center justify-between">
          <button type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Register
          </button>
        </div>
      </form>
      <div class="text-center mt-4">
        <p class="text-gray-700">
          Already have an account?
          <router-link to="/login" class="text-blue-500 hover:text-blue-700">Login</router-link>
        </p>
      </div>
      <div v-if="errorMessage" class="text-red-600 mt-4 text-center">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="text-green-500 mt-4 text-center">
        {{ successMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerUser } from '../api/auth';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const router = useRouter();

const handleSubmit = async () => {
  try {
    const response = await registerUser(username.value, password.value);
    console.log('Registration successful:', response);
    successMessage.value = 'Account created successfully!';
    errorMessage.value = '';
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  } catch (error) {
    console.error('Registration failed:', error);
    errorMessage.value = error as string
  }
};
</script>
