import { toast } from 'react-toastify';

/**
 * @param {string} notifMessage - message for a user
 * @returns {void}
 */
export const notifySuccess = notifMessage => {
  toast.success(notifMessage, {
    position: 'top-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
/**
 * @param {string} notifMessage - message for a user
 * @returns {void}
 */
export const notifyError = notifMessage => {
  toast.error(notifMessage, {
    position: 'top-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
