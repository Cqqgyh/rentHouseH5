<template>
  <SearchBar :confirm-callback="confirmCallback"></SearchBar>
  <div class="main-container">主要内容</div>
</template>

<script setup lang="ts" name="Search">
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import type { RoomInterface, RoomListQueryInterface } from "@/api/search/types";
import { ref } from "vue";
import { getRoomList } from "@/api/search";
// 分页信息
const pageInfo = ref({
  current: 1,
  size: 10
});
// 搜索参数
const searchParams = ref<Partial<RoomListQueryInterface>>({});
// 房间列表
const roomList = ref<RoomInterface[]>([]);
// 点击查找，搜索条件
function confirmCallback(params: RoomListQueryInterface) {
  // 重置分页信息
  pageInfo.value = {
    current: 1,
    size: 10
  };
  //    收集参数，调用接口
  let targetObi = {
    ...pageInfo.value
  };
  //   去除空值
  for (let key in params) {
    if ((params as any)[key] !== "") {
      (targetObi as any)[key] = (params as any)[key];
    }
  }
  searchParams.value = targetObi;
  getRoomListHandler();
}
// 分页获取房间的信息
async function getRoomListHandler() {
  //   调用接口
  const { data } = await getRoomList(searchParams.value);
  roomList.value = data.records;
}
</script>
