import { defineStore } from "pinia";
import axios from 'axios';

export const useAboutStore = defineStore("about", {
    state: () => ({
        _text: '',
        _image: {'attributes': 'null'},
    }),
    getters: {
        text(state) {
            return state._text;
        },
        image(state) {
            return state._image;
        },
    },
    actions: {
        get() {
            axios.get('http://localhost:1337/api/about?populate=image').then(response => {
                this._text = response.data.data.attributes.text
                this._image = response.data.data.attributes.image.data
            });
        },
    },
});
