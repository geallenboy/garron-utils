# ge-utils
> 前端常用项目业务工具库

### Installation
Using npm:
```shell
$ npm i --save ge-utils
```

### how to use
```javascript
// 全部引入
import * as geUtils from 'ge-utils';
geUtils.getId(); // '8814ff4a-72c0-4943-f5df-dc1736f0'

//按需引入
import { getId } from 'ge-utils';
getId() // '103f4456-6c28-4449-89d1-a8ea7b20'

```

### 方法

| 方法                       | 说明                                 |
| -------------------------- | ------------------------------------ |
| getTreeChildren ()         | 获取树的子节点                       |
| getId ()                   | 生成唯一id                        |
| treeToArray ()             | 树扁平化树                           |
| arrayToTree()              | 数组转树结构                         |
| parseQueryString ()        | url参数转对象                        |
| stringifyQueryString ()    | 对象序列化                           |
| Validator ()               | 表单校验                             |
| convertCurrency()          | 数字金额转大写                       |
| formatNumber()             | 数字千分位                           |
| Storage()                  | 浏览器缓存方法                       |
| debounce()                 | 函数防抖                             |
| throttle()                 | 函数节流                            |
| IdCardInfo()               | 解析身份证信息                      |
| Calc                       | 加减乘除类

### change log
