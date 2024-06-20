import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, surname, email, phone, description } = req.body;

    // SMTP yapılandırması
    const transporter = nodemailer.createTransport({
      host: 'hena.veridyen.com', // Örnek: smtp.gmail.com
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'server@fortekindustrial.com', // SMTP kullanıcı adı
        pass: '26062606Hk' // SMTP şifresi
      }
    });

    try {
      // E-posta gönderme
      await transporter.sendMail({
        from: '"Fortek Website" <server@fortekindustrial.com>', // Gönderen adresi
        to: 'info@fortekindustrial.com', // Alıcı adresi
        subject: 'Fortek Website Contact Form', // E-posta konusu
        text: `Name: ${name}\nSurname: ${surname}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`, // E-posta metni
      });

      res.status(200).json({ message: 'Form data received and email sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
