<template>
    <label class="product-attribute">
        <input class="is-hidden" :type="radioType" :name="groupName" @change="changed" v-model="selected">
        <span>{{label}}</span>
    </label>
</template>

<script>
    export default {
        name: "ProductAttribute",
        props: {
            id: {
                type: Number,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
            productId: {
                type: Number,
                required: true,
            },
            widgetType: {
                type: Number,
                required: true,
                validator(value) {
                    return [1, 2].includes(value);
                },
            },
        },
        data: () => ({
            selected: false,
        }),
        methods: {
            changed() {
                if (this.selected) {
                    this.$emit("attribute-selected", {id: this.id});
                } else {
                    this.$emit("attribute-unselected", {id: this.id});
                }
            },
        },
        computed: {
            groupName() {
                return `prod-tag-${this.productId}`;
            },
            radioType() {
                if (this.widgetType === 1)
                    return "radio";

                return "checkbox";
            },
        },
    };
</script>

<style scoped lang="scss">
    @import "src/styles/variables";

    label.product-attribute {

        cursor: pointer;
        border: none;

        font-size: .75em;

        margin: 0.2em;

        span {
            padding: 0.5em;
            border: 1px solid $border-color;
        }

        span:hover {
            border-color: $primary-color;
            color: $primary-color;
        }
    }

    input[type=radio]:checked, input[type=checkbox]:checked {
        & + span {
            color: white;
            background-color: $primary-color;
            border-color: $primary-color;
        }
    }
</style>