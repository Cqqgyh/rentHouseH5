import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Search",
    path: "/search",
    component: () => import("@/views/search/search.vue"),
    meta: {
      title: "主页",
      icon: "search"
    }
  },
  {
    path: "/group",
    name: "Group",
    component: () => import("@/views/group/group.vue"),
    meta: {
      title: "圈子",
      icon: "star-o"
    }
  },
  {
    path: "/myRoom",
    name: "MyRoom",
    component: () => import("@/views/myRoom/myRoom.vue"),
    meta: {
      title: "我的房间",
      icon: "home-o"
    }
  },
  {
    path: "/message",
    name: "Message",
    component: () => import("@/views/message/message.vue"),
    meta: {
      title: "消息",
      icon: "comment-o"
    }
  },
  {
    path: "/userCenter",
    name: "UserCenter",
    component: () => import("@/views/userCenter/userCenter.vue"),
    meta: {
      title: "个人中心",
      icon: "user-o"
    }
  }
];

export default routes;
