<template>
    <section class="section" id="app">
        <template v-if="$_product_list_configured">
            <div class="container">

                <div class="columns is-centered is-mobile">
                    <template v-if="!products$loading">
                        <div class="column is-half-mobile is-one-third-tablet is-one-fifth-desktop is-narrow"
                             v-for="product in products">

                            <product-item :key="product.id" v-bind="product"/>
                        </div>

                    </template>
                    <template v-else>
                        <p>Carregando...</p>
                    </template>
                </div>
            </div>

        </template>
    </section>
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

<style lang="scss">

    @import "node_modules/bulma/sass/utilities/_all.sass";
    @import "node_modules/bulma/sass/base/_all.sass";
    @import "node_modules/bulma/sass/utilities/mixins";

    html, body {
        font-size: 16px;

        @include mobile() {
            font-size: 13px;
        }
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 60px 5px;
        padding: 0 5px;
        width: 100vw;
    }

    * {
        /*border: 0.5px dashed #000;*/
    }
</style>
