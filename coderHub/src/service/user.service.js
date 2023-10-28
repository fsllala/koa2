const connections = require("../app/database.js");
// 专门做数据库操作的;
class UserService {
    // 数据库插入数据
    async create(user) {
        // console.log("user.controller传入的实参为", user);
        const {username,password}=user; // 数据库表是user,password;但是用户可以传username,只要约定好,最后填入相应的数据库表就行;

        // 将user存储到数据库中
        const statement = `INSERT INTO user(name,password) VALUES(?,?)`
        const serviceResult = await connections.execute(statement,[username,password]);
        return serviceResult;
    }

    // 数据库查看是否存在相同的user
    async getUserByName(username){
        const statement = `SELECT * FROM user WHERE name=?`;
        const result = await connections.execute(statement,[username]);
        return result[0];  //返回result的话,又有很多其他信息,只有0才是我们想要的
    }

    // 更新用户头像地址
    async updateUserAvatar(avatarUrl,userId){
        const statement = `UPDATE user SET avatar_url=? WHERE id=?`;
        const [result] = await connections.execute(statement,[avatarUrl,userId]);
        return result;
    }
}

module.exports = new UserService();