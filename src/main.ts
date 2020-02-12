import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueCompositionApi, {provide} from '@vue/composition-api';
import {DefaultApolloClient} from '@vue/apollo-composable'
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql"
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

Vue.config.productionTip = false
Vue.use(VueCompositionApi);

new Vue({
    router,
    store,
    vuetify,
    setup: () => {
        provide(DefaultApolloClient, apolloClient)
        return {}
    },
    render: h => h(App)
}).$mount('#app')


