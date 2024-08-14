import nodemailer from "nodemailer";

let requestCount = 0;
const requestLimit = 5; // Batas untuk mencegah spam
const timeFrame = 60 * 60 * 1000; // 1 jam dalam milidetik
let firstRequestTime = Date.now();

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  // Logika pencegahan spam
  const currentTime = Date.now();
  if (currentTime - firstRequestTime > timeFrame) {
    requestCount = 0;
    firstRequestTime = currentTime;
  }

  if (requestCount >= requestLimit) {
    return new Response(
      JSON.stringify({
        message: "Terlalu banyak permintaan. Coba lagi nanti.",
      }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  requestCount++;

  // Setup Nodemailer menggunakan environment variables
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Menggunakan env variable
      pass: process.env.GMAIL_PASS, // Menggunakan env variable
    },
  });

  // Template HTML email
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

  // Opsi pengiriman email
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GMAIL_USER, // Email tujuan
    subject: `Formulir Kontak: ${subject}`,
    html: htmlContent,
  };

  // Mengirim email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email berhasil dikirim!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Kesalahan saat mengirim email:", error);
    return new Response(JSON.stringify({ message: "Gagal mengirim email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
