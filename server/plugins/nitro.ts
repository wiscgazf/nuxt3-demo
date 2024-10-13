import { defineNitroPlugin } from "#imports";

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook("render:response", async (event, body) => {
    // Will run when nitro is being closed
    console.log("render:response");
  });
});
