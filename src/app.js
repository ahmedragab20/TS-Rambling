import catchLib from "ar-catch";

const { $catch, useCache } = catchLib;
const useCatch = $catch({
  baseURL: "https://dummyjson.com/",
  customOptions: {
    headers: {
      "Content-Type": "application/json",
    },
  },
});

(async () => {
  const res = await useCatch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res);

  const cache = useCache("RELOAD");

  cache.set("key", "value");
  cache.isCached("key");

  console.log(cache.getCachedKeys());
  console.log(cache.get("key"));
  cache.clearAllCaches();

  console.log(cache.getCachedKeys());
  console.log(cache.get("key"));
})();

const button = document.querySelector("#trigger");

button.addEventListener("click", async () => {
  const res = await useCatch("products/search", {
    customOptions: {
      cache: "RELOAD",
      useWithBaseURL: true,
    },
    body: {
      q: "iphone",
    },
  });

  console.log({ res });
});
