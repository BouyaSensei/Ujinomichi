import jwt from "jsonwebtoken";
//import { defineEventHandler, getCookie } from "h3";

export default defineEventHandler(async (event) => {
  const auth = getHeader(event, "authorization");
  const token = auth?.split(" ")[1];
  if (!token) {
    return { message: "Unauthorized" };
  }
  try {
    if (token) {
      const data = jwt.verify(token, process.env.JWT_SECRET as string);

      return { user: data };
    }
  } catch (error) {
    console.log(error);
    setCookie(event, "token", "", {
      maxAge: 0,
      path: "/",
    });
    return { message: "Unauthorized" };
  }
});
