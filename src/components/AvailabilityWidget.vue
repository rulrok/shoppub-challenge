<template>
    <div class="availability-widget columns is-gapless">
        <!-- non-mobile input left side -->
        <div class="column is-narrow is-hidden-mobile">
            <input
                    class="quantity-input"
                    type="text" step="1" min="1" :max="maxAvailability"
                    v-model="selectedQuantity">
        </div>

        <!-- increase/decrease controls -->
        <div class="column is-2-tablet is-full-mobile">
            <div class="quantity-control-container">
                <div class="columns is-gapless is-mobile is-multiline">
                    <div class="column is-full-tablet is-3-mobile">
                        <button class="quantity-control is-hidden-mobile" @click="increaseQuantity">+</button>
                        <button class="quantity-control mobile-quantity-control is-hidden-tablet" @click="decreaseQuantity">-</button>
                    </div>
                    <div class="column is-hidden-tablet">
                        <input class="mobile-quantity-input" type="text" step="1" min="1" :max="maxAvailability" v-model="selectedQuantity">
                    </div>
                    <div class="column is-full-tablet is-3-mobile">
                        <button class="quantity-control is-hidden-mobile" @click="decreaseQuantity">-</button>
                        <button class="quantity-control mobile-quantity-control is-hidden-tablet" @click="increaseQuantity">+</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add button right/bottom side -->
        <div class="column">
            <button class="add-quantity" @click="addQuantity">ADICIONAR</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AvailabilityWidget",
        props: {
            productId: {
                type: Number,
                required: true,
            },
            isAvailable: {
                type: Boolean,
                required: true,
            },
            maxAvailabilityInitial: {
                type: Number,
                required: true,
            },
        },
        data: function () {
            return {
                selectedQuantity: 1,
                maxAvailability: this.maxAvailabilityInitial,
            };
        },
        methods: {
            increaseQuantity() {
                this.selectedQuantity = Math.min(this.maxAvailability, this.selectedQuantity + 1);
            },
            decreaseQuantity() {
                this.selectedQuantity = Math.min(this.maxAvailability, Math.max(1, this.selectedQuantity - 1));
            },
            addQuantity() {

                if (this.selectedQuantity > 0) {

                    this.$emit("add-product", {productId: this.productId, quantity: this.selectedQuantity});

                    this.maxAvailability -= this.selectedQuantity;
                    this.selectedQuantity = Math.min(this.maxAvailability, 1);
                }

                if (this.maxAvailability === 0) {
                    this.$emit("product-unavailable", {productId: this.productId});
                    this.selectedQuantity = 0;
                }
            },
        },
    };
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    @import "node_modules/bulma/sass/utilities/_all.sass";
    @import "node_modules/bulma/sass/base/_all.sass";
    @import "node_modules/bulma/sass/utilities/mixins";

    button {
        cursor: pointer;
    }
    
    $spacing: .33em;
    $basic-input-height: 3.3em + $spacing;
    $mobile-input-height: 2em;

    .availability-widget {
        max-height: $basic-input-height;
    }

    .availability-widget .column.is-2-tablet > .quantity-control-container > .columns > .column.is-hidden-tablet {
        /* Spacing for number input on mobile size */
        padding: 0 $spacing !important;
    }

    .quantity-input {
        width: $basic-input-height;
        height: $basic-input-height;
    }

    .mobile-quantity-input {
        width: 100%;
        height: $mobile-input-height;
    }

    .mobile-quantity-control {
        height: $mobile-input-height !important;
    }

    .quantity-input, .mobile-quantity-input {
        border: 1px solid $border-color;
        text-align: center;
    }

    .quantity-control-container {

        @include tablet() {
            margin-left: $spacing;
            margin-right: $spacing;
        }

        @include mobile() {
            margin-bottom: $spacing;
        }

        button.quantity-control {

            background-color: $base-color-light;
            border: none;
            color: white;

            height: calc((#{$basic-input-height} - 2 * #{$spacing}) / 2);
            width: 100%;
            font-size: 1em;
            text-align: center;

        }
    }

    button.add-quantity {
        width: 100%;
        height: $basic-input-height;
        @include mobile() {
            height: $mobile-input-height * 1.5;
        }
        background-color: $primary-color;
        border: none;
        color: white;
        text-align: center;
    }
</style>