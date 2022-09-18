// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const spawnTime = new Date().getTime();

export interface Message {
  name: string;
  message: string;
  time: string;
}

export const chatHistory: Message[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    chatHistory: chatHistory.sort((a, b) => {
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    }),
    spawnTime,
  });
}
