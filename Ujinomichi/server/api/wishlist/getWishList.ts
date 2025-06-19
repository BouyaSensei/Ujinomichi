export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userId = body.userId;
  const wishlist = await $fetch("http://localhost:3333/get-wishlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });

  return wishlist;
});
