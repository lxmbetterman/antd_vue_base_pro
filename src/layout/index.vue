<template>
    <div class="layout">
        <a-layout>
            <!--左侧侧边栏-->
            <a-drawer v-if="device=='mobile'" placement="left" wrapClassName="drawerContainer"
                      @close="handleClose" :closable="false" :visible="!collapsed"> <!--visible和collapsed效果相反-->
                <SideMenu mode="inline" :collapsed="false" :collapsible="true" :menus="permission_routers"
                ></SideMenu> <!--collapsible ： 侧边栏是否可收起 false:一直都是打开的状态-->
            </a-drawer>
            <SideMenu v-else mode="inline" :collapsed="collapsed" :collapsible="true":menus="permission_routers"
            ></SideMenu>
            <!---->

            <a-layout style="min-height: 100vh">
                <!-- layout header -->
                <layout-header :collapsed="collapsed" :device="device" @toggle="toggle"/>  <!--@toggle="toggle"-->
                <!-- layout content -->
                <a-layout-content :style="{ margin: '24px 24px 0', height: '100%' }">
                    <route-view/><!-- content -->
                </a-layout-content>


                <a-layout-footer style="padding: 0px">
                    <layout-footer/>
                </a-layout-footer>

            </a-layout>
        </a-layout>


    </div>
</template>

<script>
    import {mapGetters, mapState,mapActions} from "vuex"
    import SideMenu from "./components/sideMenu"
    import LayoutHeader from './components/LayoutHeader'
    import LayoutFooter from './components/LayoutFooter'
    import RouteView from "./components/RouteView"

    export default {
        name: "index",
        components: {SideMenu, LayoutHeader, LayoutFooter, RouteView},
        data() {
            return {
                collapsed: false  //collpsed:关闭的 ，合起的（true）; 打开的（false）
            }
        },
        computed: {
            ...mapGetters([
                'permission_routers',
            ]),
            ...mapState({
                device: state => state.app.device,
                sidebarOpened: state => state.app.sidebar.opened,
            })
        },
        methods: {
            ...mapActions(['Toggle_sidebar_status']),
            toggle() {
                this.collapsed = !this.collapsed
                //triggerResize()
                this.Toggle_sidebar_status(this.collapsed)
            },
            handleClose(){
                this.collapsed = true
            }
        },
        mounted(){
            this.collapsed = this.sidebarOpened
        }
    }
</script>

<style>
    .drawerContainer .ant-drawer-body {
        padding: 0;
    }

    .layout {
        min-height: 100vh;
        overflow-x: hidden;
    }

</style>
