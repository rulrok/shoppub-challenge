<template>
    <div>
        <img :src="cover" :alt="alt">
    </div>
</template>

<script>
    export default {
        props: {
            cover: {
                type: String,
                required: true,
            },
            hover: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                default: "Imagem do producto"
            }
        },
        name: "ProductImage",
    };
</script>

<style scoped>
    
    /* Both styles will create a responsive square image */
    
    img {
        width: 100%;
    }
    
    img:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
</style>