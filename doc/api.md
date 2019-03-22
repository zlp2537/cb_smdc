# 扫码点餐API



通用API：

| 功能     | 方法 | URL                                                    |
| -------- | ---- | ------------------------------------------------------ |
| 访问图片 | GET  | http://www.colourfulbyte.com/dc/image/sxty_cszj01_gyr.jpeg       |



扫码点餐移动端API：

| 功能     | 方法 | URL                                                    |
| -------- | ---- | ------------------------------------------------------ |
| 访问菜单 | GET  | http://www.colourfulbyte.com/dc/api/client/menu/sxty_cszj01/t01  |
| 下单     | POST | http://www.colourfulbyte.com/dc/api/client/order/sxty_cszj01/t01 |



管理后台API：

| 功能          | 方法 | URL                                                        |
| ------------- | ---- | ---------------------------------------------------------- |
| 添加/修改餐馆 | POST | http://www.colourfulbyte.com/dc/api/admin/r/sxty_cszj01    |
| 获取餐馆信息  | GET  | http://www.colourfulbyte.com/dc/api/admin/r/sxty_cszj01    |
| 修改菜单      | POST | http://www.colourfulbyte.com/dc/api/admin/menu/sxty_cszj01 |
| 获取菜单      | GET  | http://www.colourfulbyte.com/dc/api/admin/menu/sxty_cszj01 |
|获取订单列表|GET|http://www.colourfulbyte.com/dc/api/admin/orders|
|获取订单详情|GET|http://www.colourfulbyte.com/dc/api/admin/order/id|
