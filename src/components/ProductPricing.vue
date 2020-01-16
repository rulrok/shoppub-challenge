<template>
    <div class="product-pricing">

        <template v-if="hasDiscount">
            <div class="price-line">
                <div class="columns is-centered is-variable is-1">
                    <div class="column is-narrow">
                        <p class="grayed-out-text">de <s>{{totalValueFrom | formatPrice}}</s></p>
                    </div>
                    <div class="column is-narrow">
                        <p>por <span class="destak-price">{{installments.total_value | formatPrice}}</span></p>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="hasInstallments">
            <div class="installments-line">
                <div class="columns is-centered is-gapless is-vcentered">
                    <p>
                        <span class="is-hidden-mobile">ATÉ&nbsp;</span>
                        <span class="destak-color">{{installments.quantity}}X</span>
                        &nbsp;DE&nbsp;
                        <span class="destak-color">{{installments.installment_value | formatPrice}}</span>
                    </p>
                </div>
            </div>
        </template>

        <div class="cash-down-line">
            <p class="has-text-left-mobile has-text-centered">
                <span class="destak-price">{{totalValue | formatPrice}}</span> à vista
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductPricing",
        props: {
            totalValue: {
                type: Number,
                required: true,
            },
            totalValueFrom: {
                type: Number,
                required: true,
            },
            installments: {
                type: Object,
                default: () => ({
                    quantity: 1,
                    installment_value: 0.0,
                    total_value: 0.0,
                }),
            },
        },
        computed: {
            hasDiscount() {
                return this.totalValue !== this.totalValueFrom;
            },
            hasInstallments() {
                return this.installments.quantity > 1;
            },
        },
        filters: {
            formatPrice(price) {
                return new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(price);
            },
        },
    };
</script>

<style scoped lang="scss">
    @import "src/styles/variables";
    @import "node_modules/bulma/sass/utilities/_all.sass";
    @import "node_modules/bulma/sass/base/_all.sass";
    @import "node_modules/bulma/sass/utilities/mixins";

    /* Line height and margin between sections */
    .product-pricing > div {
        line-height: 1.35em;
        margin: .2em 0;

        @include mobile() {
            /* On mobile size, align text on left */
            text-align: left;

            .columns.is-variable.is-1 {
                :first-child {
                    padding-bottom: 0;
                }

                :last-child {
                    padding-top: 0;
                }
            }
        }
    }

    .grayed-out-text {
        color: $base-color-light;
    }

    .destak-price {
        font-size: 1.3em;
        vertical-align: middle;
        color: $destak-color;
    }

    .destak-color {
        color: $destak-color;
    }
</style>