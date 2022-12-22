const nodemailer = require('nodemailer')
const dotenv = require('dotenv');

dotenv.config({path: './.env'})

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    }
});

async function sendEmail(req, res, next){
    const mailSent = await transporter.sendMail({
        from: process.env.EMAIL,
        to: [process.env.EMAIL, 'falco@tacetvere.com'],
        subject: 'Notificação - Calculadora',
        text:   'O usuário ' + req.body.name + ' ' +
                'preencheu novos dados na calculadora de eventos\n\n' + 
                'Mensagem automática'
    });

    const mailCustomerSent = await transporter.sendMail({
        from: process.env.EMAIL,
        to: req.body.email,
        subject: 'Confirmação Calculadora Greener',
        text:   'Olá, ' + req.body.name + '!\n\n' + 
                'Obrigado por utilizar nossa calculadora Greener!' + '\n\n' + 
                'Tudo certo por aqui, recebemos seus dados para o cálculo da sua pegada de carbono. Em até 12 horas comerciais entraremos em contato com o resultado. ' + '\n\n' +
                'Até breve' + '\n\n' +
                'Equipe Greener.'
    });

    next();
};

module.exports = sendEmail;