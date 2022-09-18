// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { nameShoutMap } from "./results";

let counter = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  console.log("body", body);

  const name = body.name;

  if (nameShoutMap[name]) {
    nameShoutMap[name] += 1;
  } else {
    nameShoutMap[name] = 1;
  }

  counter += 1;

  res.status(200).json({ shoutouts: nameShoutMap });
}
