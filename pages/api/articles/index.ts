import { NextApiRequest, NextApiResponse } from "next";
import { dummyArticleData } from "../../../utils/dummy-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(dummyArticleData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(dummyArticleData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
