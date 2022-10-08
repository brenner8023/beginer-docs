# vue

vue组件需要显式写出name属性，有利于浏览器插件vue devtool的使用
```js
// bad
export default defineComponents({
  setup() {},
});

// good
export default defineComponents({
  name: 'NetworkCard',
  setup() {},
});
```
