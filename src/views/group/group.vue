<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]">
      <h3 class="font-bold text-[18px] my-[4px]">Mock</h3>
    </div>
  </div>
</template>
<script setup lang="ts" name="Group">
import { getDictionary } from "@/api/template";

getDictionary();
</script>
