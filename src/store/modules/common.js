/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
export const storeName = 'common'

/** state **/
let state = {
    defaultTheme: 'theme-default',
    themes: ['default', 'red'],
    menuMode: 'horizontal',
    styleItem: {}
}

/** getters **/
let getters = getter(state, {
    defaultTheme: state => state.defaultTheme,
    themes: state => state.themes,
    menuMode: state => state.menuMode,
    styleItem: state => state.styleItem
})

/** mutations **/
let mutations = mutation(state, {
    SET_THEME(state, value) {
        state.defaultTheme = 'theme-' + value
    },
    SET_MENU_MODE(state, value) {
        state.menuMode = value
    },
    SET_STYLE(state, value) {
        state.styleItem = { ...value }
    }
})

/** actions **/
let actions = action(state, {
    // 设置主题
    setTheme({ commit }, value) {
        commit('SET_THEME', value)
    },
    // 设置菜单展示方式
    setMenuMode({ commit }, value) {
        commit('SET_MENU_MODE', value)
    },
    // 设置风格
    setStyle({ commit }, value) {
        commit('SET_STYLE', value)
    }
})

/** module store **/
let store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

/** exports **/
export let types = getTypes(store)
export let module = getModule(storeName)
export let Store = getStore(module, types)

export default store
