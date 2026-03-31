export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const userId = body.userId;

  fetch(`${process.env.DATABASE_URL}/removeToBasket`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });
});
