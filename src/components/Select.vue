<template>
    <div class='select-main'>
        <ul>
            <li>
                <router-link to='/select/content' tag='div'>
                    <p>
                        选项
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='' tag='div'>
                    <p>
                        选项
                    </p>
                </router-link>
            </li>
           <li>
                <router-link to='/select/content' tag='div'>
                    <p>
                        选项
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='' tag='div'>
                    <p>
                        选项
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='/select/content' tag='div'>
                    <p>
                        选项
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='' tag='div'>
                    <p>
                        选项
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='/select/content' tag='div'>
                    <p>
                        选项
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='' tag='div'>
                    <p>
                        选项
                    </p>
                </router-link>
            </li>
            <li>
                <router-link to='/select/content' tag='div'>
                    <p>
                        选项
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    
</script>
<style scoped lang='less'>
    .select-main{
        padding-top:1rem;
        ul{
            text-align:center;
            width:60%;margin:0 auto;padding-top:1.5rem;
        }
        ul li{
            display:inline-block;margin-bottom:.8rem;
            &:nth-child(odd){
                margin-right:10%;
            }
            &:last-child{
                margin-right:0;
            }
            &:nth-child(1) div{
                background:#F1B04E;
            }
            &:nth-child(2) div{
                background:#F06060;
            }
            &:nth-child(3) div{
                background:#86D3CD;
            }
            &:nth-child(4) div{
                background:#A2CC5C;
            }
            &:nth-child(5) div{
                background:#4CAD9C;
            }
            &:nth-child(6) div{
                background:#F06060;
            }
            &:nth-child(7) div{
                background:#86D3CD;
            }
            &:nth-child(8) div{
                background:#F2B04F;
            }
            &:nth-child(9) div{
                background:#A2CC5C;
            }
            div{
                width:1.8rem;height:1.8rem;border-radius:50%;text-align:center;
                p{
                    line-height:1.8rem;font-size:.47rem;color:#fff;letter-spacing: 1px;margin:0;
                }
            }
        }
    }
</style>
