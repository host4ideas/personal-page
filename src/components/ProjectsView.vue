<script>
import ProjectCard from "./ProjectCard.vue";
import mockDBProjects from "../../mockDB/projects.js";

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            // carousel settings
            settings: {
                itemsToShow: 1,
                snapAlign: "center",
                wrapAround: "true",
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 768px and up
                768: {
                    itemsToShow: 1.75,
                    snapAlign: "center",
                    wrapAround: "true",
                },
                // 1024 and up
                1024: {
                    itemsToShow: 3,
                    snapAlign: "center",
                    wrapAround: "true",
                },
            },
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
                {
                    id: 4,
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
    <div class="projects-cards-container">
        <div v-for="project of projects" :key="project.id">
            <ProjectCard
                class="button-link"
                :id="projects.indexOf(project) + 1"
                :title="project.title"
                :desc="project.desc"
                :imgSrc="project.imgSrc"
            />
        </div>
    </div>
</template>

<style>
.projects-cards-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
}
.projects-cards-container .project-card {
    max-height: 350px;
    max-width: 375px;
}
.projects-cards-container .project-card-img {
    max-height: 250px;
    max-width: 350px;
}
</style>
