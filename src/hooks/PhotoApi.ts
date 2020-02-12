import {reactive} from '@vue/composition-api';
import axios from 'axios';

export const usePhotoApi = () => {
    const state = reactive({
        info: null,
        loading: true,
        errored: false
    });
    const PHOTO_API_URL =
        'https://api.unsplash.com/photos/?client_id=d0ebc52e406b1ac89f78ab30e1f6112338d663ef349501d65fb2f380e4987e9e';
    axios
        .get(PHOTO_API_URL)
        .then((response: any) => {
            state.info = response.data;
        })
        .catch((error: any) => {
            console.log(error);
            state.errored = true;
        })
        .finally(() => (state.loading = false));
    return state;
};
