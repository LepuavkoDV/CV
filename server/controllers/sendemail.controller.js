import nodemailer from 'nodemailer'

class Sendmail {
  async send (req, res) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_USER_PASSWORD
        }
      })

      const message = req.body
      const subj = 'Сообщение от ' + message.who
      const body = message.body + '<br/><br/><br/>' + 'Контакты: ' + message.contact
      const info = await transporter.sendMail({
        from: process.env.GMAIL_USER, // sender address
        to: 'lepuavkodv@gmail.com', // list of receivers
        subject: subj, // Subject line
        text: body, // plain text body
        html: body // html body
      })

      res.status(200).send(info)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default Sendmail
