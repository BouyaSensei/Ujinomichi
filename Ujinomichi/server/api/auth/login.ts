import jwt from "jsonwebtoken";
import { defineEventHandler, getCookie, setCookie } from "h3";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email = body.email;
  const password = body.password;
  try {
    const res = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.status === 200) {
      const data = await res.json();
      const token = jwt.sign({ userId: data.userId }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      setCookie(event, "token", token, { httpOnly: false, secure: false });

      event.node.res.statusCode = 200;
      return { message: "Login successful", token: token };
    } else {
      event.node.res.statusCode = res.status;
      return { message: "Login failed" };
    }
  } catch (error) {
    event.node.res.statusCode = 500;
    return { message: "Internal Server Error" };
  }
});
