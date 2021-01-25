const {Router} = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async(req, res) => {
    //console.log(req.body);
    const { name, email, phone, message } = req.body;

     contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'gruporedg@gmail.com',
            pass: 'Nedoca01'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: '"Grupo REDG Server" <gruporedg@gmail.com>', // sender address,
        to: 'gruporedg@gmail.com',
        subject: 'Formulario de Contacto Pagina Web',
        //text: 'Hello World'
        html: contentHTML
    })

    //console.log('messageSend', info.messageId);

    res.redirect(('../success.html'));
});

module.exports = router;


