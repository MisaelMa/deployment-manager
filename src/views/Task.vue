<template>
    <v-row dense class="about">
        <v-col cols="12" sm="3" md="3">
            <div  class="scroll pa-0 mt-0" scrollable style="height: 440px;">

            <v-list two-line>
                <template v-for="(item, index) in deploy">
                    <v-list-item :key="item.name">
                        <template>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                                <v-list-item-subtitle class="text--primary"
                                                      v-text="item.script"></v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-icon color="grey lighten-1">
                                    star_border
                                </v-icon>
                            </v-list-item-action>
                        </template>
                    </v-list-item>

                    <v-divider
                            v-if="index + 1 < deploy.length"
                            :key="index"
                    ></v-divider>
                </template>
            </v-list>

            </div>
        </v-col>
        <v-col cols="12" sm="9" md="9">
            <TerminalView rows="2" cols="2"/>
        </v-col>
    </v-row>
</template>
<script lang="ts">
    import {createComponent, onMounted} from '@vue/composition-api'
    import TerminalView from '@/components/TerminalView.vue'
    import {useQuery, useResult} from '@vue/apollo-composable';
    import getActiveDeploy from '@/graphql/getActiveDeploy.gql';
    import {useGetPosts} from '@/utils/useGuest';

    const Task = createComponent({
        components: {
            TerminalView,
        },
        setup() {
            const {result, loading, refetch} = useQuery(getActiveDeploy);
            const {state} = useGetPosts()
            const deploy = useResult(result, [], data => data.getActiveDeploy)


            return {
                deploy
            }
        }
    });
    export default Task
</script>
<style scoped>
    .scroll {
        overflow-y: auto;
    }
</style>
