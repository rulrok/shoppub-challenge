<template>
    <div class="product-tag" :style="`background-color: ${color}; color: white;`">
        {{label}}
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
        padding: 7px;
        max-width: 150px;
    }
</style>