<template>
    <pre>{{ count }}</pre>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const count = ref(null);
const error = ref(null);

const getBookCount = async () => {
    try {
        const response = await axios.get('https://countbooks-c5cjgqv6fq-uc.a.run.app');
        count.value = response.data;
        error.value = null;
    } catch (err) {
        console.error('Error fetching book count:', err);
        error.value = err;
        count.value = null;
    }
};

onMounted(()=>{
    getBookCount();
})
</script>