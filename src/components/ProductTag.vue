<template>
    <div class="product-tag" :style="`background-color: ${color};`">
        <strong class="has-text-centered is-uppercase">{{label}}</strong>
    </div>
</template>

<script>
    export default {
        name: "ProductTag",
        props: {
            label: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                default: "#CCC",
            },
        },
    };
</script>

<style scoped>
    .product-tag {
        font-size: .75em;

        width: 3.9em;
        height: 3.9em;

        /* Vertical center text - parent */
        display: table;
    }
    
    .product-tag strong {
        /* Vertical center text - child */
        display: table-cell;
        vertical-align: middle;
        
        color: white;
        padding: .35em;
    }

    .product-tag + .product-tag {
        /* Vertical spacing for multiple tags */
        margin-top: .35em;
    }
</style>