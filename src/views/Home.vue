<template>
    <div class="home">
        <a-button type="primary" @click="test">editor</a-button>
        <a-button type="primary" @click="test2">admin</a-button>
    </div>
</template>

<script>
    export default {
        name: 'home',
        methods:{
            test(){
                console.log(this)
                this.$store.dispatch("GenerateRoutes",{roles:["editor"]}).then(res=>{
                    console.log(this.$store.getters.addRouters)
                    console.log(this.$store.getters.permission_routers)
                })
            },
            test2(){
                console.log(this)
                this.$store.dispatch("GenerateRoutes",{roles:["admin"]}).then(res=>{
                    console.log(this.$store.getters.addRouters)
                    console.log(this.$store.getters.permission_routers)
                })
            }
        }
    }
</script>
