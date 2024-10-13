<script setup lang="ts">
const counter = useCounter();
const users = useUsers();
const paper = usePaper();

const school = useState("school", () => "金榜苑中学");

const { data } = useFetch("/api/todo");

const { data: paperInfo } = useFetch("/paper/info");

const { data: nestedRouter } = useFetch("/api/hello/test");

const { data: nestedRouterV2 } = useFetch("/api/hello/testV2");

const { data: params } = useFetch("/api/demo/aaa/bbb", {
  params: {
    name: "111",
    age: 18,
  },
});

const { data: user } = await useAsyncData("user", () => $fetch("/api/user"));

console.log("paramsparams", params);
onMounted(() => {
  paper.fetch();
});
</script>

<template>
  <div>
    <h1>首页</h1>
    <el-button type="primary">跳转关于页面</el-button>
    <NuxtLink to="/about">跳转关于页面</NuxtLink>
    <p>api result</p>
    <el-card>
      {{ data }}
    </el-card>
    <el-card>
      {{ user }}
    </el-card>
    <div class="bg-yellow">{{ counter }}</div>
    <div class="bg-yellow">{{ users }}</div>
    <div class="bg-yellow">{{ school }}</div>
    <div class="bg-yellow">{{ paperInfo.name }}</div>
    <div class="bg-yellow">{{ paper.name }}--- {{ paper.description }}</div>
    <div class="bg-yellow">nestedRouter---: {{ nestedRouter }}</div>
    <div class="bg-yellow">nestedRouterV2---: {{ nestedRouterV2 }}</div>
  </div>
</template>

<style scoped lang="scss">
.bg-yellow {
  background-color: chartreuse;
  padding: 20px;
  font-size: 16px;
}
</style>
