<template>
    <div id="app">
        <template v-if="$_product_list_configured">
            
            <product-item v-bind="products[0]" />
        </template>
    </div>
</template>

<script>
    //Components
    import ProductItem from "./components/ProductItem.vue";

    //Mixins
    import { SettingsMixin } from "./mixins/index";

    export default {
        name: "app",
        data: () => ({}),
        asyncData: {
            products: {
                get() {
                    return this.$http.get("/products.json");
                },
                default: [],
            },
        },
        mixins: [SettingsMixin],
        components: {
            ProductItem,
        },
    };
</script>

<style lang="scss">
    @import "~grd/grd.css";

    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>

<style>
    
    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    * {
        border: 1px dashed #000;
    }
</style>
