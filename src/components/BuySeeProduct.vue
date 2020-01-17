<template>
    <div class="columns is-gapless">
        <div class="column is-three-fifths">
            <button class="buy-button is-uppercase" @click="add_product">Comprar</button>
        </div>
        <div class="column is-hidden-mobile">
            <a :href="productUrl" class="see-button">
                <button tabindex="-1" class="see-button is-uppercase">Ver</button>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BuySeeProduct",
        props: {
            productId: {
                type: Number,
                required: true,
            },
            productName: {
                type: String,
                required: true,
            },
        },
        methods: {
            addProduct() {
                this.$emit("add-product", {id: this.productId, quantity: 1});
            },
            slugString(input) {
                return (input || "") && input.toLowerCase().replace(/\s+/ig, "-");
            },
        },
        computed: {
            productUrl() {
                return `/produto/${this.productId}/${this.slugString(this.productName)}`;
            },
        },
    };
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    .columns {

        > .column:last-child {
            margin-left: .35em;
        }
    }

    a {
        display: block;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
        width: 100%;
        border: none;

        color: white;
        line-height: 2.5em;

        &.buy-button {
            background-color: $primary-color;
        }

        &.see-button {
            background-color: $secondary-color;
        }
    }
</style>