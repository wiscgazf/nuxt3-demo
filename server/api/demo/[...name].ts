export default defineEventHandler((event) => {
  const name = getRouterParam(event, "name");
  console.log("event.context.params---", event.context.params, name);
  console.log("query---", getQuery(event));
  return `Hello, ${name}!`;
});
