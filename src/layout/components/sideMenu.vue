<template>
    <!-- v-model="collapsed"当前收起状态  collapsible能否收缩   null 时隐藏 trigger-->
    <a-layout-sider
        style="min-height: 100vh"
        width="256px"
        :collapsible="collapsible"
        v-model="collapsed"
        :trigger="null">
        <div class="logo">
            <!--<router-link  :to="{name:'Dashboard'}">
                <img src="../../assets/logo.svg" alt="logo">
                <h1>Ant Design Pro</h1>
            </router-link>-->
            <div style="color:#FFF;height: 64px;background-color: aqua">logo</div>
        </div>


        <!-- 方案一  连一级菜单都会渲染到menu中-->
        <!--<a-menu
            mode="inline"
            theme="dark" :inlineCollapsed="collapsed"
        >
            <template v-for="item in menus" v-if="item.children">
                <a-menu-item v-if="!item.children" :key="item.name">
                    <a-icon type="pie-chart"/>
                    <span>{{item.name}}</span>
                </a-menu-item>
                <sub-menu v-else :menuInfo="item" :key="item.name"/>
            </template>
        </a-menu>-->

        <!--方案二-->
        <!--<a-menu
            mode="inline"
            theme="dark" :inlineCollapsed="collapsed"
        >
            <sideMenuItem v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"/>
        </a-menu>-->


        <!--方案3-->
        <s-menu
            :collapsed="collapsed"
            :menu="menus"
            :theme="theme"

            :mode="mode"
            style="padding: 16px 0px;"></s-menu> <!--@select="onSelect"-->


        <!-- 测试 -->
        <!--<a-menu
            mode="inline"
            theme="dark"
            :inlineCollapsed="collapsed"
        >
            <a-menu-item key="1">
                <a-icon type="pie-chart"/>
                <span>Option 1</span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="desktop"/>
                <span>Option 2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="inbox"/>
                <span>Option 3</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="mail"/><span>Navigation One</span></span>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="appstore"/><span>Navigation Two</span></span>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>-->



    </a-layout-sider>
</template>

<script>
    import SubMenu from "../components/sideSubMenu"

    import SMenu from "../components/menu"

    import sideMenuItem from "../components/sideMenuItem"
    import {mapGetters} from 'vuex'

    export default {
        name: "SideMenu",
        components: {SubMenu, sideMenuItem,SMenu},
        props: {
            mode: {
                type: String,
                required: false,
                default: 'inline'
            },
            theme: {
                type: String,
                required: false,
                default: 'dark'
            },
            collapsible: {
                type: Boolean,
                required: false,
                default: false
            },
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
            menus: {
                type: Array,
                required: true
            }
        },
        created() {

        },
        computed: {
            ...mapGetters([
                'permission_routers'
            ]),
        },
        mounted: function () {

        },
        methods: {
            test(a) {
                console.log(a)
            }
        }
    }
</script>
