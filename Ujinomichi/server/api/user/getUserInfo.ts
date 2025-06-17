import jwt from "jsonwebtoken";
export default defineEventHandler(async (event) => {
  try {
    const auth = getHeader(event, "authorization");
    const token = auth?.split(" ")[1];
    const data = jwt.verify(token, process.env.JWT_SECRET as string);

    const userId = data.userId;
    const response = await fetch("http://localhost:3333/get-user-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    return response;
  } catch (error) {
    return error;
    console.error(error);
  }
});
