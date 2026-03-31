export default defineEventHandler(async (event) => {
  const product = await $fetch(`${process.env.DATABASE_URL}/get-last-products`);

  return product;
});
