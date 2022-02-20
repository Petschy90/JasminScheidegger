import { defineStore } from "pinia";
import axios from 'axios';

export const useProjectsStore = defineStore("projects", {
    state: () => ({
        _projects: [],
    }),
    getters: {
        projects(state) {
            return state._projects;
        },
        project(state) {
            return (id) => state._projects.find((item) => item.id === id);
        },
    },
    actions: {
        get() {
            axios.get('http://localhost:1337/api/projects?populate=images').then(response => {
                this._projects = response.data
            });
        },
    },
});
