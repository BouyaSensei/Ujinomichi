import jwt from "jsonwebtoken";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const data = jwt.verify(body.token, process.env.JWT_SECRET as string);
  const userData = {
    userId: data.userId || null,
    email: body.email || null,
    password: body.password || null,
    currentPassword: body.currentPassword || null,
    phone_number: body.phone || null,
    delivery_address: body.delivery_address || null,
  };

  try {
    await fetch("http://localhost:3333/modify-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userData }),
    });
  } catch (error) {
    console.log(error);
    return createError({ statusCode: 500, message: "Internal Server Error" });
  }

  /*await fetch("http://localhost:3333/modify-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });*/
});
