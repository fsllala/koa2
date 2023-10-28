# koa2

## 功能

基于nodejs,koa2实现登陆，注册，jwt、上传、crud等接口；

## 环境

node v16.18.0、koa2、mysql、win11；

## 使用配置

1. 修改.env里面的配置文件；
2. npm install；
3. 可以将sql文件夹下的sql文件导入到可视化工具里，如Navicat；

## 功能列表

### 用户

+ 注册：/users、(POST)

```sql
-- body
{
    "username":"githtry",
    "password":123456
}
```

+ 登陆：/login、(POST)

```sql
-- body
{
    "username":"githtry",
    "password":123456
}
```

### 动态

+ 发表动态：/moment、(POST)

```sql
-- body
{
    "content":"githtry发表了一条动态"
}
```

+ 查询动态列表：/moment/list?size=${size}&offset=${offset}、(GET)
+ 查询动态详情：/moment/:momentId、(GET)
+ 修改某条动态：/moment/:momentId、(PATCH)
+ 删除某条动态：/moment/:momentId、(DELETE)

### 评论

+ 发表评论：/comment、(POST)

```sql
-- body
{
    "content": "kunkun打球好帅",
    "momentId": 3
}
```

+ 回复评论：/comment/reply、(POST)

```sql
-- body
{
    "content": "确实帅,我家鸽鸽太有实力了",
    "momentId": 3,
    "commentId":6
}
```

### 文件

+ 文件上传：/file/avatar2、(POST)，form-data(avatar2，file)；
