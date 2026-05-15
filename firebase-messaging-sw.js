importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDGW3cYbZxFkrEcSoS4DGGFfYn98ZHWkY8",
  authDomain: "family-todo-1e7c8.firebaseapp.com",
  projectId: "family-todo-1e7c8",
  storageBucket: "family-todo-1e7c8.firebasestorage.app",
  messagingSenderId: "111686009018",
  appId: "1:111686009018:web:096d2d837641ee8ed68283"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/todo-app/background.jpg'
  });
});