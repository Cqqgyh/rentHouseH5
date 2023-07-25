<template>
  <van-skeleton :row="20" :loading="!agreementList">
    <van-card
      v-for="item in agreementList"
      :key="item.id"
      @click="goAgreementDetail(item)"
    >
      <!--      title-->
      <template #title>
        <h2 class="text-[15px] font-bold">{{ item.apartmentName }}</h2>
      </template>
      <!--    thumb-->
      <template #thumb>
        <van-image
          class="w-full h-full object-cover"
          :src="item.roomGraphVoList?.[0]?.url || ''"
        >
          <template v-slot:error>加载失败</template>
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </template>
      <!--      tags-->
      <template #tags>
        <van-tag
          v-if="item.leaseStatus === AgreementStatus.WAITING"
          class="mt-[5px]"
          type="primary"
          size="medium"
          >{{ getLabelByValue(AgreementStatusMap, item.leaseStatus) }}</van-tag
        >
        <van-tag
          v-else-if="item.leaseStatus === AgreementStatus.SIGNED"
          class="mt-[5px]"
          type="success"
          size="medium"
          >{{ getLabelByValue(AgreementStatusMap, item.leaseStatus) }}</van-tag
        >
        <van-tag
          v-else-if="item.leaseStatus === AgreementStatus.TO_BE_CONFIRMED"
          class="mt-[5px]"
          type="danger"
          size="medium"
          >{{ getLabelByValue(AgreementStatusMap, item.leaseStatus) }}</van-tag
        >
        <van-tag v-else class="mt-[5px]" type="default" size="medium">{{
          getLabelByValue(AgreementStatusMap, item.leaseStatus)
        }}</van-tag>
      </template>
      <!--      price-->
      <template #price>
        <!--      价格-->
        <div>
          <span class="text-red-500 text-[14px]">￥</span>
          <span class="text-red-500 text-[16px]">{{ item.rent }}/月</span>
        </div>
        <div>
          <span class="text-[12px] --van-gray-6">{{
            `${item.leaseStartDate} 至 ${item.leaseEndDate}`
          }}</span>
        </div>
      </template>
    </van-card>
  </van-skeleton>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import type { AgreementItemInterface } from "@/api/search/types";
import { getMyAgreementList } from "@/api/search";
import {
  AgreementStatus,
  AgreementStatusMap,
  getLabelByValue
} from "@/enums/constEnums";

const router = useRouter();
// 租约列表
const agreementList = ref<AgreementItemInterface[]>();
// 获取租约列表
const getAgreementListHandle = async () => {
  const { data } = await getMyAgreementList();
  agreementList.value = data;
};
// 跳转到租约详情
const goAgreementDetail = (item: AgreementItemInterface) => {
  router.push({
    path: "/agreement",
    query: { id: item.id }
  });
};
onMounted(async () => {
  await getAgreementListHandle();
});
</script>

<style scoped lang="less">
.base-info-title {
  background-color: var(--van-primary-background-color);
  //color: white;
}
</style>
