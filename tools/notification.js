const registerNotification = () => {
  const OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "82228658-8611-4415-8ff8-ccb3dbe3c39f",
      autoRegister: false,
      welcomeNotification: {
        disable: true,
      },
      persistNotification: true,
      notifyButton: {
        enable: false,
      },
    });
  });

  OneSignal.push(["getNotificationPermission", function(permission) {
    console.log("Site Notification Permission:", permission);
    // (Output) Site Notification Permission: default
    // NOTE: Permission will not be detected correctly with HTTP
    // https://github.com/OneSignal/OneSignal-Website-SDK/issues/289
    if (permission !== 'granted') {
      OneSignal.registerForPushNotifications();
    }
  }]);

  OneSignal.push(function() {
    OneSignal.getUserId().then(function(userId) {
      console.log("OneSignal User ID:", userId);
    });
  });

  OneSignal.push(function() {
    OneSignal.syncHashedEmail("user2@example.com");
  });
}

export default registerNotification
