<script>
import ProjectCard from "./ProjectCard.vue";
import mockDBProjects from "../../mockDB/projects.json.json";

let id = 1;

export default {
  components() {
    ProjectCard;
  },
  data() {
    return {
      projects: mockDBProjects,
    };
  },
  methods: {
    async getProjects() {
      this.projects = [
        {
          title: "BassNet",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ullamcorper urna, aliquam rhoncus est laoreet vitae. Nullam finibus sed metus venenatis rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris faucibus, nisl sit amet hendrerit consequat, elit lorem vestibulum augue, eleifend dictum nulla metus ac nibh. Ut pretium elit leo, id efficitur diam pretium in. Integer vestibulum ullamcorper justo id porta. Proin rhoncus massa nec lacus blandit, a pharetra tortor dapibus. Phasellus vitae suscipit diam. Nullam a viverra risus. Nam eu velit mauris.\nCurabitur blandit nec nisi sit amet elementum. Aenean vitae nisl ac justo interdum volutpat sit amet in massa. Suspendisse lobortis maximus quam id pharetra. Sed id urna tincidunt leo mattis egestas. Quisque quis consectetur odio. Etiam rhoncus tellus sit amet libero ultrices elementum. Vivamus at gravida diam. Duis consequat ligula a nisi consequat, a pharetra turpis faucibus.\nCras interdum luctus porta. Vestibulum vitae tempus tellus. Duis sodales, velit id rhoncus mattis, libero ex pretium magna, eget ornare risus orci id nisl. Aenean auctor arcu non nisi sodales consequat. Vivamus non massa non ante laoreet tincidunt sit amet sed diam. Duis eget ornare magna. Vestibulum sit amet facilisis nulla. Duis est sapien, dignissim et mollis eu, aliquam vel leo. Suspendisse non bibendum mauris. Aenean tempor risus feugiat nulla vulputate molestie. Etiam mattis venenatis diam vel dignissim. Sed eget sapien eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          imgSrc: "",
        },
      ];
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<template>
  <h1>My projects</h1>
  <div class="cards-container">
    <div v-for="project in projects" :key="project.id">
      <ProjectCard
        title="{{project.title}}"
        desc="{{project.desc}}"
        imgSrc="{{project.imgSrc}}"
      />
    </div>
  </div>
</template>

<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
</style>
