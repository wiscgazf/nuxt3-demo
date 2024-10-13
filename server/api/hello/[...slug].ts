import { createRouter, defineEventHandler, useBase } from "h3";

const router = createRouter();

router.get(
  "/test",
  defineEventHandler(() => "Hello World"),
);

router.get(
  "/testV2",
  defineEventHandler(() => "Hello World V2 ha ha ha"),
);

export default useBase("/api/hello", router.handler);
