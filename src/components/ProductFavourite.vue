<template>
    <button :class="favouriteClass" @click.prevent="favouriteProduct">
        <FavouriteStar/>
    </button>
</template>

<script>

    import FavouriteStar from "../assets/icon_rating.svg?inline";

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
        components: {FavouriteStar},
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
                //TODO We'd make the post request here to save it
                this.isFavourite = !this.isFavourite;
            },
        },
    };
</script>

<style scoped lang="scss">

    button.favourite {
        fill: #FFC400;
    }

    button {
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        
        > svg {
            margin: 0;
            padding: 0;
            vertical-align: middle;
        }
    }

</style>