import React, { useState, useEffect } from 'react';
import { getToken, onMessageListener } from '../firebase';

const Notification = () => {
  const [notification, setNotification] = useState({ title: '', body: '' });

  useEffect(() => {
    // Listen for incoming messages from FCM
    onMessageListener()
      .then((payload) => {
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body,
        });
      })
      .catch((err) => console.log('failed: ', err));
  }, []);

  return (
    <div>
      {notification.title ? (
        <div>
          <h4>{notification.title}</h4>
          <p>{notification.body}</p>
        </div>
      ) : (
        <p>No notifications yet</p>
      )}
    </div>
  );
};

export default Notification;
