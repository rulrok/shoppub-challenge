<template>
    <div class="product-tag" :style="`background-color: ${color}; color: white;`">
        <strong>{{label}}</strong>
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
        font-size: 1em;
        
        width: 46px;
        height: 46px;

        /* Vertical center text - parent */
        display: table;
    }
    
    .product-tag strong {
        /* Vertical center text - child */
        display: table-cell;
        vertical-align: middle;
    }
    
    .product-tag + .product-tag {
        /* Vertical spacing for multiple tags */
        margin-top: 5px;
    }
</style>