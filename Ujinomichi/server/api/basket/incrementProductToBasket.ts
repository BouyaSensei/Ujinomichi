export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // console.log(body);
  const userId = body.userId;
  const productId = body.productId;
  await fetch("http://localhost:3333/incrementProduct", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, productId }),
  });
});
