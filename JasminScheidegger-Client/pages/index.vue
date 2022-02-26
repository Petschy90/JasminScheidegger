<template>
    <div class="grid grid-cols-4 gap-1">
        <ProjectPreviewList :projects="projects" />
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProjectsStore } from "@/store/projects.js";
import ProjectPreviewList from "@/components/projectPreviewList.vue";

export default defineComponent({
    name: "index",
    setup() {
        const projectsStore = useProjectsStore();
        projectsStore.get();

        const projects = computed (() => projectsStore.projects);

        return { projects };
    },
    components: { ProjectPreviewList }
});
</script>
