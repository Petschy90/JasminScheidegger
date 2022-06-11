<template>
  <div>
    <h1>Typography</h1>
    <div class="grid grid-cols-4 gap-1">
        <ProjectPreviewList :projects="projects" />
    </div>
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
        
        const projects = computed (() => projectsStore.projectsByCategoryId(3));

        return { projects };
    },
    components: { ProjectPreviewList }
});
</script>
