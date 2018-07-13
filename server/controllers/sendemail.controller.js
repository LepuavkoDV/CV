import nodemailer from 'nodemailer'

class Sendmail {
  constructor () {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    this.mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.MY_EMAIL,
      subject: null,
      html: null,
      auth: {
        user: process.env.GMAIL_USER,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: process.env.GMAIL_ACCESS_TOKEN,
        expires: 1494388182480
      }
    }
  }
  async send (req, res) {
    try {
      let message = req.body
      let subj = 'Сообщение от ' + message.who
      let body = message.body + '<br/><br/><br/>'
      body += 'Контакты: ' + message.contact
      this.mailOptions.subject = subj
      this.mailOptions.html = body
      await this.transporter.sendMail(this.mailOptions, (err, info) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).send(info)
        }
      })
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default Sendmail
