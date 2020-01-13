import Vue from "vue";
import App from "./App.vue";

import Axios from "axios";

Vue.config.productionTip = false;

Axios
.get("/settings.json")
.then(response => {

    let settings = response.data;

    //Set html title
    document.title = settings.title;

    new Vue({
        render: function (h) {
            return h(App);
        },
        data: {
            settings,
        },
    }).$mount("#app");
});


