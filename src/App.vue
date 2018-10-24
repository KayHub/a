<template>
    <div class='app-main' :style='style'>
        <div :class='["app-top",scrollTop?"active":""]'>
            <span v-show='returnShow' class='return' @click='returns'><img src="./img/return.png" alt=""></span>
            <h1>Beautiful</h1>
        </div>
        <div class='app-view'>
            <keep-alive>
                <router-view v-if='$route.meta.keepAlive&&!$route.meta.animate'></router-view>
            </keep-alive>
            <router-view v-if='!$route.meta.keepAlive&&!$route.meta.animate'></router-view>
            <keep-alive>
                <transition name='root'>
                    <router-view v-if='$route.meta.keepAlive&&$route.meta.animate'></router-view>
                </transition>
            </keep-alive>
            <transition name='root'>
                <router-view v-if='!$route.meta.keepAlive&&$route.meta.animate'></router-view>
            </transition>
        </div>
        <div :class='["app-bottom",scrollTop?"active":""]'>
            <router-link to="/home" tag='div'>
                <span class='glyphicon glyphicon-heart'></span>
            </router-link>
            <router-link to='/select' tag='div'>
                <span class='glyphicon glyphicon-th-list'></span>
            </router-link>
        </div>
    </div>
</template>
<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap/fonts/glyphicons-halflings-regular.eot'
    export default {
        data() {
            return {
                info: [],
                width: null,
                height: null,
                style: {},
                scrollTop: null,
                returnShow: false,
            }
        },
        watch: {
            '$route.path' (newVal) {
                this.returnShow = newVal === '/home' ? false : true
            }
        },
        methods: {
            returns() {
                this.$router.go(-1)
            },
            getInfo() {
                this.width = window.innerWidth
                this.height = window.innerHeight
                this.style['background-image'] = `url(https://api.lylares.com/bing/image/random)`
            },
            scroll() {
                let scroll = 0
                window.addEventListener('scroll', () => {
                    if (scroll >= document.scrollingElement.scrollTop) {
                        this.scrollTop = false
                        console.log('向上')
                    } else {
                        this.scrollTop = true
                        console.log('向下')
                    }
                    scroll = document.scrollingElement.scrollTop
                })
            }
        },
        mounted() {
            this.scroll()
        },
        created() {
            this.returnShow = this.$route.path === '/home' ? false : true
            this.getInfo()
        }
    }
</script>
<style scoped lang='less'>
    .glyphicon {
        font-size: 1rem
    }
    .glyphicon-heart:before {
        content: "\e005";
    }
    .root-enter {
        opacity:0;transform: translateX(100%);
    }
    .root-leave-to{
        opacity:0;transform: translateX(-100%);position:fixed;top:0;
    }
    .root-enter-active,
    .root-leave-active {
        transition: all .5s;
    }
    
    .app-main {
        overflow-x:hidden;
        min-height: 100%;
        width: 100%;
        background: #f0f0f0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: absolute;
        .app-view {
            min-height: 100%;
            box-sizing: border-box;
            position:relative;
        }
    }
    .app-top {
        position: fixed;
        top: 0;
        z-index: 100;
        width: 100%;
        left: 0;
        right: 0;
        text-align: center;
        height: .6rem;
        line-height: .6rem;
        color: #333;
        transition: all .2s;
        .return {
            display: block;
            position: absolute;
            left: 2%;
            top: 3%;
            width: .5rem;
            img {
                width: 100%;
            }
        }
        h1 {
            font-size: .3rem;
            color: #fff;
            margin: 0;
            line-height: .6rem;
            transition: all .2s;
            font-weight: normal;
        }
        &.active {
            background: rgba(255, 255, 255, .5);
            height: .8rem;
            line-height: .8rem;
            h1 {
                font-size: .4rem;
                color: #333;
                margin: 0;
                line-height: .8rem;
                font-weight: bold;
            }
        }
    }
    .app-bottom {
        position: fixed;
        bottom: 2%;
        z-index: 9999;
        text-align: center;
        width: 100%;
        div {
            display: inline-block;
            font-size: .6rem;
            margin-right: 1rem;
            color: #fff;
            transform: translateY(2rem);
            transition: transform .2s .1s;
            &:nth-child(2) {
                transition: transform .2s;
            }
        }
        &.active {
            div {
                transform: translateY(0);
            }
        }
    }
</style>
