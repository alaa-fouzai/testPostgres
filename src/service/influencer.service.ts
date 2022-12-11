import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import db from "../models";
import { InfluencerInput } from "../models/influencer";

export async function createUser(input: InfluencerInput) {
  try {
    console.log("user created",input);
    const user =  await db.Influencer.create(input);

    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
}
export async function getUser(){
  try {
    var user = await db.Influencer.findAll();
    var users=[]
    users.push(user.map(function(n:any){return omit(n.toJSON(),"password");}));
    return users[0];
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validatePassword({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const user = await db.Influencer.findOne({ email });
  
    if (!user) {
      return false;
    }
  
    const isValid = await user.comparePassword(password);
  
    if (!isValid) return false;
  
    return omit(user.toJSON(), "password");
  }