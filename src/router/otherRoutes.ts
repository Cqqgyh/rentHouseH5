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
  }
];

export default routes;
