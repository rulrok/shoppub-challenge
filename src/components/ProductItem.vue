<template>
    <div class="product-item" :class="{'hover' : hover}" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
        <div class="product-item-container is-unselectable">

            <!-- Image container row -->
            <div class="product-image-gallery columns">
                <product-favourite v-if="$_show_favourite_widget"
                                   class="fav-product"
                                   :product-id="id"
                                   :is-favourite-initial="false"
                />

                <product-image v-for="image in images"
                               class="column images"
                               :key="image.cover"
                               :cover="image.cover" :hover="image.hover" :alt="title"/>

                <div class="tags" v-if="$_show_tags">
                    <product-tag v-for="tag in tags" :key="tag.label" :label="tag.label" :color="tag.color"/>
                </div>
            </div>

            <!-- Product title row -->
            <div class="columns">
                <div class="column">
                    <p class="has-text-left-mobile has-text-centered">{{title}}</p>
                </div>
            </div>

            <!-- Campaign tags row -->
            <div class="campaign-tags columns is-centered is-gapless" v-if="$_show_campaign_tags">
                <div class="column is-narrow is-10-mobile " v-for="tag in campaign_tags">
                    <campaign-tag
                            :key="tag.label"
                            :label="tag.label"
                            :color="tag.color"
                    />
                </div>
            </div>

            <!-- Product pricing row -->
            <div class="columns">
                <product-pricing
                        class="column"
                        :total-value="pricing.total_value"
                        :total-value-from="pricing.total_value_from"
                        :installments="pricing.installments"
                />
            </div>

            <!-- Attributes row -->
            <div class="attributes columns is-hidden-mobile">
                <div class="column">

                    <product-attributes
                            v-if="hover"
                            :product-id="id"
                            :attributes="attributes"
                            :widget-type="$_attribute_widget_type"
                            @selected-attributes="selectedAttributes = $event"
                    />

                </div>
            </div>

            <!-- Related products row -->
            <template v-if="$_show_related_products">
                <div class="related-products columns is-gapless is-hidden-mobile">
                    <div class="column is-full">

                        <related-products
                                v-if="hover"
                                :products="related_products"
                                :highlight_product_id="id"
                        />

                    </div>
                </div>
            </template>

            <!-- Availability row -->
            <div class="availability columns">
                <div class="column">

                    <template v-if="$_show_availability_widget">
                        <availability-widget
                                :product-id="id"
                                :is-available="availability.is_available"
                                :maxAvailabilityInitial="availability.quantity"
                                @add-product="addToCart"
                        />
                    </template>

                    <template v-else>
                        <buy-see-product
                                :product-id="id"
                                :product-name="title"
                                @add-product="addToCart"
                        />
                    </template>

                </div>
            </div>

        </div>
    </div>
</template>

<script>

    //Mixins
    import { SettingsMixin } from "../mixins";

    //Sub-components
    import AvailabilityWidget from "./AvailabilityWidget";
    import BuySeeProduct from "./BuySeeProduct";
    import CampaignTag from "./CampaignTag";
    import ProductAttributes from "./ProductAttributes";
    import ProductFavourite from "./ProductFavourite";
    import ProductImage from "./ProductImages";
    import ProductPricing from "./ProductPricing";
    import ProductTag from "./ProductTag";
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
        components: {
            AvailabilityWidget,
            BuySeeProduct,
            CampaignTag,
            ProductAttributes,
            ProductFavourite,
            ProductImage,
            ProductPricing,
            ProductTag,
            RelatedProducts,
        },
        mixins: [SettingsMixin],
        data: () => ({
            hover: false,
            selectedAttributes: [],
        }),
        methods: {
            onMouseOver() {
                this.hover = true;
            },
            onMouseLeave() {
                this.hover = false;
            },
            addToCart(quantity) {
                this.$emit("add-to-cart", {
                    id: this.id,
                    attributes: this.selectedAttributes.map(att => ({
                        id: att,
                    })),
                    quantity: quantity.quantity,
                });

                this.selectedAttributes = [];
            },
        },
    };
</script>
<style scoped lang="scss">

    @import "src/styles/variables";

    @import "node_modules/bulma/sass/utilities/_all.sass";
    @import "node_modules/bulma/sass/base/_all.sass";
    @import "node_modules/bulma/sass/utilities/mixins";

    .product-item {
        font-size: 1rem;
        max-width: 300px;

        padding: .75em;
        @include mobile() {
            padding: .35em;
        }

        border: 1px solid $border-color;
        border-radius: 5px;

        margin-left: auto;
        margin-right: auto;
    }

    @include tablet() {
        /* Float product item on hover */
        .product-item.hover {
            border: none;

            .product-item-container {

                z-index: 10000;
                position: absolute;
                background-color: white;

                margin: -.75em;
                padding: .75em;
                width: inherit;
                max-width: inherit;

                border: 1px solid $border-color;
                border-radius: 5px;

                box-shadow: 0 0 20px -3px $border-color;
            }
        }
    }


    .product-image-gallery {
        position: relative;

        .images {
            z-index: 1000;
        }

        /* Float product tags over image */
        .tags {
            z-index: 2000;
            position: absolute;
            top: .75em;
            right: .75em;
        }

        /* Float product favourite start to right side */
        .fav-product {
            z-index: 2000;
            position: absolute;
            top: .75em;
            left: .75em;
            width: 100%;
            max-width: 30px;
            height: 30px;
            @include mobile() {
                max-width: 20px;
                height: 20px;
            }
        }
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

    /* Style for toggling attributes on element not hover */
    @include tablet() {
        .product-item:not(.hover) {
            .attributes, .related-products, .availability {
                display: none;
                visibility: hidden;
                width: 0;
                height: 0;
            }
        }
    }
</style>