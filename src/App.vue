<template>
    <div class='app-main' :style='style'>
        <div class='app-top'>
            <h1>Beautiful</h1>
        </div>
        <div class='app-view'>
            <router-view></router-view>
        </div>
        <div class='app-bottom'>
            <router-link to='/home' tag='div'>home</router-link>
            <router-link to='/select' tag='div'>select</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                info: [],
                width: null,
                height: null,
                style: {}
            }
        },
        methods: {
            getInfo() {
                this.width = window.innerWidth
                this.height = window.innerHeight
                this.style['background-image'] = `url(https://api.lylares.com/bing/image/random)`
            }
        },
        created() {
            this.getInfo()
        }
    }
</script>
<style scoped lang='less'>
    .glyphicon{
        font-size:1rem
    }
    .glyphicon-heart:before {
        content: "\e005";
    }
    .app-main {
        height: 100%;
        width: 100%;
        background: #f0f0f0;
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        position:absolute;
        .app-view{
            min-height:100%;box-sizing:border-box;
        }
    }
    .app-top {
        position:fixed;top:0;
        z-index: 100;width:100%;left:0;right:0;
        text-align: center;
        height: .8rem;
        line-height: .8rem;
        color: #333;
        background: rgba(255, 255, 255, .5);
        h1 {
            font-size: .4rem;color:#fff;margin:0;line-height:.8rem;
        }
    }
    .app-bottom {
        position:fixed;bottom:0;z-index:9999;text-align:center;width:100%;
        div{
            display:inline-block;font-size:.6rem;margin-right:1rem;
        }
    }
</style>
