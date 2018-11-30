<template>
    <!--<div v-if="!item.hidden&&item.children">
        &lt;!&ndash;如果是唯一的可见子节点，该节点无下级child节点&ndash;&gt;
        <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
            <a-menu-item  :key="item.name">
                <a-icon type="pie-chart" />
                <span>{{item.name}}</span>
            </a-menu-item>

        </template>
        <template v-else>

        </template>
    </div>-->
    <!--<template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
        <a-menu-item  :key="item.name">
            <a-icon type="pie-chart" />
            <span>{{item.name}}</span>
        </a-menu-item>

    </template>-->
    <a-menu-item :key="item.name">
        <a-icon type="pie-chart" />
        <span>{{item.name}}</span>
    </a-menu-item>
</template>

<script>
    export default {
        name: "sideMenuItem",
        props: {
            // route object 路由配置的每一项
            item: {
                type: Object,
                required: true
            },
            basePath: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                onlyOneChild: null
            }
        },
        methods:{
            hasOneShowingChild(children, parent){
                console.log(children, parent,"XXX")
                /**
                 * children:每个旅游的children属性
                 * 路由的parent
                 * */
                children=children||[]
                const showingChildren=children.filter(item=>{
                    if(item.hidden){
                        return false
                    }else{
                        this.onlyOneChild=item
                        return true  //返回true!
                    }
                })
                // 当只有一个可见子节点，则展示该子节点为一个根节点
                if (showingChildren.length === 1) {
                    return true
                }
                //当没有可见子节点，则展示该节点的父节点为一个根节点
                if (showingChildren.length === 0) {
                    this.onlyOneChild={ ...parent, path: '',noShowingChildren:true}
                    return true
                }
                return false
            }
        }
    }
</script>

<style scoped>

</style>
