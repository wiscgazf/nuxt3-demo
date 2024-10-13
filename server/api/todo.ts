export default defineEventHandler((event) => {
  console.log("event-2222", event.context.token, useRuntimeConfig());
  return {
    hello: "world",
  };
});
