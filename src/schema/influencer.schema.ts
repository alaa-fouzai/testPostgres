import { object, string, TypeOf } from "zod";
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateInfluencerInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        device:
 *          type: string
 *          default: mobile
 *        name:
 *          type: string
 *          default: Jane Doe
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *        device:
 *          type: string
 *    getUserResponse:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *          email:
 *            type: string
 *          name:
 *            type: string
 *          device:
 *            type: string
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 */
export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    device: string({
      required_error: "device is required",
    }),
    password: string({
      required_error: "password is required",
    }).min(6, "Password too short - should be 6 chars minimum"),
    passwordConfirmation: string({
      required_error: "password Confirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});
export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;