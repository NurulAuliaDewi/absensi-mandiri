const userController = require('./userController');
const refreshTokenController = require('./RefreshToken');

module.exports = {
  getDataUser: userController.getDataUser,
  getDataByUsername: userController.getDataByUsername,
  register: userController.register,
  login: userController.login,
  refreshtoken: refreshTokenController.refreshtoken,
  logout: userController.logout,
  edit: userController.edit,
};
