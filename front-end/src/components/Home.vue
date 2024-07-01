<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-5xl font-bold mb-4">Home Page</h1>
      <p class="text-2xl mb-4">Welcome to the Home page, {{ name }}</p>
      <button @click="logout" class="px-4 py-2 bg-blue-500 text-white rounded">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUser } from '../api/user';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'vue-router';

const name = ref<string>('');
const router = useRouter();

const decodeAccessToken = (): number | null => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    const decodedToken: any = jwtDecode(accessToken);
    return decodedToken.userId;
  }
  return null;
};

const logout = () => {
  localStorage.removeItem('accessToken');
  router.push('/login');
};

onMounted(async () => {
  const userId = decodeAccessToken();
  if (userId) {
    try {
      const user = await getUser(userId);
      name.value = user.name;
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  }
});
</script>
