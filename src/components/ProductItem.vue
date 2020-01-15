<template>
    <main class="product-item" :class="{'hover' : hover}" @mouseover="onMouseOver" @mouseleave="onMouseLeave">

        <section class="product-image-gallery columns">
            <product-favourite v-if="$_show_favourite_widget" class="fav-product" :product-id="id" :is-favourite-initial="false"/>

            <product-image v-for="image in images"
                           class="column"
                           :key="image.cover"
                           :cover="image.cover" :hover="image.hover" :alt="title"/>

            <div class="tags" v-if="$_show_tags">
                <product-tag v-for="tag in tags" :key="tag.label" :label="tag.label" :color="tag.color"/>
            </div>
        </section>

        <section class="columns">
            <div class="column">
                <p>{{title}}</p>
            </div>
        </section>

        <section v-if="$_show_campaign_tags" class="columns is-mobile is-centered is-5">
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

        <!-- This section will only be used for hover component -->
        <section class="attributes">
            <div class="columns is-centered">
                <product-attribute
                        class="column is-narrow"
                        v-for="attribute in attributes" :id="attribute.id" :label="attribute.label"/>
            </div>
        </section>
        
        <section class="related-products">
            <related-products :products="related_products" :highlight_product_id="id" />
        </section>
    </main>
</template>
<script>

    //Sub-components
    import ProductImage from "./ProductImages";
    import CampaignTag from "./CampaignTag";
    import ProductTag from "./ProductTag";
    import ProductPricing from "./ProductPricing";
    import ProductFavourite from "./ProductFavourite";

    //Mixins
    import { SettingsMixin } from "../mixins";
    import ProductAttribute from "./ProductAttribute";
    import RelatedProducts from "./RelatedProducts";

    export default {
        props: {
            id: {
                type: Number,
                required: true,
            },
            title: String,
            images: Array,
            tags: Array,
            attributes: Array,
            campaign_tags: Array,
            related_products: Array,
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
        components: {RelatedProducts, ProductAttribute, ProductFavourite, ProductPricing, ProductTag, CampaignTag, ProductImage},
        mixins: [SettingsMixin],
        data: () => ({
            //TODO set to false
            hover: true,
        }),
        methods: {
            onMouseOver(){
                //TODO remove return
                return;
                this.hover = true;
            },
            onMouseLeave(){
                //TODO remove return
                return;
                this.hover = false;
            }
        }
    };
</script>
<style scoped lang="scss">

    @import "src/styles/variables";

    .product-item {
        font-size: 1rem;
        max-width: 300px;

        margin: .75em;
        padding: 10px;

        border: 1px solid $border-color;
        border-radius: 5px;
    }

    .product-image-gallery {
        position: relative;
    }

    /* Float product tags over image */
    .product-image-gallery .tags {
        position: absolute;
        top: .75em;
        right: .75em;
    }

    /* Float product favourite start to right side */
    .product-image-gallery .fav-product {
        position: absolute;
        top: .75em;
        left: .75em;
    }
    
</style>

<style>
    /* Style for toggling attributes on element hover */

    .product-item .attributes {
        display: none;
    }

    .product-item.hover .attributes {
        display: initial;
    }
</style>