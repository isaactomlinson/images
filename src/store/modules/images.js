import api from '../../api/imgur';
import  { router } from '../../main';

const state = {
    images: [],
    favourites: []
};

const getters = {
    allImages: state => state.images,
    allFavourites: state => state.favourites
};

const actions = {


    async fetchImages({ commit, rootState }) {
       const response = await api.fetchImages(rootState.auth.token);

       commit('setImages', response.data.data);
    },

    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;
        
        await api.uploadImages(images, token);

        router.push('/');
    },

    async fetchFavourites({ commit, rootState }) {
        const response = await api.fetchFavourites(rootState.auth.token);

        commit('setFavourites', response.data.data);

    },
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    },

    setFavourites: (state, favourites) => {
        state.favourites = favourites;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};