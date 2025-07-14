import React, { useEffect } from 'react';

export type NotificationProps = {
  id: number;
  message: string;
  duration: number; 
  onClose: (id: number) => void;
};

const Notification: React.FC<NotificationProps> = ({ id, message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div style={{  backgroundColor: 'red',
    position: 'relative',
    width: '300px',}}>
      <span>{message}</span>
      <button onClick={() => onClose(id)} style={{ position: 'absolute',
    fontSize: '14px',}}>
        закрыть
      </button>
    </div>
  );
};





export default Notification;

