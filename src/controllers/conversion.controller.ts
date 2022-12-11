import { Request, Response } from "express";
import { ConversionsInput } from "../schema/conversion.schema";
import {
  createconversion, getGlobalPerformanceConversion,
} from "../service/conversion.service";

export async function createProductHandler(
  req: Request<{}, {}, ConversionsInput["body"]>,
  res: Response
) {

  const body = req.body;
  console.log(req.body);

  const product = await createconversion({ ...body });

  return res.send(product);
}
export async function getPerformanceHandler(req: Request,
  res: Response) {
    console.log(req.body.start);
    console.log(req.body.finish);
    const categorys = await getGlobalPerformanceConversion(req.body.start,req.body.finish);
    return res.send(categorys);
}
