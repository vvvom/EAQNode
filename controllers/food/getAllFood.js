const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req,res) => {
  try {
      const FoodModel = dataBase.getModel('Food');
      const CafeModel = dataBase.getModel('Cafe');
      if (!FoodModel && !CafeModel) throw new Error('Base not connect');

      const token = req.get('Authorization');
      if (!token) throw new Error('No token');

      const {id:idCafe, name:nameCafe} = tokenVerificator(token,secret);
      const isRegisteredCafe = await CafeModel.findOne({
          where:{
              id: idCafe,
              name: nameCafe
          }
      });
      if (!isRegisteredCafe) throw new Error(`Cafe with this name ${nameCafe} not exist`);

      const food = await FoodModel.findAll({
          where:{
              cafe_id: idCafe
          }
      });
      if (!food.length) throw new Error('You don\'t have any food');

      res.json({
          success: true,
          message: food
      })
  }  catch (e) {
      res.json({
          success: false,
          message: e.message
      })
  }
};