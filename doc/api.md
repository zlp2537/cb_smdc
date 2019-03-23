# 扫码点餐API

URL前缀：http://www.colourfulbyte.com/dc/



通用API：

| 功能     | 方法 | URL                        | 返回 | 响应 |
| -------- | ---- | -------------------------- | ---- | ---- |
| 访问图片 | GET  | image/sxty_cszj01_gyr.jpeg |      |      |



扫码点餐移动端API：

| 功能     | 方法 | URL                              | 返回 | 响应 |
| -------- | ---- | -------------------------------- | ---- | ---- |
| 访问菜单 | GET  | api/client/menu/sxty_cszj01/t01  |      |      |
| 下单     | POST | api/client/order/sxty_cszj01/t01 |      |      |



管理后台API：

| 功能          | 方法 | URL                          |请求|响应|
| ------------- | ---- | ---------------------------- | -- | -- |
| 添加/修改餐馆 | POST | api/admin/r/sxty_cszj01      |    |    |
| 获取餐馆信息  | GET  | api/admin/r/sxty_cszj01      |    |    |
| 修改菜单      | POST | api/admin/menu/sxty_cszj01   |    |    |
| 获取菜单      | GET  | api/admin/menu/sxty_cszj01   |    |    |
| 获取订单列表  | GET  | api/admin/orders             |    |    |
| 获取订单详情  | GET  | api/admin/order/id           |    |    |

