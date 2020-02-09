<template>
    <v-card>
        <v-toolbar
                color="green darken-1"
                dark
                flat
        >

            <v-toolbar-title>Marin Deployment Manager</v-toolbar-title>

            <v-spacer></v-spacer>

            <template v-slot:extension>
                <v-tabs
                        v-model="model"
                        centered
                        slider-color="yellow"
                >
                    <v-tab :href="`#tab-1`">
                        <v-icon class="mr-2">{{formatListBulletedType}}</v-icon>
                        Projects
                    </v-tab>
                    <v-tab :href="`#tab-2`">
                        <v-icon class="mr-2">{{applicationImport}}</v-icon>
                        Imports
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-tabs-items v-model="model">
            <v-tab-item :value="`tab-1`">
                <v-card flat>
                    <v-card-text>
                        <FolderExplorer/>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item :value="`tab-2`">
                <v-card flat>
                    <v-card-text>
                        <FolderExplorer/>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
    import {createComponent} from '@vue/composition-api';
    import {mdiFormatListBulletedType} from '@mdi/js';
    import {mdiApplicationImport} from '@mdi/js';
    import FolderExplorer from '@/components/folder/FolderExplorer';

    const Home = createComponent({
        // type inference enabled
        components: {
            FolderExplorer
        },
        setup() {
            const model = 'tab-2';
            const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed';
            const formatListBulletedType = mdiFormatListBulletedType;
            const applicationImport = mdiApplicationImport
            return {
                model,
                text,
                formatListBulletedType,
                applicationImport
            }
        }
    });
    export default Home
</script>
