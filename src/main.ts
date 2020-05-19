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
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { getMainDefinition } from 'apollo-utilities'

// Create an http link:
const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
    uri: `ws://localhost:3000/graphql`,
    options: {
        reconnect: true,
    },
})

const cache = new InMemoryCache();

const link = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink,
)

const apolloClient = new ApolloClient({
  link,
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


