export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = event.context.params?.id;

  if (body && !JSON.parse(body).product) {
    const product = await $fetch(
      `http://localhost:3333/get-product/${JSON.parse(body)}`
    );
    return product;
  }
  if (JSON.parse(body).product) {
    const product = await $fetch(
      `http://localhost:3333/get-product/${JSON.parse(body).product}`
    );
    return product;
  }
  if (!id) {
    throw createError({ statusCode: 404, message: "Product not found" });
  }
  const product = await $fetch(`http://localhost:3333/get-product/${id}`);

  return product;
});
