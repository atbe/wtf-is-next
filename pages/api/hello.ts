// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const secretDate = "2021-09-01";

let counter = 0;

const nameShoutMap: { [key: string]: number } = {};

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
