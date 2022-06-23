<template>
    <div class="background" :style="{backgroundImage: 'url(https://cn.vuejs.org/images/logo.png)'}">foo</div>
  
</template>

<script>
// import { url } from 'inspector';

    export default{
        name:'login',
        components:{},
        data(){
            return{
            data:'',
               }
            },
        };
    //     mounted(){
    //         this.initMap();
    //     },
    //     methods:{
    //         initmap(){
    //             console.log('1111');
    //         },
    //     },
</script>
<style>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-size: 100% 100%;

    }
</style>