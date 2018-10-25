<template>
    <div class='home-main'>
        <ul>
            <li v-for='(item,i) in info' :key='item.id' v-if='item.thumb'>
                <div>
                    <img :src="item.thumb" alt="" @click='photoShow(i,"show")'>
                    <!-- <div :class='["imgView",item.show?"show":""]' ref='photo'>
                                <i class='close' v-show='item.show' @click='photoShow(i,"close")'>×</i>
                                <img :src="item.thumb" alt="">
                            </div> -->
                </div>
                <div class='content'>
                    <p>{{ item.title }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import $ from '../js/common.js'
    export default {
        data() {
            return {
                info: [],
                sendData: {
                    showapi_appid: $.id,
                    showapi_sign: $.siginture,
                    showapi_timestamp: $.time_stamp,
                    type: 35
                },
            }
        },
        methods: {
            photoShow(i, type) {
                switch (type) {
                    case 'show':
                        this.info[i].show = true
                        break
                    default:
                        this.info[i].show = false
                }
            },
            getInfo() {
                this.$axios({
                    method: 'post',
                    url: $.hburl,
                    data: this.sendData,
                    transformRequest(data) {
                        let arr = []
                        for (let key in data) {
                            arr.push(`${key}=${data[key]}`)
                        }
                        return arr.join('&')
                    }
                }).then(response => {
                    console.log('loading...')
                    this.info = response.data.showapi_res_body
                    let arr = []
                    for (let key in this.info) {
                        arr.push(this.info[key])
                    }
                    arr.splice(-1, 1)
                    arr.map((val, i, arr) => {
                        this.$set(arr[i], 'id', i)
                        this.$set(arr[i], 'show', false)
                    })
                    this.info.concat(arr)
                }).catch(err => {
                    alert(String(err))
                })
            }
        },
        created() {
            this.getInfo()
        }
    }
</script>
<style scoped lang='less'>
    .home-main {
        padding-top: 1rem;
        background: rgba(0, 0, 0, .5);
        min-height: 100%;
        width: 100%;
        box-sizing: border-box;
        ul {
            width: 90%;
            margin: 0 auto;
            font-size: 0;
            column-count: 2;
            column-gap: 5%;
            li {
                break-inside: avoid;
                display: inline-block;
                width: 100%;
                vertical-align: top;
                margin-bottom: 10%;
                img {
                    width: 100%;
                    display: block;
                }
                div {
                    position: relative;
                    p {
                        font-size: .35rem;
                        line-height: .5rem;
                        margin: 0;
                    }
                    .imgView {
                        position: absolute;
                        width: 0;
                        top: 0;
                        left: 0;
                        z-index: 10;
                        .close {
                            font-size: .4rem;
                            color: #fff;
                            font-style: normal;
                            position: absolute;
                            right: 5%;
                            top: 2%;
                            font-weight: bold;
                            z-index: 999999;
                        }
                        img {
                            left: 0;
                            &:nth-child(even) {
                                right: 0;
                            }
                        }
                        &.show {
                            position: fixed;
                            width: 100%;
                            height: 100%;
                            background: #000;
                            z-index: 999;
                            transition: all .3s;
                            img {
                                position: absolute;
                                width: 90%;
                                left: 50%;
                                right: 50%;
                                top: 50%;
                                transform-origin: 0 0;
                                transform: translate(-50%, -50%); // transition: all .3s;
                            }
                        }
                    }
                }
                .content {
                    background: #fff;
                    padding: .3rem .2rem
                }
            }
        }
    }
</style>
