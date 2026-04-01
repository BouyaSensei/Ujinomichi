export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userId = body.userId;
  const delivery_address = body.addresses;
  console.log(body);
  try {
    const response = await fetch(`${process.env.DATABASE_URL}/updateAddress`, {
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
