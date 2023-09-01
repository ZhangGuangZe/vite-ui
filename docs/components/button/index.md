# Button 按钮

## 基础用法

使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

:::demo

```vue
<template>
 <div style="margin-bottom:20px;">
  <ViteButton color="blue">主要按钮</ViteButton>
  <ViteButton color="green">绿色按钮</ViteButton>
  <ViteButton color="gray">灰色按钮</ViteButton>
  <ViteButton color="yellow">黄色按钮</ViteButton>
  <ViteButton color="red">红色按钮</ViteButton>
 </div>
 <div style="margin-bottom:20px;"
 >
  <ViteButton color="blue" plain>朴素按钮</ViteButton>
  <ViteButton color="green" plain>绿色按钮</ViteButton>
  <ViteButton color="gray" plain>灰色按钮</ViteButton>
  <ViteButton color="yellow" plain>黄色按钮</ViteButton>
  <ViteButton color="red" plain>红色按钮</ViteButton>
 </div>
 <div style="margin-bottom:20px;">
  <ViteButton size="small" plain>小按钮</ViteButton>
  <ViteButton size="medium" plain>中按钮</ViteButton>
  <ViteButton size="large" plain>大按钮</ViteButton>
 </div>
 <div style="margin-bottom:20px;">
  <ViteButton color="blue" round plain icon="search">搜索按钮</ViteButton>
  <ViteButton color="green" round plain icon="edit">编辑按钮</ViteButton>
  <ViteButton color="gray" round plain icon="check">成功按钮</ViteButton>
  <ViteButton color="yellow" round plain icon="message">提示按钮</ViteButton>
  <ViteButton color="red" round plain icon="delete">删除按钮</ViteButton>
 </div>
 <div style="margin-bottom:20px;">
  <ViteButton color="blue" round plain icon="search"></ViteButton>
  <ViteButton color="green" round plain icon="edit"></ViteButton>
  <ViteButton color="gray" round plain icon="check"></ViteButton>
  <ViteButton color="yellow" round plain icon="message"></ViteButton>
  <ViteButton color="red" round plain icon="delete"></ViteButton>
 </div>
</template>
```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

设置 icon 属性即可.

:::demo

```vue
<template>
 <div class="flex flex-row">
  <ViteButton icon="edit" plain></ViteButton>
  <ViteButton icon="delete" plain></ViteButton>
  <ViteButton icon="share" plain></ViteButton>
  <ViteButton round plain icon="search">搜索</ViteButton>
 </div>
</template>
```
