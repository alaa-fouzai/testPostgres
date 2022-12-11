import { date, number, object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateCategoryInput:
 *      type: object
 *      required:
 *        - productId
 *        - CategoryName
 *      properties:
 *        productId:
 *          type: string
 *          default: 1
 *        CategoryName:
 *          type: string
 *          default: Jeans
 *    CreateCategoryResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        productId:
 *          type: string
 *        CategoryName:
 *          type: string
 *        updatedAt:
 *          type: string
 *        createdAt:
 *          type: number
 *    getCategoryResponse:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *          CategoryName:
 *            type: string
 *          productId:
 *            type: integer
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 */
export const categorySchema = object({
  body: object({
    productId: string({
      required_error: "ProductId is required",
    }),
    CategoryName: string({
        required_error: "category Name is required",
      }),
    })
});


export type categoryInput = TypeOf<typeof categorySchema>;