<template>
    <div>
        <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            :mode="mode"
            :background-color="style.backgroundColor"
            :active-text-color="style.activeTextColor"
            :text-color="style.textColor">
            <sidebar-item v-for="(route, index) in options.menus" :key="index" :item="route" :base-path="route.path"></sidebar-item>
        </el-menu>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
