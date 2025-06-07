export default defineEventHandler(async (event) => {
  const product = await $fetch("http://localhost:3333/get-last-products");

  return product;
});
