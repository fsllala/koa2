const connections = require("../app/database.js");
// 专门做数据库操作的;
class UserService {
  // 数据库插入数据
  async create(contents,userId) {
    const statement = `INSERT INTO moment(content,user_id) VALUES(?,?)`;
    // 返回的是一个[{}]格式的数据,lenth为1;采用数组结构,获取[]中的{};
    const [serviceResult] = await connections.execute(statement,[contents,userId]);

    return serviceResult;
  }

  // 查询数据列表
  async queryList(size,offset){
    const statement = `SELECT 
    m.id as id,m.content content,m.ctrateTime ctrateTime,m.updateTime updateTime,
    JSON_OBJECT('id',u.id,'name',u.name) as userInfo
    FROM moment as m
    LEFT JOIN user as u ON u.id=m.user_id
    LIMIT ? OFFSET ?`;
    // 这里如果写成String()的话,如果用户不传size,offset,接口也能通;如果是Number的话,会报错;
    const [serviceResult] = await connections.execute(statement,[String(size),String(offset)]);

    return serviceResult;
  }

  // 查询动态详情(将'查询数据列表'的LIMIT...ON...改为WHERE...即可)
  async queryDetailById(momentId){
    const statement = `SELECT 
    m.id as id,m.content content,m.ctrateTime ctrateTime,m.updateTime updateTime,
    JSON_OBJECT('id',u.id,'name',u.name) as userInfo
    FROM moment as m
    LEFT JOIN user as u ON u.id=m.user_id
    WHERE m.id=?`;
    const [serviceResult] = await connections.execute(statement,[momentId]);
    return serviceResult;
  }

  // 修改动态
  async updateById(content,momentId){
    const statement = `UPDATE moment SET content=? WHERE id=?`;
    const [serviceResult] = await connections.execute(statement,[content,momentId]);
    return serviceResult;
  }
  // 删除动态
  async removeById(momentId){
    const statement = `DELETE FROM moment WHERE id=?`;
    const [serviceResult] = await connections.execute(statement,[momentId]);
    return serviceResult;
  }
}

module.exports = new UserService();
