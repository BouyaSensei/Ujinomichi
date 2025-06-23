import { defineEventHandler } from "h3";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email = body.email;
  const password = body.password;
  try {
    const res = await fetch("http://localhost:3333/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    console.log(res.status);
    if (res.status === 201) {
      return { message: "register successful" };
    } else {
      event.node.res.statusCode = res.status;
      return { message: "register failed" };
    }
  } catch (error) {
    event.node.res.statusCode = 500;
    return { message: "Internal Server Error" };
  }
});
