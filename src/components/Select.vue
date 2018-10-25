<template>
    <div class='select-main'>
        <ul :class="{'active':listShow}">
            <li>
                <router-link to='/select/content/34/' tag='div'>
                    <p>
                        Large
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='/select/content/35/' tag='div'>
                    <p>
                        Fresh
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='/select/content/36/' tag='div'>
                    <p>
                        Liter
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='/select/content/37/' tag='div'>
                    <p>
                        Sexy
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='/select/content/38/' tag='div'>
                    <p>
                        Legged
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='/select/content/39/' tag='div'>
                    <p>
                        Silk
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='/select/content/40/' tag='div'>
                    <p>
                        Buttocks
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='' tag='div'>
                    <p>
                        More
                    </p>
                </router-link>
            </li>
            <li>
                <div @click='returnIndex'>
                    <p>
                        return
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                info: {},
                listShow: false,
            }
        },
        methods: {
            returnIndex() {
                this.$router.go(-1)
            }
        },
        created() {
            setTimeout(() => {
                this.listShow = true
            }, 49)
        }
    }
</script>
<style scoped lang='less'>
    .select-main {
        padding-top: 1rem;
        overflow: hidden;
        ul {
            text-align: center;
            width: 60%;
            margin: 0 auto;
            padding-top: 1.5rem;
        }
        ul li {
            display: inline-block;
            margin-bottom: .8rem;
            transition: all .4s;
            transform: translateY(20rem);
            &:nth-child(odd) {
                margin-right: 10%;
                transition: all .4s .15s;
            }
            &:last-child {
                margin-right: 0;
            }
            &:nth-child(1) div {
                background: #F1B04E;
            }
            &:nth-child(2) div {
                background: #F06060;
            }
            &:nth-child(3) div {
                background: #86D3CD;
            }
            &:nth-child(4) div {
                background: #A2CC5C;
            }
            &:nth-child(5) div {
                background: #4CAD9C;
            }
            &:nth-child(6) div {
                background: #F06060;
            }
            &:nth-child(7) div {
                background: #86D3CD;
            }
            &:nth-child(8) div {
                background: #F2B04F;
            }
            &:nth-child(9) div {
                background: #A2CC5C;
            }
            div {
                width: 1.8rem;
                height: 1.8rem;
                border-radius: 50%;
                text-align: center;
                p {
                    line-height: 1.8rem;
                    font-size: .38rem;
                    color: #fff;
                    letter-spacing: 1px;
                    margin: 0;
                }
            }
        }
        ul.active li {
            transform: translateY(0)
        }
    }
</style>
