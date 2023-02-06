import prisma from "../config/db";

export const getProducts = async (req, res) => {
    // const products = await prisma.product.findMany({
    //     where: {belongsToId: req.user.id},
    // });
    // res.send({success: true, data: {products}})

    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    })
    res.send({success: true, data: {products: user.products}})
}

export const getProductById = async (req, res) => {
    const productId = req.params.id
    const product = await prisma.product.findFirst({
        where: {
            id: productId,
            belongsToId: req.user.id
        }
    });

    if(!product){
        res.status(404).send({success: false, detail: 'Product not found'});
        return;
    }

    res.send({success: true, data: {product}});
}


export const createProduct = async (req, res) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    });

    res.status(201).send({success: true, data: {product}});
}

export const updateProduct = async (req, res) => {
    const updated = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        },
        data: {
            name: req.body.name
        }
    });
    res.send({success: true, data: {updated}});
}

export const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        }
    });
    res.send({success: true, data: {deleted}});
}
