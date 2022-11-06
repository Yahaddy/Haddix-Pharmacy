const sale = require('../models/sale');


const createSale = async (req, res) => {
    const content = req.body;

    console.log(content);
    try {
     const sale = { id: 123 };
  
      return res.status(201).json({ data: sale });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };

const getAllSale = async (req, res) => {
    try {
        const sale = await sale.find({});
        return res.status(201).json({ data: sale });
      } catch (error) {
        console.log(error);
        return res.status(500).end();
      }
};

const getOneSale = async (req, res) => {
    const id = req.params.id
    try {
      const sale = await sale.findOne({ _id: id });
      if (!sale) {
        return res.status(400).json({ message: 'sale not found' });
      }
      return res.status(201).json({ data: user });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
};

const updateOne = async (req, res) => {
    const id = req.params.id
    const content = req.body
    try {
        const sale = await sale.findOneAndUpdate(
          { _id: id },
          content,
          { new: true }
        );
        if (!sale) {
            return res.status(400).json({ message: 'sale not found' });
        }
        return res.status(201).json({ data: sale });
      } catch (error) {
        console.log(error);
        return res.status(500).end();
      }
};

const deleteOne = async (req, res) => {
    const id = req.params.id
      try {
        const sale = await sale.findOneAndRemove({ _id: id });
        if (!sale) {
          return res.status(400).json({ message: 'sale not found' });
        }
        return res.status(201).json({ message: 'deleted successfully', 
    data: sale });
      } catch (error) {
        console.log(error);
        return res.status(500).end();
      }
};




module.exports = {
    createSale,
    getAllSale,
    getOneSale,
    updateOne,
    deleteOne
   
  };
