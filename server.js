const path = require('path')
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const axios = require('axios')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.post('/send-notification', (req, res) => {
    const { email, heading, content, redirectURL } = req.body
    console.log(req.body)
    axios({
      method: 'post',
      url: 'https://onesignal.com/api/v1/notifications',
      headers: {
        Authorization: 'Basic NjI2MWVkNDgtZTAwMC00NDUzLTg4YjMtZjZkNzdhNmE3ZDNj',
        'Content-Type': 'application/json'
      },  
      data: {
        app_id: '82228658-8611-4415-8ff8-ccb3dbe3c39f',
        filters: [
          {
            field: 'email',
            value: email
          }
        ],
        headings: {
          en: heading
        },
        contents: {
          en: content
        },
        url: redirectURL
      }
    })
    .then(({ data }) => {
      console.log(data)
      res.status(201).json(data)
    })
    .catch(error => {
      console.error(error.response)
      res.sendStatus(400)
    })
  })

  server.post('/notification-opened', (req, res) => {
    res.sendStatus(201)
  })

  server.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'manifest.json'))
  })

  server.get('/OneSignalSDKUpdaterWorker.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'OneSignalSDKUpdaterWorker.js'))
  })

  server.get('/OneSignalSDKWorker.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'OneSignalSDKWorker.js'))
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})