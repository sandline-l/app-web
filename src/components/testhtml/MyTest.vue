<template>
    <div>
        test
        <!-- <slot></slot> -->
        <slot name="two"></slot>
        <ul>
            <slot v-for="(item,index) in list"
                :index2 = 'index'
                :item2 = 'item'
            >
            </slot>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        list:Array
    }
}
</script>

<style>

</style>
