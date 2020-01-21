<template>
    <button :class="favouriteClass" @click="favouriteProduct">
        <FavouriteStar v-if="!isFavourite"/>
        <FullFavouriteStar v-else/>
    </button>
</template>

<script>

    import FavouriteStar from "../assets/icon_rating.svg?inline";
    import FullFavouriteStar from "../assets/icon_rating_full.svg?inline";

    export default {
        name: "ProductFavourite",
        props: {
            productId: {
                type: Number,
                required: true,
            },
            isFavouriteInitial: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        components: {FavouriteStar, FullFavouriteStar},
        data: function () {
            return {
                isFavourite: this.isFavouriteInitial,
            };
        },
        computed: {
            favouriteClass() {
                return this.isFavourite ? "favourite" : "";
            },
        },
        methods: {
            favouriteProduct() {
                //TODO We'd make the post request here to save it or emit an event
                setTimeout(() => this.isFavourite = !this.isFavourite, 150);
            },
        },
    };
</script>

<style scoped lang="scss">

    button.favourite {
        fill: #FFC400;
    }

    button {
        cursor: pointer;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;

        > svg {
            width: 100%;
            height: inherit;
            margin: 0;
            padding: 0;
            vertical-align: middle;
        }
    }

    button:active, button:focus {
        outline: none;
    }

</style>