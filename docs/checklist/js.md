# JavaScript

## 缩进

使用空格进行缩进，缩进空格统一为4格
```js
// bad
if (a === 1) {
  a++;
}

// good
if (a === 1) {
    a++;
}
```

## 魔数

一般不直接使用魔数，建议使用命名有语义的常量替代魔数
```js
// bad
let size = height * 300; // 300是魔数

// good
const width = 300;
let size = height * width;
```

## 分号

项目代码必须使用分号作为结束，不能省略分号
```js
// bad
const a = 1

// good
const a = 1;
```

## 逗号

数组最后一个元素，对象最后一个键值对要加上逗号，有利于减少代码合并冲突
```js
// bad
const arr = [
  { name: 1 },
  { name: 2 },
  { name: 3 }
];
const obj = {
  age: 18,
  city: ''
};

// good
const arr = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
];
const obj = {
  age: 18,
  city: '',
};
```

## 变量

变量使用小驼峰，初始值未确定的常量使用小驼峰，初始值确定的常量用下划线连接的全大写。变量命名要语义化
```js
// bad
let data = {}; // 命名没有考虑语义化，假设项目里全是用data命名，可读性和维护性就降低了

// good
let userData = {};
const { baseWidth } = await myRequest();
const BASE_WIDTH = 1000;
```

## 引号

双引号和单引号都可以使用时，优先使用单引号
```js
// bad
let val = "vv";

// good
let val = 'vv';
```

## 比较

使用`===`替代`==`
```js
// bad
if (a == 1) {}

// good
if (a === 1) {}
```
