<template>
    <div class="columns is-centered is-gapless">
        <div class="column is-narrow" v-for="attribute in attributes"
             :key="attribute.id"
        >
            <label class="product-attribute">
                <input class="is-hidden"
                       :type="inputType" :name="groupName"
                       :value="attribute.id" v-model="selectedAttributes">
                <span>{{attribute.label}}</span>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductAttributes",
        props: {
            productId: {
                type: Number,
                required: true,
            },
            attributes: {
                type: Array,
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
            selectedAttributes: [],
        }),
        watch: {
            selectedAttributes(newValue) {
                if (!Array.isArray(newValue)) {
                    newValue = [newValue];
                }

                this.$emit("selected-attributes", newValue);
            },
        },
        computed: {
            groupName() {
                return `prod-tag-${this.productId}`;
            },
            inputType() {
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