import { defineStore } from "pinia";
import axios from 'axios';

export const useProjectsStore = defineStore("projects", {
    state: () => ({
        _projects: [],
        _meta: [],
    }),
    getters: {
        projects(state) {
            return state._projects;
        },
        projectsByCategoryId(state) {
            return (categoryId) => state._projects.filter((item) => item.attributes.category.data.id === categoryId);
        },
        project(state) {
            return (slug) => state._projects.find((item) => item.attributes.slug === slug);
        },
    },
    actions: {
        get() {
            axios.get('http://localhost:1337/api/projects?populate=images,category').then(response => {
                this._projects = response.data.data
                this._meta = response.data.meta
            });
        },
    },
});
