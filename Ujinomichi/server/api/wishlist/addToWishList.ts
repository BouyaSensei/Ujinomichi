export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const productId = body.id;
    const userId = body.userId;

    const response = await fetch(`${process.env.DATABASE_URL}/addToWishList`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId }),
    });
    return response.status;
  } catch (error) {
    console.error(error);
  }
});
