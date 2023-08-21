/* import { createApp } from "vue";

import ViteButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

createApp(ViteButton).mount("#app"); */

import { createApp } from "vue/dist/vue.esm-browser";
import ViteUI from './entry'

createApp({
  template: `
    <div style="margin-bottom:20px;">
      <ViteButton color="blue">蓝色按钮</ViteButton>
      <ViteButton color="green">绿色按钮</ViteButton>
      <ViteButton color="gray">灰色按钮</ViteButton>
      <ViteButton color="yellow">黄色按钮</ViteButton>
      <ViteButton color="red">红色按钮</ViteButton>
    </div>
    <div style="margin-bottom:20px;">
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
  `
})
.use(ViteUI)
.mount("#app");