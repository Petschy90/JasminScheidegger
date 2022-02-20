import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
    state: () => ({
        _projects: [
            { id: 1, attributes: { name: "Bild1" }},
            { id: 2, attributes: { name: "Bild2" }}
        ],
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
            // this._projects = [
            //     { id: 1, attributes: { name: "Bild1" } },
            //     { id: 2, attributes: { name: "Bild2" } },
            // ];
        },
    },
});
