<script setup>
import OneCard from "./cards/OneCard.vue";
import CountdownCard from "./components/CountdownCard.vue";
import JinrishiciCard from "./cards/JinrishiciCard.vue";
import JInshancibaCard from "./cards/JInshancibaCard.vue";
import ShanbeiCard from "./cards/ShanbeiCard.vue";
import HitokotoCard from "./cards/HitokotoCard.vue";
import { NMessageProvider } from "naive-ui";
</script>

<template>
  <n-message-provider>
  <div class="grid grid-cols-2 gap-5">
    <CountdownCard></CountdownCard>
    <JinrishiciCard></JinrishiciCard>
    <JInshancibaCard></JInshancibaCard>
    <ShanbeiCard></ShanbeiCard>
    <HitokotoCard></HitokotoCard>
    <OneCard></OneCard>
  </div>
</n-message-provider>
</template>

  <style scoped>
  header {
    line-height: 1.5;
  }
</style>