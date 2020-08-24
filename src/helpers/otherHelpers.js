import { toast } from 'react-toastify';

const notifyError = notifMessage => {
  toast.error(notifMessage, {
    position: 'top-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default notifyError;
