export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // console.log(body);
  const userId = body.userId;
  const productId = body.productId;
  await fetch(`${process.env.DATABASE_URL}/removeProductToBasket`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, productId }),
  });
});
