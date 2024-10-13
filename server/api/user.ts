export default defineEventHandler((event) => {
  console.log("event-111111", event.context.token);
  return {
    name: "周飞",
    age: 28,
  };
});
