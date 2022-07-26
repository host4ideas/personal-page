<script>
export default {
  props: {
    title: String,
    desc: String,
    imgSrc: String,
  },
  data() {
    return {
      imgRef: null,
    };
  },
  mounted() {
    this.imgRef = this.$refs.imgRef;
  },
  computed: {
    shortedDesc() {
      return this.desc.slice(0, 250);
    },
  },
};
</script>

<template>
  <div class="project-card">
    <h3 class="title">{{ title || "No title provided" }}</h3>
    <div class="card-content">
      <p class="project-card-desc">
        {{ shortedDesc || "No description provided" }}
      </p>
      <img
        ref="imgRef"
        class="project-card-img"
        alt="Project image"
        :src="imgSrc || 'assets/icons/eye-slash-solid.svg'"
      />
    </div>
  </div>
</template>

<style>
.project-card-img {
  max-height: 250px;
  max-width: 350px;
}
.project-card {
  margin: 20px;
  padding: 20px;
  max-height: 300px;
  max-width: 400px;
  text-align: center;
  border-radius: 5px;
  background-color: #d5f4e6;
  overflow-y: auto;
}
</style>
