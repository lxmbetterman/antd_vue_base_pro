import Vue from 'vue'
const app = {
    state: {
        sidebar: {
            opened: true,  //记录侧边栏 开合状态
        },
        device: 'desktop',
    },
    mutations: {
        TOGGLE_DEVICE: (state, device) => {
            state.device = device
        },
        TOGGLE_SIDEBAR_STATUS:(state,status)=>{ //初始化Vue时会commit该方法，初始状态从localStorage中取
            state.sidebar.opened = status
            Vue.ls.set("SIDEBAR_STATUS", status)  //保存localStorage
        }
    },
    actions: {
        ToggleDevice({commit}, device) {
            commit('TOGGLE_DEVICE', device)
        },
        Toggle_sidebar_status({commit},status){
            commit("TOGGLE_SIDEBAR_STATUS",status)
        }
    }
}
export default app
