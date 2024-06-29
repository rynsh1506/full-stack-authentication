<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-6">Login Page</h1>
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
            Sign In
          </button>
        </div>
      </form>
      <div class="text-center">
        <p class="text-gray-700">
          Don't have an account?
          <router-link to="/register" class="text-blue-500 hover:text-blue-700">Register</router-link>
        </p>
      </div>
      <div v-if="errorMessage" class="text-red-600 mt-4 text-center">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { loginUser } from '../api/auth.ts';
import router from '../router';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
  try {
    const response = await loginUser(username.value, password.value);
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    console.log('Login successful:', response);
    router.push('/');
  } catch (error) {
    errorMessage.value = error as string;
  }
};
</script>
