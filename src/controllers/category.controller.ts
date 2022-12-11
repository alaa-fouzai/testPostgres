import { Request, Response } from "express";
import { categoryInput } from "../schema/category.schema";
import { addCategory, getAllCategory, getinsight } from "../service/category.service";


export async function createCategoryHandler(
  req: Request<{}, {}, categoryInput["body"]>,
  res: Response
) {

  const body = req.body;
  const category = await addCategory({ ...body });

  return res.send(category);
}
export async function getCategoryHandler(req: Request,
res: Response) {
  const categorys = await getAllCategory();

  return res.send(categorys);
}
export async function getInsightHandler(
  req: Request,
  res: Response
) {
  const body = req.body;
  console.log(req.body);
  try {
    const insight = await getinsight(req.body.start,req.body.finish);
    return res.send(insight);
  } catch(e) {
    console.log(e);
  return res.sendStatus(404);
  }
  
}
