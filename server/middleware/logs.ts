import { defineEventHandler, getRequestURL } from "#imports";

export default defineEventHandler((event) => {
  event.context.token = Date.now();
});
