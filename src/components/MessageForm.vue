<script>
import nodemailer from "nodemailer";
const { EMAIL, EMAIL_PASSWORD } = import.meta.env;

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async sendEmail(e) {
      try {
        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "elsemasturba@gmail.com",
            pass: "2cuentaparabrawlstars",
          },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: `${this.name} <${this.email}>`, // sender address
          to: EMAIL, // list of receivers
          subject: "Contact me", // Subject line
          text: this.message, // plain text body
          html: `<b>${this.message}</b>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      } catch (error) {
        console.log({ error });
      }

      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
  mounted() {
    this.$refs.p.textContent = "mounted!";
  },
};
</script>

<template>
  <div class="container">
    <p ref="p">hello</p>
    <form v-on:submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Your Name" />
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Your Email"
      />
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message"
      >
      </textarea>

      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
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

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
