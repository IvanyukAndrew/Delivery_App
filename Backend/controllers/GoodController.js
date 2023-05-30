import GoodModel from "../models/Good.js";

export const create = async (req, res) => {
  try {
    const doc = new GoodModel({
      imageUrl: req.body.imageUrl,
      name: req.body.name,
      shop: req.body.shop,
      rate: req.body.rate,
    });

    const good = await doc.save();

    res.json(good);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вадалося создати",
    });
  }
};

export const getSort = async (req, res) => {
  try {
    const store = req.params.shop;

    const goods = await GoodModel.find({ shop: store }).exec();

    res.json(goods);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вдалося получити пости",
    });
  }
};

export const getAll = async (req, res) => {
  try {

    const goods = await GoodModel.find().exec();

    res.json(goods);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вдалося получити пости",
    });
  }
};