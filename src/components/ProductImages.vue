<template>
    <div>
        <figure class="product-image image is-square">
            <img class="cover" :src="cover" :alt="alt">
            <img class="hover" :src="hover" :alt="alt">
        </figure>
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
                default: "Imagem do produto",
            },
        },
        name: "ProductImage",
    };
</script>

<style scoped lang="scss">
    /* Use the parent .product-item.hover to determine image to display */

    /* By default we are not hovering the content */
    img.hover {
        display: none;
    }

    .product-item.hover .product-image {
        > img.cover {
            display: none;
        }

        > img.hover {
            display: initial;
        }
    }
</style>