const connections = require("../app/database.js");

class FileService {
    async uploadAvatar(filename,mimetype,size,userId){
        const statement = `INSERT INTO avatar (filename,mimetype,size,user_id) VALUES (?,?,?,?)`;
        const [result] = await connections.execute(statement,[filename,mimetype,size,userId]);
        return result;
    }

    async showAvatarImageById(userId){
        const statement = `SELECT * FROM avatar WHERE user_id=?`;
        const [result] = await connections.execute(statement,[userId]);
        // 用户可能上传多张头像,所以result数组里面展示最后一个对象;
        return result[result.length-1];
    }

    
}

module.exports = new FileService();