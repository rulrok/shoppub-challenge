<template>
    <div class="availability-widget columns is-vcentered">
        <div class="column is-narrow">
            <input
                    class="quantity-input"
                    type="text" step="1" min="1" :max="maxAvailabilityInitial"
                    v-model="selectedQuantity">
        </div>
        <div class="column is-narrow" style="padding-left: 0; padding-right: 0;">
            <div class="quantity-control-container">
                <button class="quantity-control" @click="increaseQuantity">+</button>
                <button class="quantity-control" @click="decreaseQuantity">-</button>
            </div>
        </div>
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

    $basic-input-height: 4em;

    .quantity-input {
        width: $basic-input-height;
        height: $basic-input-height;

        border: 1px solid $border-color;

        text-align: center;
    }

    $quantity-button-spacing: 0.3em;
    .quantity-control-container {
        & > button.quantity-control {

            background-color: $base-color-light;
            border: none;
            color: white;

            height: calc((#{$basic-input-height} - 2 * #{$quantity-button-spacing}) / 2);
            width: 2.5em;
            font-size: 1em;

            &:first-child {
                display: block;
                margin-bottom: $quantity-button-spacing;
            }
        }
    }

    button.add-quantity {
        width: 100%;
        height: 3.3em;

        background-color: $primary-color;
        border: none;
        color: white;
        font-size: 1.15em;
    }
</style>