import axios from 'axios'

const browserOnly = func => (...params) => {
  if (process.browser && typeof func === 'function') func(...params) 
}

browserOnly(() => {
  const OneSignal = window.OneSignal || [];
  if (window.OneSignal === undefined) {
    window.OneSignal = OneSignal;
  }
})()

const registerNotification = browserOnly(() => {
  OneSignal.push(function() {
    OneSignal.init({
      appId: '82228658-8611-4415-8ff8-ccb3dbe3c39f',
      autoRegister: false,
      welcomeNotification: {
        disable: true,
      },
      persistNotification: false,
      notifyButton: {
        enable: false,
      },
      "notification.displayed": 'http://localhost:3000/notification-opened'
    })
  })

  OneSignal.push(["getNotificationPermission", function(permission) {
    console.log("Site Notification Permission:", permission)
    // NOTE: Permission will not be detected correctly with HTTP 
    // (https://github.com/OneSignal/OneSignal-Website-SDK/issues/289)
    if (permission !== 'granted') {
      OneSignal.registerForPushNotifications()
    }
  }])

  OneSignal.push(["addListenerForNotificationOpened", function(data) {
    console.log("Received NotificationOpened:");
    console.log(data);
    axios.post('/notification-opened', data)
  }]);
})

export const registerUserEmailToOneSignal = browserOnly((email) => {
  OneSignal.push(function() {
    OneSignal.syncHashedEmail(email).then((done) => done && alert(`Email ${email} is registered to OneSignal.`))
  })
})

export const sendNotification = browserOnly((data) => {
  axios.post('/send-notification', data)
    .then(({ data }) => alert(`Notification sent.\nNotification ID: ${data.id}\nNo. of recipients:${data.recipients}`))
    .catch(error => alert('Failed to send notification.'))
})

export default registerNotification
