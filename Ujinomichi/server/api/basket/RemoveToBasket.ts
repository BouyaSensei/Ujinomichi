export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const userId = body.userId;

  fetch("http://localhost:3333/removeToBasket", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });
});
