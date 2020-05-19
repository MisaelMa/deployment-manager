<template>
    <div>
        <v-container fill-height fluid>
            <v-row align="center"
                   justify="center">
                <v-col cols="12" sm="12" md="6" lg="6">

                    <div class="scroll elevation-0 " scrollable style="height: 450px;">

                        <v-list two-line subheader elevation="0" v-if="!loading">
                            <template v-for="(item,index) in myAllProjects">
                                <v-list-item :key="item.name"
                                             @click="selectProject(item)"
                                >
                                    <v-list-item-avatar :tile="item.framework === 'folder' ? false : true"
                                    >
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

                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{item.name}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle
                                                v-text="item.framework"></v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action >

                                    </v-list-item-action>
                                </v-list-item>
                                <v-divider
                                        v-if="index + 1 < myAllProjects.length"
                                        :key="item.id"
                                ></v-divider>
                            </template>
                        </v-list>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
    import {createComponent} from '@vue/composition-api'
    import {useQuery, useResult} from '@vue/apollo-composable'
    import getGeployments from '@/graphql/getDeployments.gql'
    import {mdiCloudOutline} from '@mdi/js'
    import {useGetPosts} from '@/utils/useGuest';

    const myProjects = createComponent({
        setup() {
            const {result, loading, refetch} = useQuery(getGeployments);
            const {state} = useGetPosts()
            const myAllProjects = useResult(result, [], data => data.getDeployments)
            const my = 'hola mundo';
            const icons = {
                cloudOutline: mdiCloudOutline
            }
            const imageproject = (picture: string) => {

                switch (picture) {
                    case 'angular':
                        return require('@/assets/angular.svg')
                    case 'nestjs':
                        return require('@/assets/nestjs.svg')
                    case 'vuejs':
                        return require('@/assets/vue.svg')
                    case 'vue':
                        return require('@/assets/vue.svg')
                    case 'VUE':
                        return require('@/assets/vue.svg')
                    case 'nuxtjs':
                        return 'nuxtjs';
                    case 'reactjs':
                        return require('@/assets/react.png')
                    case 'esveltjs':
                        return 'esveltjs';
                    default:
                        return require('@/assets/folder.svg')
                }
            }

            const selectProject = (item: any) => {
                console.log(item)
            }
            return {
                my,
                myAllProjects,
                imageproject,
                selectProject,
                loading,
                icons
            }
        }
    });
    export default myProjects;
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
