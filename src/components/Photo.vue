<template>
    <div class="photo">
        <h2>{{ photo.user.name }}</h2>
        <div>
            <img width="200" :alt="altText" :src="photo.urls.regular" />
        </div>
        <p>{{ photo.user.bio }}</p>
    </div>
</template>
<script>
    import { computed } from '@vue/composition-api';
    export default {
        name: "Photo",
        props: ['photo'],
        setup({ photo }) {
            const altText = computed(() => `Hi, my name is ${photo.user.name}`);
            return { altText };
        }
    };
</script>
<style scoped>
    p {
        color:#EDF2F4;
    }
</style>
