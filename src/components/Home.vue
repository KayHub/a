<template>
    <div class='home-main'>
        <ul>
            <li v-for='item in info' :key='item.id'><img :src="item.thumb" alt=""></li>
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
                    showapi_timestamp: $.time_stamp
                }
            }
        },
        methods: {
            getInfo() {
                console.log(this.sendData)
                this.$axios({
                    method: 'post',
                    url: $.url,
                    data: this.sendData,
                    transformRequest(data) {
                        let arr = []
                        for (let key in data) {
                            arr.push(`${key}=${data[key]}`)
                        }
                        return arr.join('&')
                    }
                }).then(response => {
                    this.info = response.data.showapi_res_body
                    this.info = this.info.map((val, i) => {
                        return val.index = i
                    })
                    console.log(this.info)
                }).catch(err => {
                    console.log(err)
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
        position: absolute;
        width: 100%;
        box-sizing: border-box;
        ul{
            width:90%;margin:0 auto;font-size:0;
            li{
                display:inline-block;
                width:40%;
                &:nth-child(odd){
                    margin-right:10%;
                }
                img{
                    width:100%;
                }
            }
        }
    }
</style>
