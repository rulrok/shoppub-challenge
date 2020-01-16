<template>
    <div class="product-item" :class="{'hover' : hover}" @mouseover="onMouseOver" @mouseleave="onMouseLeave">

        <div class="product-image-gallery columns">
            <product-favourite v-if="$_show_favourite_widget" class="fav-product" :product-id="id" :is-favourite-initial="false"/>

            <product-image v-for="image in images"
                           class="column"
                           :key="image.cover"
                           :cover="image.cover" :hover="image.hover" :alt="title"/>

            <div class="tags" v-if="$_show_tags">
                <product-tag v-for="tag in tags" :key="tag.label" :label="tag.label" :color="tag.color"/>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <p class="has-text-left-mobile has-text-centered">{{title}}</p>
            </div>
        </div>

        <div class="campaign-tags columns is-centered is-gapless" v-if="$_show_campaign_tags">
            <div class="column is-narrow is-10-mobile " v-for="tag in campaign_tags">
                <campaign-tag
                        :key="tag.label"
                        :label="tag.label"
                        :color="tag.color"/>
            </div>
        </div>

        <div class="columns">
            <product-pricing
                    class="column"
                    :total-value="pricing.total_value"
                    :total-value-from="pricing.total_value_from"
                    :installments="pricing.installments"
            />
        </div>

        <availability-widget
                :product-id="id"
                :is-available="availability.is_available"
                :maxAvailabilityInitial="availability.quantity"/>

        <!-- This section will only be used for hover component -->
        <div class="attributes columns is-centered is-mobile">
            <product-attribute
                    class="column is-narrow"
                    v-for="attribute in attributes" :key="attribute.id" :id="attribute.id" :label="attribute.label"/>
        </div>

        <div class="related-products">
            <related-products :products="related_products" :highlight_product_id="id"/>
        </div>
    </div>
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
    import AvailabilityWidget from "./AvailabilityWidget";

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
            availability: Object,
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
        components: {AvailabilityWidget, RelatedProducts, ProductAttribute, ProductFavourite, ProductPricing, ProductTag, CampaignTag, ProductImage},
        mixins: [SettingsMixin],
        data: () => ({
            //TODO set to false
            hover: true,
        }),
        methods: {
            onMouseOver() {
                //TODO remove return
                return;
                this.hover = true;
            },
            onMouseLeave() {
                //TODO remove return
                return;
                this.hover = false;
            },
        },
    };
</script>
<style scoped lang="scss">

    @import "src/styles/variables";

    .product-item {
        font-size: 1rem;
        max-width: 300px;

        margin: .25em;
        padding: .75em;

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

    .campaign-tags.columns {
        /* We make the columns gapless and adjust spacing here */

        .column {
            margin-bottom: .35em;
            margin-right: .35em;
        }

        .column:last-child {
            margin-right: 0;
        }
    }

</style>

<style lang="scss">
    /* Style for toggling attributes on element not hover */

    .product-item:not(.hover) {
        .attributes, .related-products {
            display: none;
        }
    }
</style>