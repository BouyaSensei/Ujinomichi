export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // console.log(body);
  const userId = body.userId;
  const productId = body.id;
  const productQuantity = body.productQuantity;

  fetch("http://localhost:3333/addToBasket", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, productId, productQuantity }),
  });
});
