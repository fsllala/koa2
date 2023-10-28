const multer = require("@koa/multer");
const path = require("path");
const uploadAvatars = multer({
  // 注意这里的./是和程序的启动目录有关系的，不是当前目录
  dest: "./uploads/",
});

const handleAvatar = uploadAvatars.single("avatar");

// 上传头像，有常见的后缀名
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 可以用 path.join(__dirname ,'xxx')拼接,就不用考虑相对路径的问题了;
    cb(null, "./uploads/");
  },
 
  // 这里一般不会保留原来的,否则会导致后端不知道返回啥;除非约定好了
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadAvatars2 = multer({
  storage,
});
const handleAvatar2 = uploadAvatars2.single("avatar2");


module.exports = {
  handleAvatar,
  handleAvatar2,
};
