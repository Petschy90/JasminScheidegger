<template>
  <div>
    <h1>Photo</h1>
    <ProjectPreviewList :projects="projects" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProjectsStore } from "@/store/projects.js";
import ProjectPreviewList from "@/components/projectPreviewList.vue";

export default defineComponent({
    name: "photo",
    setup() {
        const projectsStore = useProjectsStore();
        projectsStore.get();

        const projects = computed (() => projectsStore.projectsByCategoryId(1));

        return { projects };
    },
    components: { ProjectPreviewList }
});
</script>
