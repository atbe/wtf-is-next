// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export const nameShoutMap: { [key: string]: number } = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ shoutouts: nameShoutMap });
}
