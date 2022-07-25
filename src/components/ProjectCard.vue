<script>
export default {
  props: {
    title: String,
    desc: String,
    imgSrc: String,
  },
  data() {
    return {
      shortedDesc: "",
    };
  },
  mounted() {
    this.shortedDesc = this.desc;
  },
  computed: {
    shortedDesc() {
      return this.shortedDesc.slice(0, 250);
    },
  },
};
</script>

<template>
  <div class="project-card">
    <h3 class="project-card-title">{{ title || "No title provided" }}</h3>
    <div>
      <p class="project-card-desc">
        {{ shortedDesc || "No description provided" }}
      </p>
      <img class="project-card-img" alt="Project image" src="{{imgSrc}}" />
    </div>
  </div>
</template>

<style>
.project-card {
  min-width: 200px;
  min-height: 250px;
  border: 1px solid black;
  overflow: hidden;
}
</style>
