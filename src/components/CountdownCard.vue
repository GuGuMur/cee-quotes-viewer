<template>
    <n-card class="rounded-lg p-5 shadow-md min-w-1/2xl col-span-2 bg-#f1d3f9" :title="高考倒计时">
        <div class="text-5xl font-bold text-center">距离高考还有：{{ daysUntilNextGaokao() }} 天</div>
        <NDivider></NDivider>
        <n-progress type="line" :percentage="Math.ceil((1 - (daysUntilNextGaokao() / 365)) * 100)" indicator-placement="inside"
            processing />
    </n-card>
</template>

<script setup>
import { NCard, NProgress, NDivider } from 'naive-ui'
// import dayjs from 'dayjs';
import { ref } from 'vue'

// const today = dayjs();
const color = ref("#f1d3f9")
function daysUntilNextGaokao() {
    const now = new Date();
    const year = now.getFullYear();

    // 定义最近一次高考的日期
    const gaokaoDateThisYear = new Date(year, 5, 7); // 6月7日
    const gaokaoDateNextYear = new Date(year + 1, 5, 7); // 明年的6月7日

    let daysUntilGaokao;

    // 判断高考日期是否已经过去
    if (now > gaokaoDateThisYear) {
        // 如果已经过了，计算到明年高考的天数
        daysUntilGaokao = Math.ceil((gaokaoDateNextYear - now) / (1000 * 60 * 60 * 24));
    } else {
        // 还没过，计算到今年高考的天数
        daysUntilGaokao = Math.ceil((gaokaoDateThisYear - now) / (1000 * 60 * 60 * 24));
    }

    return daysUntilGaokao;
}

</script>
