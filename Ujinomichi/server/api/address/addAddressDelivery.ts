export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userId = body.userId;
  const delivery_address = body.addresses;
  try {
    const response = await fetch(`${process.env.DATABASE_URL}/addAddress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, delivery_address }),
    });

    if (response.ok) {
    }
  } catch (error) {
    console.log(error);
  }
});
