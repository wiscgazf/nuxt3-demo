import { defineEventHandler } from "#imports";

export default defineEventHandler((event) => {
  /*return {
    paperName: "试卷",
  };*/
  const res = { name: "AAA" };
  event.node.res.end(JSON.stringify(res));
});
