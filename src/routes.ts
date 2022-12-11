import { Express, Request, Response } from "express";
import { createCategoryHandler, getCategoryHandler, getInsightHandler } from "./controllers/category.controller";
import { createColorHandler } from "./controllers/color.controller";
import { createProductHandler, getPerformanceHandler } from "./controllers/conversion.controller";
import { createUserHandler, getInfluencerHandler } from "./controllers/influencer.controller";

import validateResource from "./middleware/validateResource";
import { categorySchema } from "./schema/category.schema";
import { colorSchema } from "./schema/color.schema";
import { conversionsSchema } from "./schema/conversion.schema";
import { createUserSchema } from "./schema/influencer.schema";


function routes(app: Express) {
  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
     /**
   * @openapi
   * '/api/influencer':
   *  post:
   *     tags:
   *     - influencer
   *     summary: Register a new influencer
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateInfluencerInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post("/api/influencer", validateResource(createUserSchema), createUserHandler);
   /**
   * @openapi
   * '/api/influencer':
   *  get:
   *     tags:
   *     - influencer
   *     summary: get All Influencers
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/getUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.get("/api/influencer",getInfluencerHandler);

  app.post("/api/color",validateResource(colorSchema),createColorHandler);
     /**
   * @openapi
   * '/api/conversion':
   *  post:
   *     tags:
   *     - conversion
   *     summary: Register a new conversion
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateConversionInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateConversionResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post("/api/conversion",validateResource(conversionsSchema),createProductHandler);
   /**
   * @openapi
   * '/api/category':
   *  post:
   *     tags:
   *     - category
   *     summary: Register a new category
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateCategoryInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateCategoryResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post("/api/category",validateResource(categorySchema),createCategoryHandler);
   /**
   * @openapi
   * '/api/category':
   *  get:
   *     tags:
   *     - category
   *     summary: get All category
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/getCategoryResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.get("/api/category",getCategoryHandler);
        /**
   * @openapi
   * '/api/performance':
   *  post:
   *     tags:
   *     - Performance
   *     summary: get informations about Performance
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              properties:
   *                start:
   *                  type: string
   *                  default: 2021-12-02
   *                finish:
   *                  type: string
   *                  default: 2022-12-30
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                totalSales:
   *                  type: number
   *                Sales:
   *                  type: number
   *                AverageCart:
   *                  type: number
   *                CountryNumber:
   *                  type: number
   *                ProductSoldNumber:
   *                  type: number
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post("/api/performance",getPerformanceHandler);
       /**
   * @openapi
   * '/api/insight':
   *  post:
   *     tags:
   *     - Insight
   *     summary: get Insight informations
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              type: object
   *              properties:
   *                start:
   *                  type: string
   *                  default: 2021-12-02
   *                finish:
   *                  type: string
   *                  default: 2022-12-04
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                totalSales:
   *                  type: object
   *                popularCategory:
   *                  type: object
   *                popularMoment:
   *                  type: object
   *                popularcolor:
   *                  type: object
   *                popularcountry:
   *                  type: object
   *                popularinfluencer:
   *                  type: object
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post("/api/insight",getInsightHandler);
}


export default routes;