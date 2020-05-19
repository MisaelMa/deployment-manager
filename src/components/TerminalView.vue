<template>
    <div class="container">
        <div style="background-color: black; color: #EDF2F4; height: 500px;width: 100%;overflow-y: scroll;">
            <ul v-for="(data,i) of intro.listTermina" :key="i">
                <li :key="i">
                    {{data}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
    import {createComponent, onMounted, reactive, ref, watch} from '@vue/composition-api'
    import 'vue-command/dist/vue-command.css'
    import VueTerminal from 'vue-terminal-ui'
    import VueTerminalUI from '@evlad/vue-terminal-ui'
    import {useSubscription} from '@vue/apollo-composable'
    import setTerminal from '@/graphql/AddMessage.gql';

    const Terminalx = createComponent({
        components: {
            VueTerminal,
            VueTerminalUi: VueTerminalUI
        },
        setup() {
            const intro = reactive<{ listTermina: any[] }>({
                listTermina: []
            })
            const {result} = useSubscription(setTerminal)

            watch(result, data => {
                intro.listTermina.push(data.setTerminal.name)
                console.log('New message received:', data.setTerminal.name)
            }, {
                lazy: true, // Don't immediately execute handler
            })

            return {
                intro,
                result
            }
        }
    });
    export default Terminalx
</script>
<style lang="scss">
    .vue-command {
        .term {
            -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            border-radius: 8px;
        }

        .term-std {
            min-height: 300px;
            max-height: 300px;
            overflow-y: scroll;
        }
    }
</style>
