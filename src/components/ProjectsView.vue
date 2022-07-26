<script>
import ProjectCard from "./ProjectCard.vue";
import mockDBProjects from "../../mockDB/projects.js";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      // Loading and/or fallback project to show
      projects: [
        {
          id: 1,
          title: "Loading...",
          desc: "Loading...",
          imgSrc: "assets/icons/eye-slash-solid.svg",
        },
        {
          id: 2,
          title: "Loading...",
          desc: "Loading...",
          imgSrc: "assets/icons/eye-slash-solid.svg",
        },
        {
          id: 3,
          title: "Loading...",
          desc: "Loading...",
          imgSrc: "assets/icons/eye-slash-solid.svg",
        },
      ],
    };
  },
  methods: {
    async getProjects() {
      this.projects = mockDBProjects;
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<template>
  <div class="cards-container">
    <div v-for="project of projects" :key="project.id">
      <ProjectCard
        :title="project.title"
        :desc="project.desc"
        :imgSrc="project.imgSrc"
      />
    </div>
  </div>
</template>

<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
