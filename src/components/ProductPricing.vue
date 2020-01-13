<template>
    <main class="product-pricing">

        <template v-if="hasDiscount">
            <section class="price-line">
                <div class="columns is-centered is-variable is-1">
                    <div class="column is-narrow">
                        <p class="grayed-out-text">de <s>R${{totalValueFrom}}</s></p>
                    </div>
                    <div class="column is-narrow">
                        <p>por <span class="destak-price">R${{installments.total_value}}</span></p>
                    </div>
                </div>
            </section>
        </template>

        <template v-if="hasInstallments">
            <section class="installments-line">
                <div class="columns is-centered is-gapless is-vcentered">
                    <p>
                        <span class="is-hidden-mobile">ATÉ&nbsp;</span>
                        <span class="destak-color">{{installments.quantity}}X</span>
                        &nbsp;DE&nbsp;
                        <span class="destak-color">R${{installments.installment_value}}</span>
                    </p>
                </div>
            </section>
        </template>

        <section class="cash-down-line">
            <p><span class="destak-price">R${{totalValue}}</span> à vista</p>
        </section>
    </main>
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
    };
</script>

<style scoped lang="scss">
    @import "src/styles/variables";
    @import "node_modules/bulma/sass/utilities/_all.sass";
    @import "node_modules/bulma/sass/base/_all.sass";
    @import "node_modules/bulma/sass/utilities/mixins";

    /* Line height and margin between sections */
    main > section {
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