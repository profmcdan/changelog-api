import prisma from '../config/db';

export const getUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  // Not performant -- modify schema so you can get this data at once from db.
  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);

  res.send({ success: true, data: { updates } });
};

export const getOneUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.send({ success: true, data: { update } });
};

export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id_belongsToId: {
        id: req.body.productId,
        belongsToId: req.user.id,
      },
    },
  });
  if (!product) {
    return res
      .status(401)
      .send({ success: false, detail: 'Product not found' });
  }

  const update = await prisma.update.create({
    data: req.body,
  });

  res.status(201).send({ success: true, data: { update } });
};

export const updateUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      product: true,
    },
  });

  if (!update || update.product.belongsToId !== req.user.id) {
    return res.status(401).send({ success: false, detail: 'Update not found' });
  }

  const updated = await prisma.update.update({
    where: {
      id: update.id,
    },
    data: req.body,
  });

  res.send({ success: true, data: { updated } });
};

export const deleteUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      product: true,
    },
  });

  if (!update || update.product.belongsToId !== req.user.id) {
    return res.status(401).send({ success: false, detail: 'Update not found' });
  }

  const deleted = await prisma.update.delete({
    where: {
      id: update.id,
    },
  });
  res.send({ success: true, data: { deleted } });
};
