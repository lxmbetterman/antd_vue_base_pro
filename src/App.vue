<template>
    <div id="app">
        <router-view/>
        <!--//用于渲染一级路由,包括login,register,以及基础公共layout页面
        //layout页面可以包含左侧 导航菜单 顶部header,以及关键的二级页面渲染主体部分router-view/-->
    </div>
</template>

<script>
    import enquireScreen from './utils/device'
    export default {
        data(){
            return {

            }
        },
        created(){  //关于移动端和pc端的设备类型判断需要在create中进行
            //可将设备的类型状态保存在store中。
            let that = this
            enquireScreen(deviceType => {
                console.log(deviceType)
                // tablet
                if (deviceType === 0) {
                    that.$store.dispatch('ToggleDevice', 'tablet')
                    /*that.$store.commit('CLOSE_SIDEBAR', false)*/
                    console.log("tablet")
                }
                // mobile
                else if (deviceType === 1) {
                    that.$store.dispatch('ToggleDevice', 'mobile')
                    /*that.$store.commit('CLOSE_SIDEBAR', false)*/
                    console.log("mobile")
                }
                else {
                    that.$store.dispatch('ToggleDevice', 'desktop')
                    /*that.$store.commit('TOGGLE_SIDEBAR', true)*/
                    console.log("desktop")
                }
            })
        },
    }
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
