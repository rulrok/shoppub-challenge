<template>
    <div class="product-attribute">
        <p>{{label}}</p>
    </div>
</template>

<script>
    export default {
        name: "ProductAttribute",
        props: {
            id: {
                type: Number,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    .product-attribute {
        border: 1px solid $border-color;

        font-size: .75em;
        
        margin: 0.2em;
        padding: 0.5em;
        
        p {
            width: inherit;
            height: auto;
        }

    }
</style>