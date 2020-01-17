export const AddProductMixin = {
    props: {
        productId: {
            type: Number,
            required: true,
        },
    },
    methods: {
        $_addProduct(quantity) {
            this.$emit("add-product", {
                id: this.productId,
                quantity,
            });
        },
    },
};