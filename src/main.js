import Vue from "vue";
import App from "./App.vue";

// you can use whatever http library you prefer
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios)

//Async Properties
import VueAsyncProperties from 'vue-async-properties'
Vue.use(VueAsyncProperties)

//Production tip
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


