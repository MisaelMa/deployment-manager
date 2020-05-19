import {computed, createComponent, onMounted, reactive, ref, watch} from '@vue/composition-api';

export const useGetPosts = () => {
    const state = reactive({
        posts: [],
        loading: true,
    })
    watch(
        async () => {
            const res = await fetch('https://pablomagaz.com/api/posts');
            const data = await res.json();
            state.posts = data.posts;
            state.loading = false;
        });
    return {state};

};
