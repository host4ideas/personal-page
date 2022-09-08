import nodemailer from "nodemailer";

async function mainMail(name, email, subject, message) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: import.meta.env.GMAIL_USER,
            pass: import.meta.env.PASSWORD,
        },
    });
    const mailOption = {
        from: import.meta.env.GMAIL_USER,
        to: import.meta.env.EMAIL,
        subject: subject,
        html: `You got a message from 
	  Email : ${email}
	  Name: ${name}
	  Message: ${message}`,
    };
    try {
        await transporter.sendMail(mailOption);
        return Promise.resolve("Message Sent Successfully!");
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function post({ request }) {
    const data = request.json();
    const { yourname, youremail, yoursubject, yourmessage } = data;

    try {
        await mainMail(yourname, youremail, yoursubject, yourmessage);

        return new Response(JSON.stringify("Message successfully Sent!"), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify(error.message), {
            status: 500,
        });
    }
}
