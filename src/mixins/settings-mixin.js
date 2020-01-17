export default {
    computed: {
        $_settings() {
            return this.$root.$data.settings;
        },
        $_product_list_settings() {
            if (!this.$_product_list_configured) {
                return {};
            }

            return this.$_settings.layout.product.list;
        },
        $_show_favourite_widget() {
            return this.$_product_list_settings["show_favorite_widget"] || false;
        },
        $_show_tags() {
            return this.$_product_list_settings["show_tags"] || false;
        },
        $_show_campaign_tags() {
            return this.$_product_list_settings["show_campaign_tags"] || false;
        },
        $_attribute_widget_type() {
            return this.$_product_list_settings["attribute_widget_type"] || NaN;
        },
        $_product_list_configured() {
            try {
                return this.$_settings.layout.product.list;
            } catch (e) {
                console.error(e);
                return false;
            }
        },
    },
};