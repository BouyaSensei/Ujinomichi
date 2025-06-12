import jwt from "jsonwebtoken";
export default defineEventHandler(async (event) => {
  const auth = getHeader(event, "authorization");
  const token = auth?.split(" ")[1];
  const data = jwt.verify(token, process.env.JWT_SECRET as string);
  console.log(data);
  /* fetch("http://localhost:3333/get-user-info", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });*/
});
