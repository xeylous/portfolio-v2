import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Transporter (Gmail with app password)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // your Gmail
                pass: process.env.EMAIL_PASS, // app password
            },
        });

        // 1️⃣ Mail to Admin
        const adminMail = {
            from: process.env.EMAIL_USER, // must be your Gmail
            to: process.env.EMAIL_TO, // your receiving email
            subject: `📩 Contact: ${subject || 'New Submission'} from ${name}`,
            text: message,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
        };

        // 2️⃣ Thank-you Mail to User
        const userMail = {
            from: process.env.EMAIL_USER, // must be your Gmail
            to: email, // send to user’s email
            subject: `Thanks for reaching out, ${name}!`,
            html: `
        <h2>Hello ${name},</h2>
        <p>Thanks for contacting me! I've received your message and will get back to you soon.</p>
        <br/>
        <p>Best Regards,<br/><b>Apurv Sinha</b></p>
      `,
        };

        // Send both mails
        await transporter.sendMail(adminMail);
        await transporter.sendMail(userMail);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("❌ Error sending mail:", error);
        return new Response(JSON.stringify({ error: "Error sending email" }), {
            status: 500,
        });
    }
}
