# gap-year

## wxs 
过滤器可能不可避免需要采用 wxs,其余场景,尽量避免采用!!!
目前来看,wxs 的主要用途就是数据filter,就是需要在不同的 wxml 中调用的公共函数,对于需要在 js 中调用的函数,可以采用 js 公用.

[思否上关于实现 filter 的几种方式](https://segmentfault.com/a/1190000012246412)
1,直接修改原数据
2.get 方法
3.wxs