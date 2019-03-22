# 设计

* 以下内容假设“**彩色字节**”是山西太原的一家餐馆。
* 为了简化系统，暂时不考虑大份、小份这种属性。比如打卤面大份20块，小份16块，按两个菜录入，分别为打卤面（大份）、打卤面（小份）。再比如可乐，按三个菜录入：大杯可乐、中杯可乐、小杯可乐。



## 技术选型

* 后端
  * API服务器：Node.js
  * 数据库：MongoDB

* 前端
  * 移动客户端：Vuejs + Bootstrap ？
  * 后台管理界面：
    * Web：Vuejs + Bootstrap ？
    * 微信小app：未来再开发



## API



| 功能     | 方法 | URL                                                    |
| -------- | ---- | ------------------------------------------------------ |
| 访问图片 | GET  | http://www.colourfulbyte.com/dc/image/sxty_cszj01_gyr.jpeg       |
| 访问菜单 | GET  | http://www.colourfulbyte.com/dc/api/client/menu/sxty_cszj01/t01  |
| 下单     | POST | http://www.colourfulbyte.com/dc/api/client/order/sxty_cszj01/t01 |





## MongoDB

DB：

* smdc：未来的生产环境
* smdc_dev：测试环境

Collections：

* images：图片暂时存放在MongoDB里（后续可以考虑放到更合适的地方）
  * id：图片唯一ID（后面解释ID规则）
  * data：图片二进制数据

* restaurants：记录餐馆数据
  * id：餐馆唯一ID（后面解释ID规则）
  * name：餐馆名
  * pic_id：餐馆图片ID

* menus：记录菜单数据
  * id：菜单唯一ID（后面解释ID规则）
  * groups：餐馆菜品分组，比如有热菜、凉菜、主食、甜点、饮料、酒水等。
    * id：分组ID，整数，菜单内唯一。比如热菜是1，凉菜是2，等等。
    * name：分组名
  * options：选项，比如不辣、微辣、免香菜，等等
    * id：选项ID
    * name：选项名
  * items：菜单项目
    * id：菜的ID，整数，菜单内唯一
    * name：菜名
    * group_id：菜的分组ID，比如过油肉属于热菜，分组ID是1。
    * pic_id：菜的图片ID
    * price：菜的价格，整数，单位是**分**。
    * option_ids：可选选项ID列表
* orders：记录订单数据
  * id：
  * items：
    * id：菜ID
    * count：份数，整数
    * rermarks：备注（其他备注）



##  ID编码规则

* 图片唯一ID：
  * 餐馆图片：餐馆唯一ID+点+后缀。比如彩色字节餐馆的图片ID是sxty_cszj01.png，具体后缀因图片格式而异，比如可以是png、jpeg、gif等。
  * 菜单项图片：餐馆唯一ID+下划线+菜单项首字母小写+点+后缀。比如彩色字节餐馆的过油肉图片ID是sxty_cszj01_gyr.jpeg。
* 餐馆唯一ID：省市拼音首字母小写+下划线+餐馆首字母小写+序号，序号主要为防止餐馆重名或方便后续扩展。比如山西太原彩色字节餐馆的ID是sxty_cszj01。
* 菜单唯一ID：同餐馆唯一ID。比如山西太原彩色字节餐馆的菜单ID是sxty_cszj01。