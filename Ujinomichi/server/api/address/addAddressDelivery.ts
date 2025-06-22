export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userId = body.userId;
  const delivery_address = body.addresses;
  console.log(body.addresses);
  try {
    const response = await fetch("http://localhost:3333/addAddress", {
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
