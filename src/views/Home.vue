<template>
    <v-card>
        <v-toolbar
                color="blue darken-1"
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
                        <MyProjects/>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item :value="`tab-2`" class="elevation-0">
                <v-sheet height="100%" class="pa-3" elevation="0">
                    <FolderExplorer :path="state.path"
                                    @folder="selectFolder"/>
                    <v-container fill-height fluid>
                        <v-row align="center"
                               justify="center">
                            <v-col cols="12" sm="12" md="6" lg="6">

                                <div class="scroll elevation-0 " scrollable style="height: 450px;">

                                    <v-list two-line subheader elevation="0" v-if="!loading">
                                        <template v-for="(item,index) in result.pathfind">
                                            <v-list-item :key="item.name">
                                                <v-list-item-avatar :tile="item.framework === 'folder' ? false : true"
                                                                    @click="selectFolder(item.path)">
                                                    <v-icon v-if="item.framework==='folder'"
                                                            class="blue--text"
                                                            style="font-size:10px"
                                                    >{{ item.framework === 'folder' ? Folder : HeadQuestionOutline}}
                                                    </v-icon>
                                                    <img v-else
                                                         :src="imageproject(item.framework)"
                                                         alt="John"
                                                    >
                                                </v-list-item-avatar>

                                                <v-list-item-content @click="selectFolder(item.path)">
                                                    <v-list-item-title>
                                                        {{item.name}}
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle
                                                            v-text="item.framework"></v-list-item-subtitle>
                                                </v-list-item-content>

                                                <v-list-item-action v-if="item.framework==='folder'? false : true">
                                                    <v-btn icon
                                                           @click="sendMessage({
                                                    name: item.name,
                                                     path: item.path,
                                                     fram: item.framework
                                                    })"
                                                    >
                                                        <v-icon color="blue lighten-1">{{cloudOutline}}</v-icon>
                                                    </v-btn>
                                                </v-list-item-action>
                                            </v-list-item>
                                            <v-divider
                                                    v-if="index + 1 < result.pathfind.length"
                                                    :key="item.id"
                                            ></v-divider>
                                        </template>
                                    </v-list>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-tab-item>
        </v-tabs-items>

    </v-card>
</template>

<script>
    import {createComponent, reactive} from '@vue/composition-api';
    import {mdiFormatListBulletedType} from '@mdi/js';
    import {mdiApplicationImport} from '@mdi/js';
    import {useQuery, useMutation} from '@vue/apollo-composable'
    import FolderExplorer from '@/components/folder/FolderExplorer';
    import MyProjects from '@/components/MyProjects'
    import messages from '@/graphql/Messages.gql';
    import addDeploy from '@/graphql/addDeployment.gql';
    import {mdiFolder} from '@mdi/js';
    import {mdiHeadQuestionOutline} from '@mdi/js';
    import {mdiCloudOutline} from '@mdi/js';
    import {useGetPosts} from '@/utils/useGuest';

    const Home = createComponent({
        // type inference enabled
        components: {
            MyProjects,
            FolderExplorer,
        },
        setup() {
            const model = 'tab-1';
            const state = reactive({
                path: '/home/misael/Documentos/misproyectos/signati',
            });
            const {state: a} = useGetPosts()
            const Folder = mdiFolder
            const HeadQuestionOutline = mdiHeadQuestionOutline
            const formatListBulletedType = mdiFormatListBulletedType;
            const applicationImport = mdiApplicationImport
            const cloudOutline = mdiCloudOutline;
            const {result, loading, refetch} = useQuery(messages, {'name': state.path});
            const {mutate: sendMessage} = useMutation(addDeploy);
            const selectFolder = (data) => {
                refetch({'name': data})
                state.path = data;
            }
            const imageproject = (picture) => {

                switch (picture) {
                    case 'angular':
                        return require('@/assets/angular.svg')
                    case 'nestjs':
                        return require('@/assets/nestjs.svg')
                    case 'vuejs':
                        return require('@/assets/vue.svg')
                    case 'nuxtjs':
                        return 'nuxtjs';
                    case 'reactjs':
                        return require('@/assets/react.png')
                    case 'esveltjs':
                        return 'esveltjs';
                    default:
                        return 'folder';
                }
            }
            return {
                model,
                formatListBulletedType,
                applicationImport,
                selectFolder,
                imageproject,
                state,
                result,
                loading,
                Folder,
                HeadQuestionOutline,
                cloudOutline,
                sendMessage,
            }
        }

    });
    export default Home
</script>

<style scoped>
    .scroll {
        overflow-y: auto;
    }

    .scroll::-webkit-scrollbar {
        width: 0px !important;
        scroll-behavior: smooth !important;
    }

    ::-webkit-scrollbar {
        width: 0px !important;
        scroll-behavior: smooth !important;
        height: 10px;
        border-radius: 50%;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 50px #3c73fc !important;
        border-radius: 10px !important;
    }

    ::-webkit-scrollbar-thumb {
        outline: 1px solid slategrey !important;
        border-radius: 10px !important;
    }
</style>
