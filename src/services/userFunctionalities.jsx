import Cookies from 'js-cookie';

export const logOut = (navigate) => {
  Cookies.remove("sessionToken");
  navigate('/');
  window.location.reload();
};