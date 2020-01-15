<template>
    <main class="columns">
        <div class="column" v-for="prod in products" :key="prod.id">
            <figure class="image is-48x48" :class="{'highlighted': is_highlighted(prod.id) }">
                <img :src="prod.image" :alt="prod.title">
            </figure>
        </div>
    </main>
</template>

<script>
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
        methods: {
            is_highlighted(productId) {
                
                return Number(productId) === Number(this.highlight_product_id);
            },
        },
    };
</script>

<style scoped lang="scss">
    @import "src/styles/variables";
    
    .highlighted{
        border: 2px solid $destak-color;
        border-radius: 5px;
    }
</style>