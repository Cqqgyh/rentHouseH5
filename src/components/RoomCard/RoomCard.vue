<template>
  <van-card
    :title="`${data.apartmentInfo.name} ${data.roomNumber}房间`"
    :desc="`${data.apartmentInfo.provinceName} ${data.apartmentInfo.cityName} ${data.apartmentInfo.districtName}`"
  >
    <template #price>
      <!--      价格-->
      <span class="text-red-500 text-[14px]">￥</span>
      <span class="text-red-500 text-[20px]">{{ data.rent || 2500 }}</span>
    </template>
    <!--    thumb-->
    <template #thumb>
      <van-image
        class="w-full h-full object-cover"
        :src="data.graphVoList?.[0]?.url || ''"
      >
        <template v-slot:error>加载失败</template>
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </template>
    <template #tags>
      <van-tag
        class="last:mr-0 mr-[5px]"
        plain
        v-for="item in data.labelInfoList"
        :key="item.id"
        type="primary"
        >{{ item.name }}
      </van-tag>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import type { RoomInterface } from "@/api/search/types";
import type { PropType } from "vue";

defineProps({
  // 房间的信息数据
  data: {
    type: Object as PropType<RoomInterface>,
    default: () => ({}),
    readOnly: true
  }
});
</script>

<style scoped></style>
