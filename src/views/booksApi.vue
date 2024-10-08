<template>
    <pre>{{ books }}</pre> <!-- 使用 pre 标签格式化显示 JSON -->
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { collection, query, getDocs } from 'firebase/firestore';
import db from '../firebase/init.js';

// 响应式数据
const books = ref({}); // 初始设为空对象

const fetchBooks = async () => {
    try {
        let q;
        q = query(
            collection(db, 'books'),
        );

        const querySnapshot = await getDocs(q);
        const booksObject = {}; // 用于存储书籍数据的对象
        querySnapshot.forEach((doc) => {
            booksObject[doc.id] = { ...doc.data() }; // 使用文档 ID 作为键
        });
        books.value = booksObject; // 将对象赋值给 books
    } catch (error) {
        console.error('Error fetching books: ', error);
    }
};

// 在组件挂载时获取数据
onMounted(() => {
    fetchBooks();
});
</script>