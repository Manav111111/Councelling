importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDemoDemoDemoDemoDemoDemoDemoDemo",
  authDomain: "ipu-counselling-hub.firebaseapp.com",
  projectId: "ipu-counselling-hub",
  storageBucket: "ipu-counselling-hub.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  self.registration.showNotification(notification.title || "IPU Counselling Hub", {
    body: notification.body || "New counselling update available.",
    icon: "/icon.png"
  });
});
