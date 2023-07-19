<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    icon: "search",
    title: "找房",
    to: {
      path: "/search"
    }
  },
  {
    icon: "star-o",
    title: "圈子",
    to: {
      path: "/group"
    }
  },
  {
    icon: "home-o",
    title: "我的房间",
    to: {
      path: "/myRoom"
    }
  },
  {
    icon: "comment-o",
    title: "消息",
    to: {
      path: "/message"
    }
  },
  {
    icon: "user-o",
    title: "个人中心",
    to: {
      path: "/userCenter"
    }
  }
  // {
  //   icon: "user-o",
  //   title: "关于",
  //   to: {
  //     path: "/about"
  //   }
  // }
]);
</script>
