export default {
    computed: {
        $_settings(){
            return this.$root.$data.settings;
        },
        $_product_list_configured(){
            try {
                return this.$_settings.layout.product.list;
            } catch (e) {
                console.error(e);
                return false;
            }
        }
    }
}