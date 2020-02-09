<template>
    <button data-v-4b6e946a="" type="button" tabindex="0" role="button"
            class="vue-ui-button icon-button button has-tooltip" data-original-title="null"><!---->
        <span class="content">
                        <div class="button-icon left vue-ui-icon">
                          <v-icon>{{icons.folder}}</v-icon>
                        </div>
                        <span class="default-slot"></span> <!----> <!---->
                    </span>
    </button>
</template>
<script lang="ts">
    import {createComponent} from '@vue/composition-api';

    const DButton = createComponent({
        // type inference enabled
        setup() {
            const folder = ''

            return {
                folder
            }
        }
    });
    export default DButton
</script>

<style scoped>
    .vue-ui-button {
        display: inline-block;
        vertical-align: middle;
        border: none;
        font-family: inherit;
        text-decoration: none;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 3px;
        padding: 0 14px;
        font-size: 14px;
        line-height: 16px;
        height: 32px;
        color: #2c3e50;
        background: #e4f5ef;
        border: thin solid rgba(0, 0, 0, 0.4);
        outline: 0;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }

    .vue-ui-button.icon-button {
        padding: 0;
        width: 32px;
        height: 32px;
    }
</style>
