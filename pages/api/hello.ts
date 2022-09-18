// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const secretDate = "2021-09-01";

let counter = 0;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  counter += 1;

  res.status(200).json({ name: `John Doe ${counter}` });
}
