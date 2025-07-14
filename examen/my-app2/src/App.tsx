import React, { useState } from 'react';
import Notification from './Notification';

interface NotificationProps {
  id: number;
  message: string;
  onClose: (id: number) => void;
}

let counter = 0;

const App: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const addNotification = (message: string) => {
   
    const id = ++counter;
    setNotifications([{ id, message, onClose: handleClose }]);
  };

  const handleClose = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => addNotification('Новое уведомление!')}>
        Показать уведомление
      </button>

      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        {notifications.map((n) => (
          <Notification key={n.id} {...n} />
        ))}
      </div>
    </div>
  );
};

export default App;
