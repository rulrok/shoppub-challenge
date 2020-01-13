<template>
    <div class="product-item">

        <div class="product-image-gallery">
            <product-image v-for="image in images" :cover="image.cover" :hover="image.hover" :alt="title"/>

            <div class="tags">
                <product-tag v-for="tag in tags" :key="tag.label" :label="tag.label" :color="tag.color"/>
            </div>
        </div>


        <p>{{title}}</p>

        <div class="campaign-tags Grid -center">
            <campaign-tag v-for="tag in campaign_tags" :key="tag.label" :label="tag.label" :color="tag.color"/>
        </div>
    </div>
</template>
<script>
    import ProductImage from "./ProductImages";
    import CampaignTag from "./CampaignTag";
    import ProductTag from "./ProductTag";

    export default {
        props: {
            id: Number,
            title: String,
            images: Array,
            tags: Array,
            campaign_tags: Array,
        },
        components: {ProductTag, CampaignTag, ProductImage},
    };
</script>
<style scoped>
    .product-item {
        font-size: 1rem;
        max-width: 300px;
    }

    .product-image-gallery {
        position: relative;
        background-color: #D1EFFF;
    }

    /* Float product tags over image */
    .product-image-gallery .tags {
        position: absolute;
        top: 0;
        right: 0;
    }
    
    .campaign-tags > .campaign-tag + .campaign-tag {
        margin-left: 5px;
    }
</style>