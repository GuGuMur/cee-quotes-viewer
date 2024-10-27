<template>
    <n-card class="rounded-lg p-5 shadow-md min-w-1/2xl" :title="title">
        <template #header-extra>
            <n-button @click="$emit('refresh')">
                距离刷新时长还有：{{ countdown }} 分
            </n-button>
        </template>
        <div class="flex items-start justify-center">
            <div class="text-gray-800 text-4xl font-bold text-left px-2 leading-none"
                style="font-family:'Times New Roman'">“
            </div>
            <div class="text-left p-4">
                <slot name="content"></slot>
            </div>
            <div class="text-gray-800 text-4xl font-bold text-left px-2 leading-none"
                style="font-family:'Times New Roman'">”
            </div>
        </div>
        <div class="text-sm text-right pr-4">
            <cite class="font-normal">——<slot name="author"></slot></cite>
        </div>
        <template #footer>
            <slot name="footer"></slot>
        </template>
    </n-card>
</template>

<script setup>
import { NCard,  NButton } from 'naive-ui'
const props = defineProps(["title", "countdown"])
defineEmits(['refresh'])
</script>

<style lang="scss" scoped></style>