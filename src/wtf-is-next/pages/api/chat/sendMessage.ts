import { chatHistory } from "./history";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  console.log("body", body);

  const name = body.username;
  const message = body.message;

  chatHistory.push({
    message,
    name,
    time: new Date().toLocaleTimeString(),
  });

  res.status(200).json({ chatHistory });
}
