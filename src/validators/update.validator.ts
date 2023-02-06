import {body} from "express-validator";

export const updateCreateValidator = [
    body('title').isString().withMessage('title is required'),
    body('body').isString().withMessage('body is required'),
    body('productId').isString().withMessage('productId is required'),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('status').optional().isString(),
    body('version').optional().isString()
]

export const updateUpdateValidator = [
    body('title').optional().isString(),
    body('body').optional().isString(),
    body('productId').optional().isString(),
    body('status').optional().isString(),
    body('status').optional().isString().isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('version').optional().isString()
]

export const updatePointCreateValidator = [
    body('name').isString().withMessage('name is required'),
    body('description').isString().withMessage('description is required'),
    body('updateId').isString().withMessage('updateId is required'),
]

export const updatePointUpdateValidator = [
    body('name').optional(),
    body('description').optional(),
    body('updateId').optional(),
]
