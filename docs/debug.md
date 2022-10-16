# 调试技巧

## 浏览器控制台

## sourcemap错误时如何调试？

Q：老项目迁移到vite，如果用了commonjs转es6 module的插件，会导致sourcemap对应不上（因为sourcemap是commonjs代码生成的），此时如何打断点？。

A：关掉浏览器的sourcemap，即可对编译后的代码打断点

![](./assets/debug-set.png)

![](./assets/debug-map.png)

## ajax intercept的使用
