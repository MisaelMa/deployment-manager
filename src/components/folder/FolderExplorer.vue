<template>
    <div>

        <v-system-bar color="blue lighten-4" lights-out height="35" style="border-radius: 6px">
            {{paths}}
            <v-btn style="border-radius: 4px; height: 25px; width: 25px; min-width: 26px"
                   class="mr-1"
                   outlined>
                <v-icon>{{icons.chevronUp}}</v-icon>
            </v-btn>
            <div class="flex mr-1" style="width: 100%">
                <div v-if="state.editpath" data-v-4b6e946a="" class="vue-ui-input path-input type-text">
                    <div class="contentvue">
                        <div class="input-wrapper">
                            <input type="text"
                                   v-model="state.fullpath"
                                   v-on:keyup.enter="writePath"
                                   placeholder="Enter the full path to a folder"
                                   class="input"></div>
                        <div class="input-icon right vue-ui-icon">
                        </div>
                        <div class="border"></div>
                    </div>
                </div>
                <span v-else v-for="(path,i) of state.paths"
                      :key="i">
                    <v-btn v-if="i===0"
                           style="border-radius: 4px; height: 25px; width: 25px; min-width: 26px"
                           class="mr-1"
                           @click="clickFolder('/',0)"
                           outlined>
                        <v-icon>{{ icons.folder}}</v-icon>
                    </v-btn>
                    <v-btn v-else-if="path!==''"
                           @click="clickFolder(path,i)"
                           style="border-radius: 4px; height: 25px; " class="mr-1 pa-0"
                           outlined>
                       <span style="color: #2c3e50;">
                        {{path}}
                       </span>
                    </v-btn>

                </span>
            </div>

            <v-spacer></v-spacer>
            <v-btn style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px; float: right"
                   @click="editPath"
                   class="mr-1"
                   outlined>
                <v-icon>{{icons.pencil}}</v-icon>
            </v-btn>
            <v-btn style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px" class="mr-1" outlined>
                <v-icon>{{icons.refresh}}</v-icon>
            </v-btn>
            <v-btn style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px" class="mr-1" outlined>
                <v-icon>{{icons.starOutline}}</v-icon>
            </v-btn>
            <v-btn style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px" class="mr-1" outlined>
                <v-icon>{{icons.menuDown}}</v-icon>
            </v-btn>
            <v-btn style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px" class="mr-1" outlined>
                <v-icon>{{icons.dotsVertical}}</v-icon>
            </v-btn>

        </v-system-bar>
    </div>
</template>

<script lang="ts">
    import {computed, createComponent, reactive} from '@vue/composition-api';
    import {mdiChevronUp} from '@mdi/js';
    import {mdiFolder} from '@mdi/js';
    import {mdiRefresh} from '@mdi/js';
    import {mdiPencil} from '@mdi/js';
    import {mdiStar, mdiStarOutline} from '@mdi/js';
    import {mdiMenuDown} from '@mdi/js';
    import {mdiDotsVertical} from '@mdi/js';

    interface FolderProps {
        count: number
        path: string
    }
    const FolderExplorer = createComponent({
        props: {
            count: Number,
            path: String,
        },
        setup(props: FolderProps, {emit}) {
            const icons = {
                chevronUp: mdiChevronUp,
                folder: mdiFolder,
                refresh: mdiRefresh,
                pencil: mdiPencil,
                star: mdiStar,
                starOutline: mdiStarOutline,
                menuDown: mdiMenuDown,
                dotsVertical: mdiDotsVertical,
            };

            const state = reactive({
                editpath: false,
                paths: props.path.split('/'),
                fullpath: ''
            });
            const paths = computed(() => {
                state.paths = props.path.split('/')
            });
            const clickFolder = (folder: string, index: number) => {
                let newFullPath = '';
                for (let i = 0; i < index + 1; i++) {
                    if (i == 0) {
                        newFullPath = ''
                    } else {
                        newFullPath += '/' + state.paths[i]
                    }
                }
                if (index == 0) {
                    newFullPath = '/'
                }
                emit('folder', newFullPath)
            }
            const writePath = (path: KeyboardEvent) => {
                emit('folder', state.fullpath)
                state.editpath = !state.editpath;
            }
            const editPath = () => {
                state.fullpath = props.path
                state.editpath = !state.editpath;
            }
            return {
                icons,
                clickFolder,
                writePath,
                editPath,
                paths,
                state
            }
        }
    });
    export default FolderExplorer
</script>

<style>

    .vue-ui-input {
        display: inline-block;
        vertical-align: middle;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: auto;
        min-width: 100%;
    }

    .vue-ui-input > .contentvue {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 0 10px;
        border: thin solid currentColor;
        color: #2c3e50;
        border-radius: 3px;
        -webkit-transition: background .3s;
        transition: background .3s;
        position: relative;
        min-width: 100%;
    }

    .vue-ui-input > .contentvue > .input-wrapper {
        position: relative;
        min-width: 100%;
        -webkit-box-flex: 1;
        -ms-flex: auto 1 1;
        flex: auto 1 1;
    }

    .vue-ui-input > .contentvue > .input-wrapper > .input {
        position: relative;
        z-index: 1;
        line-height: 14px;
        color: #2c3e50;
        padding: 0;
        width: 100%;
        height: 25px;
        display: block;
        border: none;
        background: 0 0;
        outline: 0;
    }
</style>
