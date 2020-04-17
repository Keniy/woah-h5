<template>
    <div class="tags-view-container">
        <router-link
            v-for="item in visitedTags"
            :key="tag.fullPath"
            :to="{ path: tag.fullPath, query: tag.query, fullPath: tag.fullPath }"
            tag="span"
            class="tags-view-item"
            @click.middle.native="onCloseSelectedTag(tag)"
            >
            {{ tag.title }}
        </router-link>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
