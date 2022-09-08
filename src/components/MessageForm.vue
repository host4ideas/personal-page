<script>
import Popup from "./Popup.vue";
import LoadingIcon from "./LoadingIcon.vue";

export default {
    components: {
        Popup,
        LoadingIcon,
    },
    data() {
        return {
            name: "",
            email: "",
            subject: "",
            message: "",
            popupType: "",
            popupTitle: "",
            popupDescription: "",
            showPopup: false,
            loading: false,
        };
    },
    methods: {
        resetForm() {
            this.name = "";
            this.email = "";
            this.subject = "";
            this.message = "";
            this.popupType = "";
            this.popupTitle = "";
            this.popupDescription = "";
            this.loading = false;
        },
        sendEmail() {
            this.loading = true;
            fetch("/api/sendEmail", {
                method: "POST",
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
                    message: this.message,
                }),
            })
                .then((response) => response.json())
                .then((mailerResponse) => {
                    if (mailerResponse.status !== 200) {
                        // Email failed -> show error Popup component
                        this.popupType = "error";
                        this.popupTitle = "An error has ocurred.";
                        this.popupDescription = mailerResponse.json();
                        this.showPopup = true;
                        this.resetForm();
                    } else {
                        // Email failed -> show successful Popup component
                        this.popupType = "success";
                        this.popupTitle = "Message was send successfully!!!";
                        this.popupDescription = mailerResponse.json();
                        this.showPopup = true;
                        this.resetForm();
                    }
                });
        },
    },
};
</script>

<template>
    <div class="container smooth-theme">
        <div v-if="showPopup">
            <Popup
                :type="popupType"
                :title="popupTitle"
                :description="popupDescription"
            />
        </div>
        <form v-on:submit.prevent="sendEmail">
            <label class="smooth-theme">Name</label>
            <input
                autofocus
                type="text"
                v-model="name"
                name="name"
                placeholder="Your Name"
            />
            <label class="smooth-theme">Email</label>
            <input
                type="email"
                v-model="email"
                name="email"
                placeholder="Your Email"
            />
            <label class="smooth-theme">Subject</label>
            <input
                type="text"
                name="subject"
                v-model="subject"
                placeholder="Subject"
            />
            <label class="smooth-theme">Message</label>
            <textarea
                name="message"
                v-model="message"
                cols="30"
                rows="5"
                placeholder="Message"
            >
            </textarea>

            <button type="submit" class="smooth-theme">
                <div v-if="loading"><LoadingIcon /></div>
                <div v-else>Send</div>
            </button>
        </form>
    </div>
</template>

<style>
.container {
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    background-color: var(--message-bg);
    padding: 20px;
    width: 50%;
}

label {
    float: left;
    color: var(--font-color);
}

input[type="text"],
[type="email"],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

button[type="submit"] {
    background-color: var(--send-button);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    min-width: 75px;
    font-weight: 600;
    font-size: 1rem;
    color: rgba(231, 246, 242, 1);
}

button[type="submit"]:hover {
    background-color: var(--send-button-hover);
}
</style>
