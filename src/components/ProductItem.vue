<template>
    <div>
        <product-images/>

        <CampaignTag v-for="tag in campaign_tags" :key="tag.label" :label="tag.label" :color="tag.color"/>

        <p>{{title}}</p>

        <ProductTag v-for="tag in tags" :key="tag.label" :label="tag.label" :color="tag.color" />
    </div>
</template>
<script>
    import ProductImages from "./ProductImages";
    import CampaignTag from "./CampaignTag";
    import ProductTag from "./ProductTag";

    export default {
        props: {
            id: Number,
            title: String,
            images: Array,
            tags: Array,
            campaign_tags: Array
        },
        components: {ProductTag, CampaignTag, ProductImages},
    };
</script>