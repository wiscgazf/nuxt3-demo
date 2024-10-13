import { defineNuxtRouteMiddleware } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  /*console.log("tooo", to.path);
  if (to.path == "/about") {
    return abortNavigation();
  }*/
  // return navigateTo(to.path);
  return;
});
