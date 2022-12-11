import { Request, Response } from "express";
import { ColorInput } from "../schema/color.schema";
import {
  createColor
} from "../service/color.service";

export async function createColorHandler(
  req: Request<{}, {}, ColorInput["body"]>,
  res: Response
) {

  const body = req.body;
  console.log(req.body);

  const color = await createColor({ ...body });

  return res.send(color);
}