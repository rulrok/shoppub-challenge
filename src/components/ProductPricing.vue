<template>
    <div class="product-pricing">
        <template v-if="hasDiscount">
            <p class="price-line">
                <span class="grayed-out-text">de <s>R${{totalValueFrom}}</s></span> por <span class="destak-price">R${{installments.total_value}}</span>
            </p>
        </template>
        
        <template v-if="hasInstallments">
            <p class="installments-line">
                ATÉ <span class="destak-color">{{installments.quantity}}X</span> DE <span class="destak-color">R${{installments.installment_value}}</span>
            </p>
        </template>
        
        <p class="cash-down-line">
            <span class="destak-price">R${{totalValue}}</span> à vista
        </p>
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
            hasInstallments(){
                return this.installments.quantity > 1;
            }
        },
    };
</script>

<style scoped lang="scss">
    @import "src/variables";

    .product-pricing p {
        margin: .2em 0;
        line-height: 1em;
        
        > * {
            vertical-align: baseline;
        }
    }

    .grayed-out-text {
        color: $base-color-light;
    }

    .destak-price {
        font-size: 1.3em;
        color: $destak-color;
    }

    .destak-color {
        color: $destak-color;
    }
</style>