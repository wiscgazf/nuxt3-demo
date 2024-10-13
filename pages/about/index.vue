<script setup lang="ts">
const counter = useCounter();
const users = useUsers();

definePageMeta({
  middleware: ["auth-validator"],
});

const school = useState("school", () => "金榜苑中学");

const randomHandle = () => {
  users.value.age = Math.floor(Math.random() * users.value.age) + 10;
  school.value = school.value + users.value.age;
};

const clearAll = () => {
  clearNuxtState("school");
};
</script>

<template>
  <div>
    <h2>关于</h2>
    <button @click="counter++">counter{{ counter }}</button>
    <button @click="randomHandle">随机字符年龄</button>
    <button @click="clearAll">清空所有useState</button>
    <h3>{{ users }}</h3>
    <h3>{{ school }}</h3>
  </div>
</template>

<style scoped lang="scss"></style>
