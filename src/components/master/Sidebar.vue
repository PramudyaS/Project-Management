<template>
    <b-menu id="sidebar">
        <b-menu-list label="Menu">
            <b-menu-item icon="information_outline" label="Users"></b-menu-item>
            <b-menu-item icon="information-outline" label="Project"></b-menu-item>
            <b-menu-item icon="account" label="My Account">
                <b-menu-item label="Account data"></b-menu-item>
                <b-menu-item label="Addresses"></b-menu-item>
            </b-menu-item>
        </b-menu-list>
        <b-menu-list>
            <b-menu-item
                label="Expo"
                icon="link"
                tag="router-link"
                target="_blank"
                to="/expo">
            </b-menu-item>
        </b-menu-list>
        <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
        </b-menu-list>
    </b-menu>
</template>

<script>
    export default({
        name:'Sidebar',
        props:['icon'],
        data:()=>{
            return{
                isActive:true
            }
        }
    })
</script>

<style scoped>
    #sidebar{
        padding-left:20px;
        padding-top:20px;
    }
</style>