<template>
    <main>
        <template v-if="display_as_carousel">
            <div class="columns is-mobile is-vcentered">
                <div class="column is-paddingless is-marginless">
                    <button @click="goPrev">
                        <icon-arrow-left/>
                    </button>
                </div>
                <div class="column is-four-fifths is-paddingless is-marginless">
                    <agile ref="carousel" :dots="false" :navButtons="false" :slidesToShow="3">
                        <div class="slide" v-for="prod in products" :key="prod.id">
                            <figure class="image" :class="{'highlighted': is_highlighted(prod.id) }">
                                <img :src="prod.image" :alt="prod.title">
                            </figure>
                        </div>
                    </agile>
                </div>
                <div class="column is-paddingless is-marginless">
                    <button @click="goNext">
                        <icon-arrow-right/>
                    </button>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="columns">
                <div class="column is-one-third" v-for="prod in products" :key="prod.id">
                    <figure class="image" :class="{'highlighted': is_highlighted(prod.id) }">
                        <img :src="prod.image" :alt="prod.title">
                    </figure>
                </div>
            </div>
        </template>
    </main>
</template>

<script>
    //Carousel
    import { VueAgile } from "vue-agile";

    //SVGs
    import IconArrowRight from "../assets/icon-arrow-right.svg?inline";
    import IconArrowLeft from "../assets/icon-arrow-left.svg?inline";

    export default {
        name: "RelatedProducts",
        props: {
            products: {
                type: Array,
                required: true,
            },
            highlight_product_id: {
                type: Number,
                required: false,
            },
        },
        components: {
            agile: VueAgile,
            IconArrowLeft,
            IconArrowRight,
        },
        methods: {
            is_highlighted(productId) {

                return Number(productId) === Number(this.highlight_product_id);
            },
            goPrev() {
                this.$refs.carousel.goToPrev();
            },
            goNext() {
                this.$refs.carousel.goToNext();
            },
        },
        computed: {
            display_as_carousel() {
                return this.products.length > 3;
            },
        },
    };
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    .highlighted {
        border: 2px solid $destak-color;
        border-radius: 5px;
        margin: 5px;
    }

    /* Remove prev/next buttons styles */
    button {
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
    }
</style>