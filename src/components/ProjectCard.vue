<script>
export default {
    props: {
        id: Number,
        title: String,
        desc: String,
        imgSrc: String,
    },
    data() {
        return {
            imgRef: null,
            projectDesc: null,
        };
    },
    mounted() {
        this.imgRef = this.$refs.imgRef;
        this.projectDesc = this.$refs.projectDesc;
        this.projectDesc.innerHTML = this.desc.slice(0, 250);
    },
    methods: {
        handleScroll(e) {
            e.preventDefault();
            this.$refs.scroll.scrollTop += e.deltaY;
        },
    },
    computed: {
        shortedDesc() {
            return this.desc.slice(0, 250);
        },
    },
};
</script>

<template>
    <a
        class="project-card custom-scrollbar"
        ref="scroll"
        :href="'/projects/' + id"
        @mousewheel="handleScroll"
    >
        <h3 class="sub-title">{{ title || "No title provided" }}</h3>
        <p ref="projectDesc" class="project-card-desc" />
        <img
            ref="imgRef"
            class="project-card-img"
            alt="Project image"
            :src="imgSrc || 'assets/icons/eye-slash-solid.svg'"
        />
    </a>
</template>

<style>
.project-card {
    display: block;
    height: 325px;
    width: 275px;
    /* Arriba | Derecha | Abajo | Izquierda */
    margin: 1.2rem 5px;
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    color: black;
    background-color: rgba(213, 244, 230, 1);
    transition: transform 500ms;
}
.project-card:hover {
    transform: scale(1.1);
}
.project-card-img {
    max-height: 150px;
    max-width: 250px;
}
.project-card-desc {
    margin-bottom: 50px;
}
</style>
