import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "../schema/influencer.schema";
import { createUser, getUser } from "../service/influencer.service";

export async function createUserHandler(
  req: Request<{},{},CreateUserInput["body"]>,
  res: Response
) {
  try {
    const body = req.body;
    console.log(req.body);
    const user = await createUser({ ...body } );
    return res.send(user);
  } catch (e: any) {
    return res.status(409).send(e.message);
  }
}

export async function getInfluencerHandler(req: Request,
res: Response){
  try {
    const body = req.body;
    console.log(req.body);
    const user = await getUser();
    return res.send(user);
  } catch (e: any) {
    return res.status(409).send(e.message);
  }
}