<template>
    <main id="app">
        <template v-if="$_product_list_configured">

            <section class="columns is-mobile">
                <template v-if="!products$loading">
                    <product-item class="column is-half-mobile is-one-third-desktop" v-for="product in products" :key="product.id" v-bind="product"/>
                </template>
                <template v-else>
                    <p>Carregando...</p>
                </template>
            </section>

        </template>
    </main>
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
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    @import "src/styles/custom-bulma";
    @import "src/styles/variables";

    * {
        color: $base-color-dark;
    }
</style>

<style>
    html, body {
        font-size: 14px;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    * {
        /*border: 1px dashed #000;*/
    }
</style>
