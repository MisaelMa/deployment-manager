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
