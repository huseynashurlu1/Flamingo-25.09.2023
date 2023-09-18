const Product = require('../models/product');
const Category = require('../models/category');
const Order = require('../models/order');
const viewStats = require('../viewStats');
const currentViewCount = require('../viewStats');
const countt = currentViewCount.degeriAl();

const getCount = (model) => {
    return model.countDocuments({});
  };

const getCounts = async (req, res) => {
  try {

    const [pr_count, cat_count, order_count] = await Promise.all([
        getCount(Product),
        getCount(Category),
        getCount(Order),
      ]);

    res.json({
      pr_count,
      cat_count,
      order_count,
      countt
    });
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).json({ error: 'İstek işlenirken bir hata oluştu' });
  }
};


module.exports = { getCounts };