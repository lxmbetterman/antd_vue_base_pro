<template functional>
    <a-sub-menu v-on="listeners" v-bind="data.attrs">
        <span slot="title"><a-icon type="mail" /><span>{{data.attrs.menuInfo.name}}</span></span>
        <template v-for="item in data.attrs.menuInfo.children">
            <a-menu-item v-if="!item.children" :key="item.name">
                <a-icon type="pie-chart" />
                <span>{{item.name}}</span>
            </a-menu-item>
            <sub-menu v-else :menuInfo="item" :key="item.name"/>
        </template>
    </a-sub-menu>
</template>
