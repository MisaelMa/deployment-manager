<template>
    <v-app>
        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import { createComponent } from '@vue/composition-api';

    const App = createComponent({
        // type inference enabled
    });
    export default App
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

    html, body {
        font-family: 'Roboto Condensed', sans-serif;
    }

    #app {
        font-family: 'Roboto Condensed', sans-serif;
    }
    v-application {
        font-family: ‘Quicksand’, sans-serif;
    }

</style>
