<template>
    <div class="product-item" :class="{'hover' : hover}" @mouseover="hover = true" @mouseleave="hover = false">

        <section class="product-image-gallery columns">
            <product-favourite class="fav-product" :product-id="id" :is-favourite-initial="false" />
            
            <product-image v-for="image in images"
                           :key="image.cover"
                           :cover="image.cover" :hover="image.hover" :alt="title"/>

            <div class="tags">
                <product-tag v-for="tag in tags" :key="tag.label" :label="tag.label" :color="tag.color"/>
            </div>
        </section>

        <section class="columns">
            <div class="column">
                <p>{{title}}</p>
            </div>
        </section>

        <section class="columns is-mobile is-centered is-5">
            <campaign-tag
                    class="column is-narrow"
                    v-for="tag in campaign_tags"
                    :key="tag.label"
                    :label="tag.label"
                    :color="tag.color"/>
        </section>
        
        <section class="columns">
            <product-pricing
                    class="column"
                    :total-value="pricing.total_value"
                    :total-value-from="pricing.total_value_from"
                    :installments="pricing.installments"
            />
        </section>
    </div>
</template>
<script>
    import ProductImage from "./ProductImages";
    import CampaignTag from "./CampaignTag";
    import ProductTag from "./ProductTag";
    import ProductPricing from "./ProductPricing";
    import ProductFavourite from "./ProductFavourite";

    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            title: String,
            images: Array,
            tags: Array,
            campaign_tags: Array,
            pricing: {
                type: Object,
                default: () => ({
                    total_value: 0.0,
                    total_value_from: 0.0,
                    installments: {
                        quantity: 1,
                        installment_value: 0.0,
                        total_value: 0.0,
                    },
                }),
            },
        },
        components: {ProductFavourite, ProductPricing, ProductTag, CampaignTag, ProductImage},
        data: () => ({
            hover: false
        }),
    };
</script>
<style scoped>
    .product-item {
        font-size: 1rem;
        max-width: 300px;

        padding: 10px;
    }

    .product-image-gallery {
        position: relative;
    }

    /* Float product tags over image */
    .product-image-gallery .tags {
        position: absolute;
        top: .35em;
        right: .35em;
    }
    
    /* Float product favourite start to right side */
    .product-image-gallery .fav-product {
        position: absolute;
        top: .35em;
        left: .35em;
    }

    /*.campaign-tags > .campaign-tag + .campaign-tag {*/
    /*    margin-left: .35em;*/
    /*}*/
</style>