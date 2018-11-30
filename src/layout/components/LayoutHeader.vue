<template>
    <a-layout-header style="padding: 0px;">
        <div class="header">
            <a-icon style="color:red" class="trigger" v-if="device==='mobile'" :type="collapsed ? 'menu-fold' : 'menu-unfold'"
                    @click.native="toggle"></a-icon>
            <a-icon style="color:red" class="trigger" v-else :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click.native="toggle"/>


        </div>
    </a-layout-header>
</template>

<script>
    /*import HeaderNotice from './HeaderNotice'*/
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "LayoutHeader",
        props: {
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
            device: {
                type: String,
                required: false,
                default: 'desktop'
            }
        },
        data() {
            return {}
        },
        created() {

        },
        methods: {
            /*...mapActions(["Logout"]),
            ...mapGetters(["nickname", "avatar"]),*/

            toggle() {
                this.$emit('toggle')
            }
        }
    }
</script>

<style scoped>

</style>
