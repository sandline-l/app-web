<template>
    <div class="footer">
        <footer-nav></footer-nav>
        <footer-link></footer-link>
        <footer-msg></footer-msg>
    </div>
</template>

<script>

import FooterLink from './footerlink';
import FooterMsg from './footermsg';
import FooterNav from './footernav';



export default {
    components:{
        FooterLink,
        FooterMsg,
        FooterNav
    }
}
</script>

<style lang='scss'>
@import '@/assets/css/footer/footer.scss';
</style>
