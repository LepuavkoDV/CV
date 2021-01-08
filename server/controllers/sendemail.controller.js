import nodemailer from 'nodemailer'

class Sendmail {
  constructor () {
    // this.transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   auth: {
    //     type: 'OAuth2',
    //     user: process.env.GMAIL_USER,
    //     clientId: process.env.GMAIL_CLIENT_ID,
    //     clientSecret: process.env.GMAIL_CLIENT_SECRET
    //   },
    //   tls: {
    //     rejectUnauthorized: false
    //   }
    // })
    // this.mailOptions = {
    //   from: process.env.GMAIL_USER,
    //   to: process.env.MY_EMAIL,
    //   subject: null,
    //   html: null,
    //   auth: {
    //     user: process.env.GMAIL_USER,
    //     refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    //     accessToken: process.env.GMAIL_ACCESS_TOKEN,
    //     expires: 1494388182480
    //   }
    // }
  }
  async send (req, res) {
    try {
      // const testAccount = await nodemailer.createTestAccount()

      let transporter = nodemailer.createTransport({
        pool: true,
        host: 'smtp-pulse.com',
        port: 2525,
        secure: false, // use TLS
        auth: {
          user: 'lepuavkodv@gmail.com',
          pass: 'TPj8etncB6H3'
        }
      })

      const message = req.body
      const subj = 'Сообщение от ' + message.who
      const body = message.body + '<br/><br/><br/>' + 'Контакты: ' + message.contact
      // this.mailOptions.subject = subj
      // this.mailOptions.html = body
      // await this.transporter.sendMail(this.mailOptions, (err, info) => {
      //   if (err) {
      //     res.status(500).send(err)
      //   } else {
      //     res.status(200).send(info)
      //   }
      // })
      console.log(message)

      const info = await transporter.sendMail({
        from: 'lepuavkodv@ldvcv.org', // sender address
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
