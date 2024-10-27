<template>
    <n-card class="rounded-lg p-5 shadow-md min-w-1/2xl col-span-2 bg-#f1d3f9" :title="高考倒计时">
        <div class="text-5xl font-bold text-center">距离高考还有：{{ daysDifference }} 天</div>
        <NDivider></NDivider>
        <n-progress type="line" :percentage="Math.ceil((1 - (daysDifference / 365)) * 100)" indicator-placement="inside"
            processing />
    </n-card>
</template>

<script setup>
import { NCard, NProgress, NDivider } from 'naive-ui'
import dayjs from 'dayjs';
import { ref } from 'vue'

const today = dayjs();
const color = ref("#f1d3f9")
// 获取下一年6月7日的日期
const nextYearJune7 = dayjs().add(1, 'year').startOf('year').add(6, 'months').add(6, 'days');

// 计算天数差
const daysDifference = nextYearJune7.diff(today, 'day');

</script>

<style lang="scss" scoped></style>