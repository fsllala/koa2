/*
 Navicat Premium Data Transfer

 Source Server         : root
 Source Server Type    : MySQL
 Source Server Version : 50740
 Source Host           : localhost:3306
 Source Schema         : coderhub

 Target Server Type    : MySQL
 Target Server Version : 50740
 File Encoding         : 65001

 Date: 28/10/2023 10:25:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for avatar
-- ----------------------------
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `size` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `ctrateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of avatar
-- ----------------------------
INSERT INTO `avatar` VALUES (1, '64015c1aa2cff36addae1ad4b9675e6b', 'image/webp', 382920, 1, '2023-10-25 20:32:46', '2023-10-25 20:32:46');
INSERT INTO `avatar` VALUES (2, '6a0782c9b96991eb7c9ded9f6b0e09f0', 'image/webp', 382920, 1, '2023-10-26 18:11:28', '2023-10-26 18:11:28');
INSERT INTO `avatar` VALUES (3, 'e91b35e24586c1cb208a544f6acb5961', 'image/webp', 382920, 1, '2023-10-26 18:22:36', '2023-10-26 18:22:36');
INSERT INTO `avatar` VALUES (4, '0ebc1877d3b1cf1c77a548587e033f67', 'image/webp', 382920, 1, '2023-10-26 18:26:24', '2023-10-26 18:26:24');
INSERT INTO `avatar` VALUES (19, '1698372441333.webp', 'image/webp', 462440, 1, '2023-10-27 10:07:21', '2023-10-27 10:07:21');
INSERT INTO `avatar` VALUES (20, '1698373200499.webp', 'image/webp', 99876, 1, '2023-10-27 10:20:00', '2023-10-27 10:20:00');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `moment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment_id` int(11) NULL DEFAULT NULL,
  `ctrateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `moment_id`(`moment_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `comment_id`(`comment_id`) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (6, 'kunkun打球好帅', 3, 1, NULL, '2023-10-22 17:41:55', '2023-10-22 17:41:55');
INSERT INTO `comment` VALUES (7, '确实帅,我家鸽鸽太有实力了', 3, 1, 6, '2023-10-22 18:04:16', '2023-10-22 18:04:16');
INSERT INTO `comment` VALUES (9, '再看一眼就会爆炸', 3, 1, 6, '2023-10-22 18:09:03', '2023-10-22 18:09:39');
INSERT INTO `comment` VALUES (10, '华丽的转身，rap', 3, 1, 6, '2023-10-22 18:09:19', '2023-10-22 18:09:50');

-- ----------------------------
-- Table structure for label
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ctrateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of label
-- ----------------------------

-- ----------------------------
-- Table structure for moment
-- ----------------------------
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `ctrateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment
-- ----------------------------
INSERT INTO `moment` VALUES (3, '要有遥不可及的。梦想，也要有脚踏实地的本事。', 1, '2023-10-16 21:24:31', '2023-10-22 11:39:21');
INSERT INTO `moment` VALUES (4, '无论花开得多么绚烂，人总会将其摧毁。但是无论如何摧残，我们都会再种下花朵。而这就是我们的战斗。', 1, '2023-10-16 21:24:56', '2023-10-22 11:39:27');
INSERT INTO `moment` VALUES (5, '无语，秋风和老去的誓言，灰色的日子慢慢过去，骄阳无忌，人如黄花。', 1, '2023-10-16 21:26:12', '2023-10-22 11:39:32');
INSERT INTO `moment` VALUES (6, '人性最可怜的便是，我们总是梦想着天边一座奇妙的玫瑰园，而不去欣赏今天便开在我们窗口的玫瑰。', 1, '2023-10-16 21:29:28', '2023-10-22 11:39:39');
INSERT INTO `moment` VALUES (7, '给别人留有余地，往往就是给自己留下了生机与希望。', 2, '2023-10-16 21:30:24', '2023-10-22 11:39:45');
INSERT INTO `moment` VALUES (8, '我只是想说在我说我很好，我没事时，你们能说如果你累了，别忘了还有我。', 2, '2023-10-22 11:40:57', '2023-10-22 11:40:57');
INSERT INTO `moment` VALUES (9, '我们以为阳光照耀下的所有都是完美的、灿烂的，所以接受着自以为可以信任的一切，但我们不知道，森林中同样有荆棘、毒草和猎人，他们用阳光伪装自己，在锁定猎物后，用尖锐的矛刺穿对方的喉咙。', 2, '2023-10-22 11:41:07', '2023-10-22 11:41:07');
INSERT INTO `moment` VALUES (10, '听说，每一朵云都会下落不明。但我从来不知道，你是什么时候变成的云？', 3, '2023-10-22 11:41:57', '2023-10-22 11:41:57');
INSERT INTO `moment` VALUES (11, '下雨的时候，会有一些潮湿的泥土气息钻进我的体内，于是，体内一些阴暗的种子会发芽，会吐出让人感到生命存在的绿色，而我，正需要一些绿色，在我已经走了很久很久的人生道路上。', 3, '2023-10-22 11:42:03', '2023-10-22 11:42:03');
INSERT INTO `moment` VALUES (12, '如果生命是春天里的花朵，理解则是雨露。理解是一颗心感受或拥有另一颗心的跳动。', 1, '2023-10-22 11:42:32', '2023-10-22 11:42:32');
INSERT INTO `moment` VALUES (13, '你的过去，是我的一片空白；我的现在，是你不能给的现在；我的未来，是你给不了的将来。', 1, '2023-10-22 11:42:53', '2023-10-22 11:42:53');

-- ----------------------------
-- Table structure for moment_label
-- ----------------------------
DROP TABLE IF EXISTS `moment_label`;
CREATE TABLE `moment_label`  (
  `moment_id` int(11) NOT NULL,
  `label_id` int(11) NOT NULL,
  `ctrateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`moment_id`, `label_id`) USING BTREE,
  INDEX `label_id`(`label_id`) USING BTREE,
  CONSTRAINT `moment_label_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_label_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment_label
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `avatar_url` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `ctrateTime` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updateTime` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name_unique`(`name`) USING BTREE COMMENT '名字_唯一'
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'fsllala', 'e10adc3949ba59abbe56e057f20f883e', 'http://192.168.11.242:3000/1698373200499.webp', '2023-10-16 18:38:18.852579', '2023-10-27 10:20:00.524265');
INSERT INTO `user` VALUES (2, 'fsl', 'e10adc3949ba59abbe56e057f20f883e', NULL, '2023-10-16 18:38:36.229081', '2023-10-16 18:38:36.229081');
INSERT INTO `user` VALUES (3, 'liuliu', 'e10adc3949ba59abbe56e057f20f883e', NULL, '2023-10-16 18:38:46.962299', '2023-10-16 18:38:46.962299');

SET FOREIGN_KEY_CHECKS = 1;
