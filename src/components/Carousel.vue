<script>
import ProjectCard from "./ProjectCard.vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    components: {
        ProjectCard,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        projects: [Object],
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
        };
    },
};
</script>

<template>
    <carousel
        :settings="settings"
        :breakpoints="breakpoints"
        :autoplay="2750"
        :wrapAround="true"
    >
        <slide
            v-for="project of projects"
            :key="project.id"
            class="carousel__slide"
        >
            <ProjectCard
                class="carousel__item"
                :id="projects.indexOf(project) + 1"
                :title="project.title"
                :desc="project.desc"
                :imgSrc="project.imgSrc"
            />
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>

<style>
.carousel__slide > .carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
    opacity: 1;
    transform: rotateY(0);
}
.carousel__slide--active > .carousel__item:hover {
    transform: scale(1.2);
}
:where(.carousel__slide--next, .carousel__slide--prev) slide:hover {
    transform: scale(1.2);
}
.carousel__slide--next > .carousel__item {
    transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
    transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
    transform: scale(1.1);
}
.carousel__prev,
.carousel__next {
    transition: 0.5s;
}
.carousel__prev:hover,
.carousel__next:hover {
    font-size: 2rem;
}

@media only screen and (max-width: 768px) {
    .carousel__prev,
    .carousel__next {
        display: none;
    }
}
</style>
