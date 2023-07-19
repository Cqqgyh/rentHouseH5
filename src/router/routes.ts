import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: "/search",
    children: [
      {
        name: "Search",
        path: "/search",
        component: () => import("@/views/search/search.vue"),
        meta: {
          title: "主页"
        }
      },
      {
        path: "/group",
        name: "Group",
        component: () => import("@/views/group/group.vue"),
        meta: {
          title: "圈子"
        }
      },
      {
        path: "/myRoom",
        name: "MyRoom",
        component: () => import("@/views/myRoom/myRoom.vue"),
        meta: {
          title: "我的房间"
        }
      },
      {
        path: "/message",
        name: "Message",
        component: () => import("@/views/message/message.vue"),
        meta: {
          title: "消息"
        }
      },
      {
        path: "/userCenter",
        name: "UserCenter",
        component: () => import("@/views/userCenter/userCenter.vue"),
        meta: {
          title: "个人中心"
        }
      }
      // {
      //   path: "/about",
      //   name: "About",
      //   component: () => import("@/views/about/index.vue"),
      //   meta: {
      //     title: "关于",
      //     noCache: true
      //   }
      // }
    ]
  }
];

export default routes;
