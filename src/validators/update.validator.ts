import {body} from "express-validator";

export const updateCreateValidator = [
    body('title').isString().withMessage('title is required'),
    body('body').isString().withMessage('body is required'),
    body('productId').isString().withMessage('productId is required'),
    body('status').optional,
    body('version').optional
]

export const updateUpdateValidator = [
    body('title').isString().optional,
    body('body').isString().optional,
    body('productId').isString().optional,
    body('status').optional,
    body('version').optional
]

export const updatePointCreateValidator = [
    body('name').isString().withMessage('name is required'),
    body('description').isString().withMessage('description is required'),
    body('updateId').isString().withMessage('updateId is required'),
]

export const updatePointUpdateValidator = [
    body('name').isString().optional,
    body('description').isString().optional,
    body('updateId').isString().optional,
]
