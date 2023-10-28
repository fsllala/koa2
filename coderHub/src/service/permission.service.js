const connections = require("../app/database.js");
class PermissionService {
    // 数据库查看是否存在相应权限
  async checkMoment(userId, momentId) {
    const statement = `SELECT * FROM moment WHERE id=? AND user_id=?`;
    const [result] = await connections.execute(statement, [momentId, userId]);
    return result;
  }
}

module.exports = new PermissionService();
