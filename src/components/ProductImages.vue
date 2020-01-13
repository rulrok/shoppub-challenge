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

</style>