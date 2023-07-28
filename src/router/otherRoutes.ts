import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "RoomDetail",
    path: "/roomDetail",
    component: () => import("@/views/roomDetail/roomDetail.vue"),
    meta: {
      title: "房间详情"
    }
  },
  {
    name: "ApartmentDetail",
    path: "/apartmentDetail",
    component: () => import("@/views/apartmentDetail/apartmentDetail.vue"),
    meta: {
      title: "公寓详情"
    }
  },
  {
    name: "Appointment",
    path: "/appointment",
    component: () => import("@/views/appointment/appointment.vue"),
    meta: {
      title: "预约看房"
    }
  },
  {
    name: "MyAppointment",
    path: "/myAppointment",
    component: () => import("@/views/myAppointment/myAppointment.vue"),
    meta: {
      title: "我的预约"
    }
  },
  {
    name: "MyAgreement",
    path: "/myAgreement",
    component: () => import("@/views/myAgreement/myAgreement.vue"),
    meta: {
      title: "我的租约"
    }
  },
  {
    name: "Agreement",
    path: "/agreement",
    component: () => import("@/views/agreement/agreement.vue"),
    meta: {
      title: "租约详情"
    }
  },
  {
    name: "BrowsingHistory",
    path: "/browsingHistory",
    component: () => import("@/views/browsingHistory/browsingHistory.vue"),
    meta: {
      title: "浏览历史"
    }
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    meta: {
      title: "登录"
    }
  }
];

export default routes;
