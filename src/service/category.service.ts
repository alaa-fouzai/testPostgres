import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import db from "../models";
const { Sequelize, Op } = require("sequelize");
import { CategoryAttributes } from "../models/category";


export async function addCategory(input: CategoryAttributes) {
    try {
      const result = await db.Category.create(input);
      return result;
    } catch (e:any) {
        throw new Error(e);
    }
  }

export async function getAllCategory() {
  try {
    const result = await db.Category.findAll();
    return result;
  } catch (e:any) {
      throw new Error(e);
  }
}
export async function getinsight(start:string,finish:Date) {
  try {
    /*****************best device */
    var device = await db.Influencer.findAll({
      attributes: [
        [Sequelize.fn('max', Sequelize.fn('count',Sequelize.col('device'))), 'counts' ]
      ],
      where: {
        // createdAt < [timestamp] AND createdAt > [timestamp]
        createdAt: {
          [Op.lt]: new Date(finish),
          [Op.gt]: new Date(start)
        }, 
    }
    });
    var max = 0;
    var dev = "";
    device.forEach(function (value:any) {
      if (value.count >max ) {
        max=value.count;
        dev=value._id;
      }
  });


    const modal = {
        "totalSales":{"device":dev,"number":max},
        /*"popularCategory":{"popularCat":cat,"number":maxcat},
        "popularMoment":{"popularMoment":mom,"number":maxmoment},
        "popularcolor":{"popularColor":col,"number":maxcolor},
        "popularcountry":{"popularCountry":ctr,"number":maxcountry},
        "popularinfluencer":inf,*/
    }
    return modal;
} catch (e:any) {
    throw new Error(e);
}
}