<template>
    <div class="columns is-vcentered is-gapless">

        <!-- Left side -->
        <div class="column is-narrow is-1">
            <button @click="goPrev">
                <icon-arrow-left/>
            </button>
        </div>

        <!-- Carousel container -->
        <div class="column is-10">
            <agile ref="carousel" 
                   :dots="false" 
                   :navButtons="false" 
                   :slidesToShow="3"
            >
                <div class="slide" v-for="prod in products" :key="prod.id">
                    <figure class="image is-square" :class="{'highlighted': is_highlighted(prod.id) }">
                        <img :src="prod.image" :alt="prod.title">
                    </figure>
                </div>
            </agile>
        </div>

        <!-- Right side -->
        <div class="column is-narrow is-1">
            <button @click="goNext">
                <icon-arrow-right/>
            </button>
        </div>
    </div>
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
    };
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    .highlighted {
        border-radius: 5px;
        border: 2px solid $destak-color;
    }

    /* Remove prev/next buttons styles */
    button {
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
    }
</style>