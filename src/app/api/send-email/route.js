import nodemailer from "nodemailer";

let requestCount = 0;
const requestLimit = 5;
const timeFrame = 60 * 60 * 1000; // 1 hour in milliseconds
let firstRequestTime = Date.now();

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  // Anti-spam logic
  const currentTime = Date.now();
  if (currentTime - firstRequestTime > timeFrame) {
    requestCount = 0;
    firstRequestTime = currentTime;
  }

  if (requestCount >= requestLimit) {
    return new Response(
      JSON.stringify({ message: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  requestCount++;

  // Setup Nodemailer using environment variables
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Using env variable
      pass: process.env.GMAIL_PASS, // Using env variable
    },
  });

  // HTML email template
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
        body {
          background-color: #f2f2f2;
          font-family: Arial, sans-serif;
          color: #333;
          padding: 20px;
          margin: 0;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 10px;
          padding: 20px;
          border: 1px solid #ddd;
        }

        h2 {
          font-size: 24px;
          color: #333;
          text-align: center;
          margin-bottom: 20px;
        }

        .content {
          background-color: #ffffff;
          padding: 15px;
          border-radius: 10px;
          border: 1px solid #ddd;
        }

        p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        strong {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Contact Form Submission</h2>
        <div class="content">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Email sending options
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GMAIL_USER,
    subject: `Contact Form: ${subject}`,
    html: htmlContent,
  };

  // Send email using the promise-based version of sendMail
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
