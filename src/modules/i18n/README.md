# 国际化问题

## 需求

### 原始需求

- 默认从本地读取翻译资源
- 支持从线上读取翻译资源

### 扩展需求

- 各模块分别提供自己的翻译资源
- 线上资源一个接口返回多个模块的翻译资源
- 支持图片的国际化？

## 方案

- 本地翻译资源存放在各模块的 state
- 获取线上翻译资源并更新个模块的 state

### 约束

- 模块必须有明确的 scope
-
