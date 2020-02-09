<template>
    <div>

        <v-system-bar color="green lighten-5" lights-out height="30" style="border-radius: 6px">
            <v-btn  style="border-radius: 4px; height: 25px; width: 25px; min-width: 26px" class="mr-1" outlined>
                <v-icon>{{icons.chevronUp}}</v-icon>
            </v-btn>
            <v-btn  style="border-radius: 4px; height: 25px; width: 25px; min-width: 26px" class="mr-1" outlined>
                <v-icon>{{icons.folder}}</v-icon>
            </v-btn>
            <v-btn  style="border-radius: 4px; height: 25px; width: 25px; " class="mr-1" outlined>
               <span style="color: #2c3e50;">
                home
               </span>
            </v-btn>
            <v-btn  style="border-radius: 4px; height: 25px; width: 25px; " outlined>
               <span style="color: #2c3e50;">
                misael
               </span>
            </v-btn>
            <v-btn  style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px; float: right" class="mr-1" outlined>
                <v-icon>{{icons.pencil}}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn  style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px" class="mr-1" outlined>
                <v-icon>{{icons.refresh}}</v-icon>
            </v-btn>
            <v-btn  style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px" class="mr-1" outlined>
                <v-icon>{{icons.starOutline}}</v-icon>
            </v-btn>
            <v-btn  style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px" class="mr-1" outlined>
                <v-icon>{{icons.menuDown}}</v-icon>
            </v-btn>
            <v-btn  style="border-radius: 4px; height: 25px; width: 10px; min-width: 15px" class="mr-1" outlined>
                <v-icon>{{icons.dotsVertical}}</v-icon>
            </v-btn>

        </v-system-bar>
    </div>
</template>

<script lang="ts">
    import {createComponent} from '@vue/composition-api';
    import {mdiChevronUp} from '@mdi/js';
    import { mdiFolder } from '@mdi/js';
    import { mdiRefresh } from '@mdi/js';
    import { mdiPencil } from '@mdi/js';
    import { mdiStar,mdiStarOutline } from '@mdi/js';
    import { mdiMenuDown } from '@mdi/js';
    import { mdiDotsVertical } from '@mdi/js';
    const FolderExplorer = createComponent({
        // type inference enabled
        setup() {
            const folder = ''
            const icons = {
                chevronUp: mdiChevronUp,
                folder: mdiFolder,
                refresh: mdiRefresh,
                pencil: mdiPencil,
                star: mdiStar,
                starOutline: mdiStarOutline,
                menuDown: mdiMenuDown,
                dotsVertical:mdiDotsVertical
            }
            return {
                icons
            }
        }
    });
    export default FolderExplorer
</script>

