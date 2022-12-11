import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import db from "../models";
const { Sequelize, Op } = require("sequelize");
import { ConversionAttributes } from "../models/conversion";

export async function createconversion(input: ConversionAttributes) {
    try {
      const result = await db.Conversion.create(input);
      return result;
    } catch (e:any) {
        throw new Error(e);
    }
}
export async function getGlobalPerformanceConversion(start:string,finish:Date) {
    try {
      
        var chiffre = await db.Conversion.findAndCountAll({
          where: {

              createdAt: {
                [Op.lt]: new Date(finish),
                [Op.gt]: new Date(start)
              }
            
            // createdAt < [timestamp] AND createdAt > [timestamp]
          }
        });
        /******  sum quantity */
        var sum = await db.Conversion.findAll({ attributes: [
          [Sequelize.fn('sum', Sequelize.col('Quantity')), 'total_amount'],
        ]
        ,
          where: {
              // createdAt < [timestamp] AND createdAt > [timestamp]
              createdAt: {
                [Op.lt]: new Date(finish),
                [Op.gt]: new Date(start)
              }, 
          }
        });
        /****** Average Cart */
        var AverageCart = await db.Conversion.findAll({ attributes: [
          //Sequelize.literal('(sum("Quantity" * "ProductPrice")/count("id")) AS average')
          //Sequelize.fn("SUM",(Sequelize.col('Quantity') ,Sequelize.col('ProductPrice')))/Sequelize.fn("COUNT", Sequelize.col("id"))
          [db.sequelize.literal('SUM("Quantity" * "ProductPrice")/count("id")'), 'result'],
        ]
        ,
          where: {
              // createdAt < [timestamp] AND createdAt > [timestamp]
              createdAt: {
                [Op.lt]: new Date(finish),
                [Op.gt]: new Date(start)
              }, 
          }
        });
        /****** CountryNumber */
        var CountryNumber = await db.Conversion.findAndCountAll({ attributes: [
        [Sequelize.col('Country'),'country'],
          
        ],
        distinct: true
        ,
          where: {
              // createdAt < [timestamp] AND createdAt > [timestamp]
              createdAt: {
                [Op.lt]: new Date(finish),
                [Op.gt]: new Date(start)
              }, 
          }
        });
         /****** ProductSoldNumber */
         var ProductSoldNumber = await db.Conversion.findAll({ attributes: [
          [db.sequelize.literal('SUM("Quantity")'), 'result'],
            
          ],
            where: {
                // createdAt < [timestamp] AND createdAt > [timestamp]
                createdAt: {
                  [Op.lt]: new Date(finish),
                  [Op.gt]: new Date(start)
                }, 
            }
          });
        console.log(CountryNumber);
        console.log("here");
        const modal = {
            "totalSales":parseInt(chiffre["count"],10),
            "Sales":parseInt(sum[0].dataValues.total_amount,10),
            "AverageCart":parseInt(AverageCart[0].dataValues.result,10),
            "CountryNumber":parseInt(CountryNumber.count,10),
            "ProductSoldNumber":parseInt(ProductSoldNumber[0].dataValues.result,10),
        }
        return modal;
    } catch (e:any) {
        throw new Error(e);
    }
  }