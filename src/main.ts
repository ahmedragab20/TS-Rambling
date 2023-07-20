import catchLib from "ar-catch";

const { $catch, useCache } = catchLib;
declare global {
  interface Window {
    abFetch: any;
  }
}

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

const button = document.querySelector("#trigger")!;

button.addEventListener("click", async () => {
  const res = await useCatch("products/search", {
    customOptions: {
      useWithBaseURL: true,
    },
    body: {
      q: "iphone",
    },
  });

  console.log({ res });
});

// Function overloads
type compatible = string | number;
function merge(a: string, b: string): string;
function merge(a: number, b: number): number;
function merge(a: compatible, b: compatible): compatible {
  if (typeof a === "string" || typeof b === "string") {
    return `${a} ${b}`;
  }

  return a + b;
}

console.log(merge("Hello", "World").toUpperCase());
console.log(merge(1, 2).toFixed(3));

// const input = document.getElementById("input") as HTMLInputElement;

// input.addEventListener("input", (event) => {
//   const i = event.currentTarget as HTMLInputElement;
//   console.log(i.value);
// });

// // index properties
// interface ErrorContainer {
//   source: string;
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   source: "form",
//   email: "Not a valid email",
// };

// // Type casting
// const inputValue: any = "hello guys";

// console.log((inputValue as string).toUpperCase());
