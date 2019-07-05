<template>
    <div>
        <my-test :list='mylist'>
            <!-- <p>--'普通插槽,兜底'--卧槽,你搞毛啊</p> -->
            <div slot="two">--'具名插槽,two'--你麻痹,你说啥?</div>
            <template slot-scope="list">
                <li>{{list.item2}} -- {{list.index2}}</li>
                <!-- <li>{{list}}</li> -->
            </template>  
        </my-test>   
    </div>    
</template>
<script>
import MyTest from './MyTest'
export default {
    components:{
        MyTest,
    },
    data(){
        return {
            mylist : ['a','b','c']
        }
    }
}
</script>

<style>

</style>
