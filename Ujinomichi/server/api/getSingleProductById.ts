export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  if (!id) {
    throw createError({ statusCode: 404, message: "Product not found" });
  }
  const product = await $fetch(`http://localhost:3333/get-product/${id}`);

  return product;
});
