<script>
export default {
    props: {
        type: String,
        title: String,
        description: String,
    },
    data() {
        return {};
    },
    computed: {
        classObject() {
            switch (this.type) {
                case "error":
                    return {
                        error: true,
                        info: false,
                        success: false,
                    };
                case "info":
                    return {
                        error: false,
                        info: true,
                        success: false,
                    };
                default:
                    return {
                        error: false,
                        info: false,
                        success: true,
                    };
            }
        },
    },
};
</script>

<template>
    <div class="container centered-text" v-bind:class="classObject">
        <h1 class="popup-title">Error</h1>
        <div class="separator" />
        <h2 class="sub-title">{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<style>
.container {
    display: block;
    margin: auto;
    border-radius: 5px;
    padding: 20px;
    width: 50%;
}
.error {
    box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
    background: linear-gradient(
        0deg,
        rgba(44, 51, 51, 1) 0%,
        rgba(121, 37, 53, 0.9) 15%,
        rgba(200, 31, 55, 0.8) 45%,
        rgba(200, 31, 55, 0.8) 65%,
        rgba(121, 37, 53, 0.9) 85%,
        rgba(44, 51, 51, 1) 100%
    );
}
.info {
    box-shadow: 0 0 30px rgba(0, 0, 255, 0.5);
    background: linear-gradient(
        0deg,
        rgba(44, 51, 51, 1) 0%,
        rgba(44, 55, 121, 0.9) 15%,
        rgba(55, 75, 200, 0.8) 45%,
        rgba(55, 75, 200, 0.8) 65%,
        rgba(44, 55, 121, 0.9) 85%,
        rgba(44, 51, 51, 1) 100%
    );
}
.success {
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.5);
    background: linear-gradient(
        0deg,
        rgba(44, 51, 51, 1) 0%,
        rgba(37, 121, 53, 0.9) 15%,
        rgba(31, 182, 55, 0.8) 45%,
        rgba(31, 182, 55, 0.8) 65%,
        rgba(37, 121, 53, 0.9) 85%,
        rgba(44, 51, 51, 1) 100%
    );
}
.popup-title {
    font-family: "Montserrat", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    text-align: center;
    font-weight: 800;
    font-size: 3rem;
}
</style>
