<template>
    <div id="app">
        <template v-if="$_product_list_configured">
            <ul>
                
            </ul>
        </template>
    </div>
</template>

<script>
    import ProductItem from "./components/ProductItem.vue";

    //Mixins
    import { SettingsMixin } from "./mixins/index";

    export default {
        name: "app",
        mixins: [SettingsMixin],
        components: {
            ProductItem,
        },
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
