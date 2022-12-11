import { date, number, object, string, TypeOf } from "zod";
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateConversionInput:
 *      type: object
 *      required:
 *        - Name
 *        - Device
 *        - Sellerid
 *        - ProductId
 *        - Quantity
 *        - ProductName
 *        - ProductPrice
 *        - image
 *        - Country
 *      properties:
 *        Name:
 *          type: string
 *          default: conversion 8
 *        Device:
 *          type: string
 *          default: android
 *        Sellerid:
 *          type: string
 *          default: 638bac7f65685546fa467a12
 *        ProductId:
 *          type: string
 *          default: 2
 *        Quantity:
 *          type: number
 *          default: 2
 *        ProductName:
 *          type: string
 *          default: jeans
 *        ProductPrice:
 *          type: number
 *          default: 2
 *        image:
 *          type: string
 *          default: imageURL
 *        Country:
 *          type: string
 *          default: france
 *    CreateConversionResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        Name:
 *          type: string
 *        Device:
 *          type: string
 *        Sellerid:
 *          type: string
 *        ProductId:
 *          type: string
 *        Quantity:
 *          type: number
 *        ProductName:
 *          type: string
 *        ProductPrice:
 *          type: number
 *        image:
 *          type: string
 *        Country:
 *          type: string
 *        updatedAt:
 *          type: string
 *        createdAt:
 *          type: number
 */

export const conversionsSchema = object({
  body: object({
    Name: string({
    required_error: "Name is required",
    }),
    Quantity: number({
    required_error: "sellerid is required",
    }),
    Device: string({
    required_error: "device is required",
    }),
    Sellerid: string({
    required_error: "sellerid is required",
    }),
    ProductId: string({
    required_error: "productId is required",
    }),
    ProductName: string({
    required_error: "Name is required",
    }),
    ProductPrice: number({
    required_error: "Price is required",
    }),
    image: string({
    required_error: "image is required",
    }),
    Country:string({
    required_error: "country is required",
    }),

    })
});


export type ConversionsInput = TypeOf<typeof conversionsSchema>;