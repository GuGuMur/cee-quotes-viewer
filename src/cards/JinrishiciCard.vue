<template>
    <QuoteCard :title="title" span="1" :countdown="Math.ceil(countdown / 60)" @refresh="refresh">
        <template #content>
            {{ content }}
        </template>
        <template #author>
            {{ author }}
        </template>
    </QuoteCard>
</template>

<script setup>
import QuoteCard from '@/components/QuoteCard.vue';
import { useMessage } from 'naive-ui'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { load } from 'jinrishici'
const title = ref("今日诗词")
const content = ref("content")
const author = ref("未知作者")
const countdownStandard = 1200
const countdown = ref(countdownStandard)
let timer = null;

const message = useMessage()

const fetchData = async () => {
    try {
        load(data => {
            const result = data.data
            content.value = result.content
            author.value = `${result.origin.author}，《${result.origin.title}》`;
        });
    } catch (error) {
        console.error('获取数据失败:', error);
    }
};

const refresh = async () => {
    await fetchData();
    message.success("内容已更新")
    countdown.value = countdownStandard;
}

const startCountdown = () => {
    timer = setInterval(() => {
        if (countdown.value > 0) {
            countdown.value--;
        } else {
            fetchData();
            countdown.value = countdownStandard;
        }
    }, 1000);
};

onMounted(() => {
    fetchData(); // 页面加载时获取内容
    startCountdown(); // 开始倒计时
});

onBeforeUnmount(() => {
    clearInterval(timer); // 清理计时器
});
</script>

<style lang="scss" scoped></style>